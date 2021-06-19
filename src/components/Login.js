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
  
   
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username : '',
        password: '',
        modalInsertar:false,
        
      }
  
    }
  
    modalInsertar=()=>{
        this.setState({modalInsertar:!this.state.modalInsertar });
         
       }
    componentDidMount() {
     
  
     
  
    }
    
    check(){

        if (this.state.username!== ""  && this.state.password!=="") {
          this.modalInsertar();
        }
      
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
    
  
  
  
    onSubmit(e) {
      e.preventDefault();
     
      axios.post('https://bakeshopbackend.herokuapp.com/user/login',  {
         
      username: this.state.username,
      password: this.state.password
    }).then(res => {
       localStorage.setItem('token',res.data.token);
       localStorage.setItem('admin',res.data.admin);
        if (!res.data.token) {
        throw new Error("ERROR!");
       }
       alert("Login Satisfactorio")
       window.location = '/';
      })
      .catch((error) => {
        alert("Autenticación fallida")
      });
   
   
    
    }
  
    goTolanding(){
        window.location = '/';  
    
    }







    render(){
    return(
        
    
        <section class="sign-in">
            <div class="container">
                <div class="signin-content">
                    <div class="signin-image">
                        <figure><img src={imagen} alt="sing up image"/></figure>
                        
                    </div>

                    <div class="signin-form">
                        <h2 class="form-title">Log In</h2>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" required placeholder="Usuario" value={this.state.username} onChange={this.onChangeUsername} />
                              
                            </div>
                            <div class="form-group">
                                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" required placeholder="Contraseña" value={this.state.password} onChange={this.onChangePassword} />
                            </div>
                            
                            <div class="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Ingresar" />
                            </div>


                            <a href="/signup" className="fonti3">Aún no te has registrado ? Hazlo ahora!</a>



                        </form>

                         
                      




                       
                    </div>
                </div>
            </div>
        </section>   

  
     
    )
    }

}
