import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cover from './Cover';

import reportWebVitals from './reportWebVitals';
var calendar_arry = require('./all.json')

ReactDOM.render(
  <React.StrictMode>
    <Cover/>
    {calendar_arry.map((e, i) => <App index={i} item={e} />)}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
