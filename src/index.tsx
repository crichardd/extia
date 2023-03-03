import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import './fonts/GothamRoundedBook.ttf';
import './fonts/GothamRoundedBold.ttf';
import './fonts/GothamRoundedMedium.ttf';
import './fonts/Oswald-VariableFont_wght.ttf';

import App from './App';
import Login from './Login';
import User from './User';
import LandingPage from './landingPage';
import reportWebVitals from './reportWebVitals';
import Meetup from "./meetupDara";
import SupportComet from './support'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Advices from './advices';
import CompanyList from './componnents/Company/Company';
import AdviceList from './componnents/AdviceDetail/AdviceDetail';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <App />
reportWebVitals();
