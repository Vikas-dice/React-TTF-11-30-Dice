
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';

function App() {
  const countries=useSelector(state=>state.countries);
  console.log(countries);

  const dispatch=useDispatch()


  const getcountries=async()=>{
    let response=await fetch('https://restcountries.com/v3.1/all')
    let data= await response.json();

    console.log(data);
    dispatch({
      type:"ADD_COUNTRIES",
      payload:data,
    })
    
  }


  useEffect(()=>{
    getcountries();

  },[countries])
  return (


 
  

  
      <div className='container mt-4'>

        {

        countries&& countries.map((value,index)=>{
            return <div className='row'>
            <div className='col-3'>
            <div className="card">
            <img src={value.flags.svg} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{value.name.common}</h5>
            
            </div>
            
            
          </div>
          
          
          
          
          
            
          </div>
          
          
          
          
          
            
          </div>
          })
        }






  
  






  
  
</div>




  









  





 
  
  








      
   
  );
}

export default App;
