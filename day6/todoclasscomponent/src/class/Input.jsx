import React, { Component } from 'react'

export default class Input extends Component {

    constructor(){
        super();

        this.state={
            todo:""
        }
    }


     changeinput=(event)=>{
        console.log("change input fire ");
        console.log(event.target.value);

        this.setState({
            todo:event.target.value
        })
        
        console.log("testing");

    }

    componentDidMount(){
        console.log(this.props);
    }

    

       
        // console.log(event.target.value);
     
   
       
// if(event.target.value.length>0){
//   settodo(event.target.value)
//   seterror(false)

// }else{
//   seterror(true)
// }
     
              
           
         

       
     
    
  render() {
    return (
        <form className="row g-3 mt-5" >
        <div className="col-10">
         
          <input type="text"  
          className="form-control"  
          placeholder="Enter todos"
          value={this.todo}
          onChange={this.changeinput }
    
          
          
          
    
          />
    
    
        </div>
       
    
    
     
      
       
        <div className="col-2">
          <button type="submit" 
          className="btn btn-primary mb-3"
        
          
          
          
          >Add
        
           </button>
        
    
         
        </div>
        
      </form>
    )
  }
}
