import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
