

import React, { Component } from 'react';
import axios from 'axios';


import "../css/style.css"
import "../fonts/material-icon/css/material-design-iconic-font.min.css"
import  imagen from "../img/logodef.png" 

import "../css/fonts.css"



export default class Login extends Component {
    constructor(props) {
      super(props);
      this.onChangeUsername=this.onChangeUsername.bind(this);
      this.onChangePassword=this.onChangePassword.bind(this);
      this.onChangeEmail=this.onChangeEmail.bind(this);
  
   
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username : '',
        password: '',
        email:'',
      
        
      }
  
    }
 
    componentDidMount() {
     
  
     
  
    }
    
    
  
      change(){

        this.setState({
          modalInsertar:false
        })
      }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
      }
      onChangePassword (e) {
        this.setState({
             password : e.target.value
        })
      }

      onChangeEmail (e) {
        this.setState({
             email : e.target.value
        })
      }
    
  
  
  
    onSubmit(e) {
      e.preventDefault();
     
      axios.post('https://bakeshopbackend.herokuapp.com/user/signup',  {
         
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }).then(res => {
      alert("Registro Exitoso")
      window.location = '/';
     })
     .catch((error) => {
       alert("Este usuario ya existe")
     });
        
      
      
   
    
    }
  
    goTolanding(){
        window.location = '/';  
    
    }







    render(){
    return(
        
    
        <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Regístrate</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" required placeholder="Nombre de usuario" value={this.state.username} onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <label for="email"><i className="zmdi zmdi-email"></i></label>
                        <input type="email" required placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input type="password" required placeholder="Contraseña" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    
                    
                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register"  />
                    </div>

                    <a href="/login" className="fonti3">Ya soy miembro</a>
                </form>

           
           
            </div>
            <div class="signup-image">
                    <figure><img src={imagen} alt="sing up image" width="300" height="300"/></figure>
                   
                </div>
        </div>  
    </div>          

                       



     
    )
    }

}

