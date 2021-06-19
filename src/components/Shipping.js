import React, { useState } from 'react';
import NavBar from './Navbar'
import Footer from './Footer'
import Productsearch from './Productsearch'
import img from '../img/localidades.png'
import "../css/fonts.css"

function Compra() {

    return (

        <div>
            <NavBar />
            <div className="fondo" style={{ padding: "15px 0px" }}>
                <div style={{ backgroundColor: "white", maxWidth: '60vw', margin: '3rem auto', padding: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <div style={{maxWidth:"50%"}}>
                        <h3 className="fonti2">Shipping</h3>
                            Contamos con envios a toda barranquilla con envios desde $4000 dependiendo de tu zona
                            <ul style={{marginTop:"20px"}}>
                            <li className="fonti3">Zona 1 Riomar: $4000</li>
                            <li className="fonti3">Zona 2 Norte-Centro historico: $4000</li>
                            <li className="fonti3">Zona 3 Sur Occiedente: $5000</li>
                            <li className="fonti3" >Zona 4 Metropolitana: $6000</li>
                            <li className="fonti3">Zona 4 Riomar: $6000</li>
                            </ul>
                        </div>
                            <img style={{ minWidth: "260px", maxWidth: "50%" }} alt='moto' src={img} />
                    </div>
                </div>
                </div>
                <Footer />
        </div>
  );
}

export default Compra;