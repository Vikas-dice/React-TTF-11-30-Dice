import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './portals/App';
import Headers from './portals/Headers'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


