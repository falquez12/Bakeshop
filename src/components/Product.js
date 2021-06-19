import React, { useEffect, useState } from 'react';
import NavBar from './Navbar'
import Footer from './Footer'
import Button from '@material-ui/core/Button';
import Cantidad from './Cantidad'
import axios from "axios";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';





const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Product(props) {
    const [titulo, settitulo] = useState(() => {
        return ('')
    })
    const [precio, setprecio] = useState(() => {
        return ('')
    })
    const [imagen, setimagen] = useState(() => {
        return ('')
    })
    const [cantidad, setcantidad] = useState(() => {
        return 0
    })
    const [Token, setToken] = useState('')
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const jwt =localStorage.getItem("token");
    useEffect(() => {
        const xd = { token: localStorage.getItem("token") }
        axios.post('https://bakeshopbackend.herokuapp.com/user/auth', xd)
            .then(res => {
                console.log("dasda", res.data)
                setToken(res.data.userId)
            })
        axios.get('https://bakeshopbackend.herokuapp.com/products/product/' + props.match.params.id)
            .then(response => {
                let array = response.data;
                settitulo(array.name);
                setprecio(array.price);
                setimagen(array.image)
                console.log(array);
            })
    })
    function updatecantidad(cantidad) {
        setcantidad(cantidad);
    }
    
    function AddToCart() {
        const prod = {
            userid: Token,
            id: props.match.params.id,
            quantity: cantidad
        }


        axios.post('https://bakeshopbackend.herokuapp.com/cart/addToCart', prod)
            .then(response => {
            })
            .catch((error) => {
                console.log(error);
            })

            setOpen(true)
    }
    const renderItems = () =>{
        var sev=""
        var mes=""
        if(jwt){
            return <Alert severity="success"
        style={{margin:"10px"}}
        action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setOpen(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        >
        Producto añadido al carrito!
        </Alert>
        }else{
            return <Alert severity="info"
        style={{margin:"10px"}}
        action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setOpen(false);
            }}
            >
            <CloseIcon fontSize="inherit" />
            </IconButton>
        }
        >
        Debes iniciar sesión primero
        </Alert>
        }
        
    }

    return (
        <div>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div className="fondo " style={{ padding: "20px 10vw", justifyContent: "center" }}>
                    <div style={{ margin: "0px vw", backgroundColor: "white", padding: "0px 5vw", maxWidth: "1500px", margin: "auto", alignContent: "flex-start" }}>
                        <div style={{ margin: "20px 0px", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <a href="/compra" > <p style={{ color: "#1f2124", fontSize: "2rem" }} className="fonti2 marginsp borderpai">Todos</p></a>
                                <a href="/compra" ><p style={{ color: "#1f2124", fontSize: "2rem" }} className="fonti2 marginsp borderpai">Pudin</p></a>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <a href="/compra" > <p style={{ color: "#1f2124", fontSize: "2rem" }} className="fonti2 marginsp borderpai" >Galleta</p></a>
                                <a href="/compra" ><p style={{ color: "#1f2124", fontSize: "2rem" }} className="fonti2 marginsp " >Cupcakes</p></a></div>
                        </div>
                        <Collapse in={open}>
                        {renderItems()}
            </Collapse>
                        <div style={{ margin: "auto", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap-reverse" }}>
                            <img style={{ minWidth: "260px", maxWidth: "30vw", marginRight: "40px", marginBottom: "40px", border: "4px double black" }} alt='postre' src={"https://bakeshopbackend.herokuapp.com/" + imagen} />
                            <div style={{ alignSelf: "flex-end", maxWidth: "50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <h2 className="fonti2">{titulo}</h2>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                    <h3 style={{ alignSelf: "center" }}>${precio}</h3>
                                    <Cantidad updatecantidad={updatecantidad} />
                                </div>
                                <Button onClick={AddToCart} style={{ width: "100%" }} variant="contained" color="secondary" size="large">
                                    Añadir al carro <AddShoppingCartIcon/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    );
}

export default Product;