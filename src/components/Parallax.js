import React from 'react';
import {Parallax} from 'react-parallax';
import image from '../img/Bakeshop2.jpg';
import "../css/fonts.css"
function Para() {
  return (
   <div>




        <Parallax bgImage={image} bgImageStyle={{objectFit:'cover'}} strength={750}>
        

        <div style={{display:"flex",justifyContent:"center",height:500,alignContent:"center"}}>
            <p style={{alignSelf:"center",color:"black"}} className="fonti">AUTENTICO,DELICIOSO Y A TU ALCANCE</p>
            </div>
           
        </Parallax>       
{/*
        
        </Parallax>
        <h1>2222</h1>
        <Parallax bgImage={image3} strength={-500}>
        <div style={{height:600}}>
            

        </div>
            
        </Parallax>
        <div style={{height:"100vh"}}></div>
*/}
   </div>
   
  );
}

export default Para;
