import React, { useCallback, useState } from "react";
import Parent2 from "./Parent2";
import Child2 from "./Child2";
import { logDOM } from "@testing-library/react";

export default function App2() {
    console.log("i am app 2");
  let [counter, setcounter] = useState(0);

//   const increment = () => {
//     console.log("testing");
//   };

const increment=useCallback(()=>setcounter(counter+1),[counter])
  return (
    <div className="App">
      App2
      <p>Counter : {counter}</p>
      <button onClick={increment}>increment</button>
      <Parent2/>
      <Child2/>
    </div>
  );
}


