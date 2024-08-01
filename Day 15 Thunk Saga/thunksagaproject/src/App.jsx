import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcountryaction } from "./redux/country.action";

function App() {
  const countries = useSelector((state) => state.countries);

  console.log(countries);

  // const getcountries = async () => {
    

  //   dispatch(getcountryaction(data))




  //   // dispatch({
  //   //   type: "ADD_COUNTRY",
  //   //   payload: data,
  //   // });
  // };

  useEffect(() => {
    // getcountries()

    dispatch(getcountryaction())
   
  }, [countries.length]);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row">
          {
          countries.length > 0 && countries.map((country, index) => {
            return(
              <div className="col-3" key={index}>
              <div className="card">
              <img src={country.flags.svg} className="card-img-top" alt={country.name.common} />
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
