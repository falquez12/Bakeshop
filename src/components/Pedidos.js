import React, { useEffect, useState }from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import "../css/fonts.css"


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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Compra() {
    const [Token, setToken] = useState('')
    const [Pedidos, setPedidos] = useState([])
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [value, setValue] = useState(0); 
    const classes = useStyles();
    useEffect(()=>{
      
        const xd={token:localStorage.getItem("token")}

        axios.post('https://bakeshopbackend.herokuapp.com/user/auth', xd)
        .then(res =>{ 
            console.log("dasda",res.data)
            setToken(res.data.userId)
          })
        if(Token){
           
            const id={
                id:Token
            }
            console.log("TOKEN",id)
        axios.post('https://bakeshopbackend.herokuapp.com/receipt/all', id)
        .then(response => {
            console.log("XDDDD",response.data)
            setPedidos(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
       
            if(Pedidos){
                setShowTotal(true)
            }
        }
    }, [Token,value])


    const renderItems = () =>{
        if(!Array.isArray(Pedidos)){
           setShowTotal(false)
           setValue(value => ++value)
        }
        return Pedidos.map(product => {
            //desc="X"+product.quantity+" "+product.productname+", "+desc
          //  cont+=(product.price*product.quantity)
            return <TableRow key={product.id}>
            <TableCell component="th" scope="row">
              {product.productos}
            </TableCell>
            <TableCell align="right">{product.total}</TableCell>
            <TableCell align="right"> ${product.referencecode}</TableCell>
          
          </TableRow>;
          })
  
    }


    return (

        <div>
            <NavBar />
            <div className="fondo" style={{ padding: "15px 0px" }}>
                <div style={{ backgroundColor: "white", maxWidth: '60vw', margin: '3rem auto', padding: "15px" }}>
                    <h1>Pedidos</h1>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Productos</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Codigo de Referencia</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {renderItems()}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
             </div>
            <Footer />
        </div>
  );
}

export default Compra;