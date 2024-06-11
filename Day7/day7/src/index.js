import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './portals/App';
import Headers from './portals/Headers'
// import App from './refs/Functional/App'
// import App from './refs/Class/App'
// import App from './sideeffects/App'
import App from './reducer/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


