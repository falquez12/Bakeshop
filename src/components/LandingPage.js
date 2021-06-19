import React,{useState,useEffect} from 'react'
import Carousel from './Carousel'
import Parallax from './Parallax'
import NavBar from './Navbar'
import Footer from './Footer'
import Featured from './Featured'
import img from "../img/deliveryman.png";

function LandingPage() {

  return (
    <>
   <NavBar/>
   <Carousel/>
   <Featured/>
   <Parallax/>
   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="fondo " style={{ padding :"20px 10vw",justifyContent:"center"}}>
         <div style={{ margin: "0px vw", backgroundColor: "white",padding:"0px 5vw",maxWidth:"1500px",margin:"auto"}}>
         <div style={{margin:"auto",display:"flex", flexDirection:"row",justifyContent:"center",flexWrap:"wrap",maxWidth:"1500px"}}>
                        <div style={{  minWidth:"260px",maxWidth:"50%",display:"flex", flexDirection:"column",justifyContent:"center"}}>
                        <h2>Servicio a domicilio</h2>
                        <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <p style={{textAlign:"rigt",fontSize:"20px",alignSelf:"center"}}>Con nuestro servicio de domicilio pides y tu pedido llega al instante</p>
                        </div>
                        </div>
                        <img  style={{minWidth:"260px",maxWidth:"40%"}}alt='moto'  src={img}/>
                        </div>
                </div> 
        </div>
   </div> 
   <Footer/>
   </>
  );
}

export default LandingPage;