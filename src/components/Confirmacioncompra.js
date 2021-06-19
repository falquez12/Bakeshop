import React, { useEffect, useState }from 'react'
import axios from 'axios';
import NavBar from './Navbar'
import Footer from './Footer'
import img from "../img/checklogo.png";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
    Typography,
    List,
    ListSubheader,
    ListItem,
    ListItemText
} from '@material-ui/core';
function Confirmacion() {
    const [Token, setToken] = useState('')
    let search = window.location.search;
    let params = new URLSearchParams(search);
    const json = {
                userid: params.get('extra3'),
                total: params.get('TX_VALUE'),
                productos: params.get('description'),
                referencecode: params.get('referenceCode'),
                date: params.get('processingDate')
                }

    console.log("YAHOO",json)
    const [count, setCount] = useState(4)
    useEffect(()=>{
       
            axios.post('https://bakeshopbackend.herokuapp.com/receipt/add', json)
            .then(res =>{ 
            })
            .catch((error) => {
                console.log(error);
            })
        
    }, [Token])


    let tema = createMuiTheme();
    tema = responsiveFontSizes(tema);

    const prods = () =>{
        var arr=json.productos.split(",")
        return arr.map(product => {
        return <ListItem >
        <ListItemText primary={product} />
      </ListItem>;
          })
    }
  return (
    
    <div>
   <NavBar/>
   <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="fondo " style={{ padding :"20px 10vw",justifyContent:"center"}}>
         <div style={{ margin: "0px vw", backgroundColor: "white",padding:"0px 5vw",maxWidth:"1500px",margin:"auto",alignContent:"flex-start"}}>
                    <div style={{ margin:"20px 0px", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                        
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                        </div>
                    </div>
                        <div style={{margin:"auto",display:"flex", flexDirection:"row",justifyContent:"center",flexWrap:"wrap-reverse"}}>
                        <img style={{minWidth:"260px",maxWidth:"30vw",marginRight:"40px",marginBottom:"40px"}}  src={img}/>
                        <div style={{alignSelf:"flex-end",maxWidth:"50%",display:"flex", flexDirection:"column",justifyContent:"center"}}>
                        <div >
                        <h3 className="fonti2">Compra exitosa</h3>
                            <List >
                            <ul style={{marginTop:"30px"}}>
                                    <ListItem >
                                            <ListItemText primary={`Fecha: ${json.date}`} />
                                    </ListItem>
                                    <ListItem >
                                            <ListItemText primary={`Código de referencia: ${json.referencecode}`} />
                                    </ListItem>
                                    <ListItemText primary={`Productos:`} />
                            {prods()}
                            </ul>
                            </List>
                        </div>
                       
                        </div>
                    </div>
                </div> 
        </div>
   <Footer/> 
   </div>
   </div>
  
  );
}

export default Confirmacion;