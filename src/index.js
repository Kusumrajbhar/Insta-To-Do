import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import AppLazy from './AppLazy';
import Form from './Form/Form';
import AppForm from './AppForm';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    {/* <AppLazy /> */}
    <AppForm />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
