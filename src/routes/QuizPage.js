import './QuizPage.css';
import React,{
    useState,
    useEffect,
    useRef
} from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
    let navigate = useNavigate();
    const host = "http://localhost:5000";
    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);  
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [startTime, setStartTime] = useState(null);


    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);


    function endQuiz() {
        navigate(`/result?score=${score}&time=${(Date.now() - startTime)}`);
    }

    function nextQuestion() {
        currentQuestion === questions.length - 1 ? endQuiz() : (
            setCurrentQuestion(currentQuestion + 1)
            );
            // remove answerd from all
            option1.current.classList.remove("answered");
            option2.current.classList.remove("answered");
            option3.current.classList.remove("answered");
            option4.current.classList.remove("answered");
    }
    function answer({answer, e}) {
        if(!answered){
            if (answer === questions[currentQuestion].answer) {
                setScore(score + 1);
            }
            // remove answerd from all
            option1.current.classList.remove("answered");
            option2.current.classList.remove("answered");
            option3.current.classList.remove("answered");
            option4.current.classList.remove("answered");
            e.target.classList.add('answered');
            setAnswered(true)
        }
    }

    useEffect(() => {
        fetch(`${host}/`).then(res => res.json()).then(data => {
            setQuestions(data);
            console.log(data);
        });
        setStartTime(Date.now());
    } , []);

    useEffect(() => {
        setAnswered(false)
    } , [currentQuestion]);

    return (
        <div className="quizPage">
            {questions && (<>
                <h3 className='header'>اجب عن احدي الاسئله الأتيه</h3>
                <div className='question'>
                    <h4 className='questionText'>{currentQuestion+1} - {questions[currentQuestion].question}</h4>
                    <div className='answers'>
                        <li ref={option1} onClick={(e)=>{answer({e:e, answer: questions[currentQuestion].option1})}}>{"ا - " + questions[currentQuestion].option1}</li>
                        <li ref={option2} onClick={(e)=>{answer({e:e, answer: questions[currentQuestion].option2})}}>{"ب - " + questions[currentQuestion].option2}</li>
                        <li ref={option3} onClick={(e)=>{answer({e:e, answer: questions[currentQuestion].option3})}}>{"ج - " + questions[currentQuestion].option3}</li>
                        <li ref={option4} onClick={(e)=>{answer({e:e, answer: questions[currentQuestion].option4})}}>{"د - " + questions[currentQuestion].option4}</li>
                    </div>
                </div>
                
                <div className='next'>
                  {answered && (<button onClick={nextQuestion}>التالي</button>)}
                </div>
                                    
            </>)}
        </div>
    );
}