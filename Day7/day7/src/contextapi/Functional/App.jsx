import React, { useContext } from 'react'
import {store} from './store'
// using consumer 2- hook - usecontext

// export default function App() {
//   return (
//     <div>App

//         {
//             <store.Consumer>

//                 {
//                     (ctx)=><p>Counter : {ctx.counter}</p>
                        
                        
//                     //     {
//                     //     console.log(ctx);
                        
//                     // }
//                 }



//             </store.Consumer>





//         }

//         <p>Counter : 20</p>

       

//     </div>
//   )
// }

//usecontext - data consume
export default function App() {
    let ctxstore=useContext(store);
    console.log(ctxstore);
    return (
      <div>App
  
          
          <p>Counter : {ctxstore.counter}</p>
  
         
  
      </div>
    )
  }
