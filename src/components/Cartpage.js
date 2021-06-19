import React, { useEffect, useState }from 'react'

import axios from 'axios';

import ExamplesNavbar from "./Navbar";
import { MD5 } from 'crypto-js';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Footer from './Footer'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function CartPage(props) {
    const [Token, setToken] = useState('')
    const [ProdsCart, setProdsCart] = useState([])
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [value, setValue] = useState(0); 
    var cont=0
    var apikey= "4Vj8eK4rloUd272L48hsrarnUA"
    var desc=""
    const classes = useStyles();
    useEffect(()=>{
        const xd={token:localStorage.getItem("token")}
        axios.post('https://bakeshopbackend.herokuapp.com/user/auth', xd)
        .then(res =>{ 
            console.log("dasda",res.data)
            setToken(res.data.userId)
          })
        if(Token){
        axios.get('https://bakeshopbackend.herokuapp.com/cart/carProducts/'+Token)
        .then(response => {
            console.log("XDDDD",response.data)
            setProdsCart(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
       
            if(ProdsCart){
                setShowTotal(true)
            }
        }
    }, [Token,value])

 


    const removeItem=(productId)=>{
        const IDs ={
            id: productId,
            userid: Token
            }
            console.log("dsaudsa",IDs)
        axios.post('https://bakeshopbackend.herokuapp.com/cart/RemoveCartItem', IDs)
        .then(response => {
            
          })
          .catch((error) => {
            console.log(error);
          })
          axios.get('https://bakeshopbackend.herokuapp.com/cart/carProducts/'+Token)
          .then(response => {
            setProdsCart(response => {
                const newArray = response;
                return newArray;
            })
          })
          .catch((error) => {
            console.log(error);
          })
          setValue(value => ++value)
    }

    const removeAllCart =() =>{

        const reValues ={
            userid: Token,
            prods: ProdsCart,
            value: cont,
            date: Date.now()
            }

     /*  axios.post('http://localhost:5000/receipt/create', reValues)
        .then(response => {
            alert("Compra Realizada\n Recibo:"+response.data._id+"\n Total: $"+response.data.value+"\n Date: "+response.data.date)
        })
        .catch((error) => {
            console.log(error);
        })
        */
        const IDs ={
            userid: Token,
          
            }
        axios.post('https://bakeshopbackend.herokuapp.com/cart/RemoveAllCart/'+ Token)
            .then(response => {
               
            })
            .catch((error) => {
                console.log(error);
            })
        axios.get('https://bakeshopbackend.herokuapp.com/cart/carProducts/' + Token)
            .then(response => {
                setProdsCart(response => {
                    const newArray = response;
                    return newArray;
                })
            })
            .catch((error) => {
                console.log(error);
            })
        setValue(value => ++value)
    }
    const renderItems = () =>{
        if(!Array.isArray(ProdsCart)){
           setShowTotal(false)
           setValue(value => ++value)
        }
        return ProdsCart.map(product => {
            desc="X"+product.quantity+" "+product.productname+", "+desc
            cont+=(product.price*product.quantity)
            return <TableRow key={product.id}>
            <TableCell component="th" scope="row">
              {product.productname}
            </TableCell>
            <TableCell align="right">{product.quantity}</TableCell>
            <TableCell align="right"> ${product.price*product.quantity}</TableCell>
            <TableCell align="right"><button 
                  onClick={()=> removeItem(product.productId)}
                  >Remove </button> </TableCell>
          </TableRow>;
          })
  
    }
    
    const PayUform = () =>{
        desc=desc.slice(0,desc.length-2)
        return <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
        <input name="merchantId"    type="hidden"  value="508029"  ></input>
        <input name="accountId"     type="hidden"  value="512321" ></input>
        <input name="description"   type="hidden"  value= {desc}  ></input>
        <input name="referenceCode" type="hidden"  value={MD5(cont+Token)} ></input>
        <input name="amount"        type="hidden"  value={cont}   ></input>
        <input name="tax"           type="hidden"  value="0"  ></input>
        <input name="taxReturnBase" type="hidden"  value="0" ></input>
        <input name="currency"      type="hidden"  value="COP" ></input>
        <input name="signature"     type="hidden"  value={MD5(apikey+"~508029~"+MD5(cont)+"~"+cont+"~COP")} ></input>
        <input name="test"          type="hidden"  value="1" ></input>
        <input name="buyerEmail"    type="hidden"  value="test@test.com" ></input>
        <input name="responseUrl"    type="hidden"  value="https://master.d6i5xm3iz23qm.amplifyapp.com/confirmacioncompra/" ></input>
        <input name="confirmationUrl"    type="hidden"  value="https://master.d6i5xm3iz23qm.amplifyapp.com/confirmacioncompra/" ></input>
        <input name="extra3" type="hidden"  value={Token} ></input>
        <input class="btn btn-primary" name="Submit" type="submit" value="Ir a pagar" onClick={()=> removeAllCart()}></input>
        </form>;
    }
    return (
        <>
        <ExamplesNavbar />
        <div className="fondo" style={{padding:"15px 0px"}}>
        <div style={{backgroundColor:"white",maxWidth: '60vw', margin: '3rem auto',padding:"15px"}}>
           <h1>Carrito</h1>
           <div>
           <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del producto</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderItems()}
        </TableBody>
      </Table>
    </TableContainer>
            
                    <div style={{ marginTop: '3rem' }}>
                        <h2>Cantidad total: ${cont} </h2>
                    </div>
                    
                        <div style={{
                            width: '100%', display: 'flex', flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <br />
                            {PayUform()}
                            


                        </div>
                        
                
           </div>
        </div>
        </div>
        <Footer />                  
        </>
    )
}

export default CartPage