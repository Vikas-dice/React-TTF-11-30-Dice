import React, { Component } from 'react'

export default class List extends Component {

    constructor(){
        super();

    }

    componentDidMount(){
        console.log("comp did mount chal gya ");
        console.log(this.props.todos);

    }
  render() {
    return (
        <ul className="list-group">

        {

         
                 <li className="list-group-item d-flex justify-content-between"  
                 
                 
                 
                 
                 >

           {
            this.props.todos.length>0?this.props.todos.map((value,index)=>{
               return <li className="list-group-item d-flex justify-content-between" key={index} 
               
               > {value}</li>
                
              
            }) :<li className="list-group-item">no todo</li>
           }
           
                  
             
                  <div></div>
                  <div className='d-flex flex-row '>
                   <div className='mx-3'>
                    <button 
                    className="btn btn-warning"
                    onClick={()=>{}}
                    
                    
                    >edit</button>
                   </div>
                    <button className='btn btn-danger'
                    onClick={()=>{}}
                    
                    
                    >
                      
                      Delete</button>
                  </div>

                 
                  
                  
                  
                  
                  
                  </li>

            
        }





   
    
    {/* <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}
  </ul>
    )
  }
}
