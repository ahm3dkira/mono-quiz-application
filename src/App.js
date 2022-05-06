import React,{
  useState,
  useEffect,
} from 'react';
import { Routes, Route } from 'react-router-dom'; 

import HomePage from './routes/HomePage';
import LaunchPage from './routes/LaunchPage';
import QuizPage from './routes/QuizPage';
import ResultPage from './routes/ResultPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    // just to show the unnecessary loading screen
    setTimeout(() => {
      setLoading(false);
    } , 150);

  } , []);
  return (
    <div className="app">
      {
        loading ? <LaunchPage /> : <>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
        </> }
    </div>
  );
}
