import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Drawer from './Drawer';
import Drawer2 from './Drawer2';
import '../css/Navbarmodulos.css'; 
import navlogo from '../img/logopeq.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-scroll'


const jwt =localStorage.getItem("token");
var renderIt = null;
var logeado,usercart,loggeduser,pedidos,jwtboo,nombre=false;
if (jwt) {
  nombre=
   logeado= <Nav.Link href="/logout">LOGOUT</Nav.Link>;
   jwtboo=true;  
   pedidos=<Nav.Link href="/pedidos">Pedidos</Nav.Link>
   renderIt= <Drawer2>  </Drawer2>
  usercart=<Nav.Link href="/cart"><ShoppingCartIcon/></Nav.Link>
    
}else{
  loggeduser= <Nav.Link href="/login">Login</Nav.Link>;
  renderIt= <Drawer >  </Drawer>

}

function Navbar1() {
  return (
<Navbar bg="white" expand="lg">
<div style={{width:"100%"}} className="containernav"> 
<Navbar.Brand style={{margin : "auto"}} className="containernav" href="/"><img style={{width: "60%", height: "auto",margin: "auto",display: "flex"}} src={navlogo} alt="Logo" /></Navbar.Brand>
<div style={{alignSelf : "center"}}>{renderIt}</div>
  <Navbar.Collapse style={{margin : "auto"}} id="basic-navbar-nav">
    <Nav className="mr-auto texto" color="black" >
      <Nav.Link href="/compra">Compra Bakery</Nav.Link>
      <Nav.Link href="/shipping">Shipping</Nav.Link>
      <Link to="contactanos" smooth={true} duration={1000}><Nav.Link  href="/#">Contactanos</Nav.Link></Link>
      {logeado}
      {pedidos}
      {loggeduser}
      {usercart}
    </Nav>
  </Navbar.Collapse>
  </div>
</Navbar>
  );
}

export default Navbar1;
