import './ResultPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import React,{ useMemo } from 'react';

import refreshLogo from './../assets/refresh.png';

export default function ResultPage(){
    const { search } = useLocation();
    let navigate = useNavigate();
    let query = useMemo(() => new URLSearchParams(search) , [search]);
    function restartQuiz() {
        navigate('/quiz');
    }
    function getTime(time){
        // HH:MM:SS
        let hours = (Math.floor(time / 3600)).toString().padStart(2,0);
        let minutes = Math.floor((time - hours * 3600) / 60).toString().padStart(2,0);
        let seconds = Math.floor(time - hours * 3600 - minutes * 60).toString().padStart(2,0);
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div className='resultPage'>
            <div className='container'>
                <h3 className='S1'>عدد النقاط</h3>
                <h3 className='score'>{query.get('score')}</h3>

                <h3 className='S3'> اعاده الاختبار</h3>
                <img src={refreshLogo} alt='refresh' onClick={restartQuiz} />
                <h3 className='time'>{getTime(query.get('time')/1000)}</h3>
            </div>

            


        </div>
    );
}