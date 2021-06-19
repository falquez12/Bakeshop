import React, { useState } from 'react';
import NavBar from './Navbar'
import Footer from './Footer'
import Productsearch from './Productsearch'


function Compra() {

  const [count, setCount] = useState(4)

  return (
    
    <div>
   <NavBar/>
   <Productsearch/>
   <Footer/> 
   </div>
  
  );
}

export default Compra;