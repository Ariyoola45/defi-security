import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter ,Routes,Route } from 'react-router-dom'
import Recovery from './routes/RecoveryP'
import CloudPage  from './routes/CloudPage'
import ContactP from './routes/ContactP'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path ='/' element = {<App />}/>
    <Route path ='/recovery' element = {<Recovery />}/>
    <Route path ='/cloud' element = {<CloudPage />}/>
    <Route path ='/contact' element = {<ContactP />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

