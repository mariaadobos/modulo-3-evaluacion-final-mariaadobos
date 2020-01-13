import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './stylesheets/index.css';

ReactDOM.render(
    <BrowserRouter basename="/modulo-3-evaluacion-final-mariaadobos">
      <App />
    </BrowserRouter>,
    document.getElementById('root')
  );