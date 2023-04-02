import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './Router';
import { firebaseApp } from "./utils/firebase";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
