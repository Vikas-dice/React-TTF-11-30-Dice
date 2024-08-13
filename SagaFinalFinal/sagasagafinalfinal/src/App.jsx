import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcountryaction, getcountrystart } from "./redux/action/country.action";




function App() {
let countries=useSelector(state=>state.countries)

let loading=useSelector(state=>state.loading)
console.log(countries);

  
  const dispatch=useDispatch()

  // const getcountries=async()=>{
   



  // }

  useEffect(()=>{
   dispatch(getcountrystart())
  
   
  },[countries.length])

  if(loading){
    return(<div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>)
  }

  return (
    
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          

            {
              countries.length>0 && countries.map((country,index)=>{
                return(
                  <div className="col-3">
                  <div className="card" >
                  <img src={country.flags.svg} className="card-img-top" alt={country.name.common}/>
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                   
                  </div>
                </div>
                </div>

                )
              })
            }


          </div>
        
      </div>
    </div>
  );
}

export default App;
