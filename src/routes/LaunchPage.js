import './LaunchPage.css';
import logo from './../assets/logo.png';

export default function LaunchPage() {
    return (
        <div className="launchPage">
            <img src={logo} alt="logo" className='logo' />
        </div>
    );
}