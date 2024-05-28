import { useState } from 'react';
import Input from './Input'
import List from './List'
function App() {
  let [todos,settodos]=useState(["breakfast","lunch","dinner","brunch"])
  // console.log(todos);

  const addtodo=(value)=>{
    console.log(value);
    console.log("add todo fun fire ");

    // todos.push(value)
    // console.log(todos);


    settodos([...todos,value])
    // console.log(todos);

    

  


    
  }
  return (
    <div className="App">
      <Input addtodo={addtodo}/>
      <List todos={todos}/>
   


      
    </div>
  );
}

export default App;
