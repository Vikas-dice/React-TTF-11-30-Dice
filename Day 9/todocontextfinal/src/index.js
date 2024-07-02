import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Functional/App'
import TodoContextProvider from './Functional/TodoContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //
  //   <App />
  // 
  <React.StrictMode>
  <TodoContextProvider >
    <App/>



  </TodoContextProvider>
  </React.StrictMode>
);

