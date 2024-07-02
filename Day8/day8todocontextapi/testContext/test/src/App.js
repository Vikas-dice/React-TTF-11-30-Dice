import logo from './logo.svg';
import './App.css';
import MyComponent1 from "./components/MyComponent1"
import MyComponent2 from './components/MyComponent2';
import { MyContext } from './components/MyContext';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <MyContext.Provider value={{ count, setCount }} >
        <MyComponent1  />
        <MyComponent2 />
      </MyContext.Provider>
    </>

  );
}

export default App;
