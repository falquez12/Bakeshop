import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "../css/fonts.css"
import Product from './Product'
 function Cardp(props){
  const [radio, setradio] = useState({})
  useEffect(()=>{
    let cssProperties1 = {
      padding:"5px",
      width:"300px",
      height:"300px",
      borderRadius:"70%"
    }
    let cssProperties2 = {
      padding:"5px",
      width:"300px",
      height:"300px",
    }
    if(props.vapalfront){
      setradio(cssProperties1)
    }else{
      setradio(cssProperties2)
      }
   },[])

    return (
      <a href={"/producto/"+props.id}>
      <div href="/">
        <img href="/" style={radio} alt='postre'  src={props.img}/>
          <h2 href="/" className="fonti2" style={{fontSize:"25px", textAlign:"center"}}>{props.titulo}</h2>
          <p  className="fonti4" style={{textAlign:"center"}}>${props.precio}</p>
      </div>
      </a>
    
  );
  }
export default Cardp;