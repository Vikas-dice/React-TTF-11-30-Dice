
import './App.css';
import Parent from './Parent';
import Child from './Child';
import { useCallback, useState } from 'react';

function App() {
  let[counter,setCounter]=useState(0);
  console.log("App");

  // const increment=useCallback(()=>{
  //   setCounter(counter+1);
  //   console.log("testing ");

  // },[])
// const increment=useCallback((prevstate)=>setCounter(prevstate+1)

// ,[])

// const increment=()=>{
//   setCounter(counter+1)
//   console.log("testing");
// }

  return (
    <div className="App">
     
      Hello World !

      <p>Counter : {counter}</p>
      <button onClick={()=>setCounter(counter+1)}>increment</button>
      

      <Parent />
      <Child/>
    
    </div>
  );
}

export default App;
