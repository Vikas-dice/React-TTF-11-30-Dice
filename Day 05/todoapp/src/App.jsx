import { useState } from 'react';
import Input from './Input'
import List from './List'
function App() {
  let [todos,settodos]=useState(["breakfast","lunch","dinner","brunch"])
  // console.log(todos);
  let[edit,setedit]=useState({
    value:'',
    index:'',


  })

  const addtodo=(value)=>{
    console.log(value);
    console.log("add todo fun fire ");

    // todos.push(value)
    // console.log(todos);


    settodos([...todos,value])
    // console.log(todos);

    

  


    
  }

  const deletetodo=(value)=>{
    // console.log(value);
    // console.log("delete todo fire ");
    // todos.splice(index,1);
    // console.log(todos);

    // settodos([...todos])

    let filterdata=todos.filter((todo)=>todo!==value);
    console.log(filterdata);
    settodos(filterdata)


 
  }

  const edittodos=(index,value)=>{
    console.log(index,value);
    console.log("edit todo fire ");

 
    setedit({
      index,
      value
    })

    // console.log(todos);
  }
  return (
    <div className="App">
      <Input addtodo={addtodo}/>
      <List todos={todos} deletetodo={deletetodo} edittodos={edittodos}/>
   


      
    </div>
  );
}

export default App;
