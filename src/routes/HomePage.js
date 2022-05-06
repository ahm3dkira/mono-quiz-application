import './HomePage.css';
import logo from './../assets/logo_only.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homePage">
            <img src={logo} alt="logo" className='logo' />
            <h3>مرحباً بك</h3>
            <Link to="/quiz" className='toQuiz'>
                <button>ابداء الاختبار</button>
            </Link>
        </div>
    );
}