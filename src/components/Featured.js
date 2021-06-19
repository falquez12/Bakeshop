import React, { useState, useEffect } from 'react'
import "../css/fonts.css"
import Cardlist from './Cardlist'

function Featured() {

    return (
        <div className="fonti5" style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "20px" }}>
            <div  ><h1 className="fonti5" style={{ textAlign: "center" }}>Featured</h1></div>
            <Cardlist filtro="" filtro2="1" cantidad="4"/>
                </div>
    );
}

export default Featured;