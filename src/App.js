import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import SignUp from './components/SignUp'
import Compra from './components/Compra'
import Product from './components/Product'
import LandingPage from './components/LandingPage'
import Cart from './components/Cartpage'
import Confirmacion from './components/Confirmacioncompra'
import Shipping from './components/Shipping'
import Pedidos from './components/Pedidos'
function App() {
  return (
    <Router>
    <div>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/compra" component={Compra}/>
    <Route path="/producto/:id" component={Product}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/confirmacioncompra/" component={Confirmacion}/>
    <Route path="/shipping" component={Shipping}/>
    <Route path="/pedidos" component={Pedidos}/>
   </div>
   </Router>
  );
}

export default App;
