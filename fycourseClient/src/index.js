import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; //convention is to have all import statements at the top. You have to.
import './index.css';
import App from './App';

ReactDOM.render( //You don't need the two strictmode lines going forward, but leave it for now...
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
