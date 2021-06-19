import React, { Component } from 'react';


export default class Logout extends Component {
  

  
    componentDidMount(){
     
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = '/';
      
       
     }
   


  render() {
    return (
      <div>
       . 
       </div>
    )
  }
}