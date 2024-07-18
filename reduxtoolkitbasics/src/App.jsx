
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  let counter=useSelector(state=>state.counter)
  console.log(counter);

  const dispatch=useDispatch()

  return (
    <div className="App">
     <p>Counter : {counter}</p>
     <button onClick={()=>dispatch({
      type:"ADD_COUNTER",

     })}>Increment</button>
     <button onClick={()=>dispatch({
      type:"DELETE_COUNTER"
     })}>Decrement</button>
      
    </div>
  );
}

export default App;
