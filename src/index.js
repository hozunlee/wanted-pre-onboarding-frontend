import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//GA
import ReactGA from 'react-ga';
import Repository from './utils/repository';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID; // 발급받은 추적ID를 환경 변수로 불러온다.
ReactGA.initialize(TRACKING_ID);

const repository = new Repository();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App repository={repository} />
  </React.StrictMode>
);
