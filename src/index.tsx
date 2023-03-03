import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './index.css';

import './fonts/GothamRoundedBook.ttf';
import './fonts/GothamRoundedBold.ttf';
import './fonts/GothamRoundedMedium.ttf';
import './fonts/Oswald-VariableFont_wght.ttf';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Meetup from "./meetup";
import SupportComet from './support'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/comet" element={<Meetup/>}></Route>
                <Route path="/support-comet" element={<SupportComet/>}></Route>
                <Route path="/support-comet" element={<SupportComet/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
