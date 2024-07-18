
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';




function App() {
  const countries=useSelector((state)=>state.countries);
  console.log("countries coming ",countries);
  console.log("type of countries",typeof countries);



  const dispatch=useDispatch()


  const getcountries=async()=>{
    
    let response=await fetch('https://restcountries.com/v3.1/all')
    let data= await response.json();
 

    console.log("data coming from",data);

    
    dispatch({
      type:"ADD_COUNTRIES",
      payload:data
  })



    
  }


  useEffect(()=>{
    
    getcountries();


  },[countries.length])
  return (


 
  

  
      <div className='container mt-4'>

        {

        countries.length>0 && countries.map((country,index)=>{
            return <div className='row'>
              
            <div className='col-3' key={index}>
            <div className="card">
            <img src={country.flags.svg} className="card-img-top" alt={country.flags.svg}/>
            <div className="card-body">
              <h5 className="card-title">{country.name.common}</h5>
            
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
