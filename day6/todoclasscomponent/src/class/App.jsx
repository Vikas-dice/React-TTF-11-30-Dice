import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {

    constructor(){
        super();


        this.state={
            todos:["vikas","chaudhary","dice","academy"]
        }
    }

     addtodo=(value)=>{


        console.log(value);
        this.setState({
            todos:[...this.state.todos,value]

        })
        // console.log(value);
        // console.log("add todo fun fire ");
    
        // // todos.push(value)
        // // console.log(todos);
        // settodos([...todos,value])
        // // console.log(todos);
      }
  render() {
    return (
      <div className='container mt-5 '>todo app in class component 

      <Input addtodo={this.addtodo}/>
      <List todos={this.state.todos}/>

      
      
      
      </div>
    )
  }
}
