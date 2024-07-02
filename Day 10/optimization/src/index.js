import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App2 from './App2';
// import Usememo from './Usememo';
// import App from './customHooks/App'
import Employee from './customHooks/Employee';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Employee />
  </React.StrictMode>
);
