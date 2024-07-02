import React, { Component, createRef } from 'react'

export default class App extends Component {

    constructor(){
        super();
        // this.ref=React.createRef();

        // this.ref=React.createRef();
        this.ref=createRef();
       
        






        
    }

    buttonclicked=()=>{
        console.log("button clcik fire ");
        console.log(this.ref);
        // console.log(this.ref.current.value);
        if(this.ref.current.value.length===0){
            this.ref.current.style.borderColor="red"
        }else{
            console.log(this.ref.current.value);
            this.ref.current.style.borderColor="black"
        }
    }
  render() {
    return (
      <div>App

        <input type="text"  ref={this.ref}/>
        <button onClick={this.buttonclicked}>click me </button>
      </div>
    )
  }
}
