import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryAction } from "./redux/Action/country.action";

function App() {

  const countries=useSelector((state)=>state.countries)
  console.log("-----",countries);




  const dispatch=useDispatch()
  

//  const getcountries=async()=>{

 
  

//   }

  useEffect(()=>{
    dispatch(getCountryAction())
    

    
  },[])
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
       

          {
            countries.length>0 && countries.map((country,index)=>{
              return (
                <div className="col-4">
                <div className="card">
                <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
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
