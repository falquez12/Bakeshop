import React,{useState,useEffect} from 'react'
import Cardlist from './Cardlist'
import SimpleListMenu from './SimpleListMenu'
import "../css/fonts.css"
import "../css/style.css"

function Productsearch() {

    const[filtro,setfiltro] = useState(()=>{
        return ('')
    })
    const[filtro2,setfiltro2] = useState(()=>{
        return 1
    })
    const[cont,setcont] = useState(()=>{
        return 0
    })
    useEffect(()=>{
        setcont(cont+1);
    }, [filtro,filtro2])
    function updatefiltro2(index){
        switch (index) {
            case 1:
              setfiltro2(1)
              break;
            case 2:
              setfiltro2(2)
              break;
            case 3:
              setfiltro2(3)
              break;
          }          
    }
    
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="fondo " style={{ padding :"20px 10vw",justifyContent:"center"}}>
         <div style={{ margin: "0px vw", backgroundColor: "white",padding:"0px 5vw",maxWidth:"1500px",margin:"auto"}}>
                    <div style={{ margin:"20px 0px", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center" }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                        <a href="#" onClick={()=> setfiltro('')}> <p style={{ color: "#1f2124",fontSize: "2em" }} className="fonti2 marginsp borderpai">Todos</p></a>
                            <a href="#" onClick={()=> setfiltro('Pudin')}><p style={{ color: "#1f2124",fontSize: "2rem" }} className="fonti2 marginsp borderpai">Pudin</p></a>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                        <a  href="#" onClick={()=> setfiltro('Galleta')}> <p style={{ color: "#1f2124",fontSize: "2rem" }} className="fonti2 marginsp borderpai" >Galleta</p></a>
                            <a  href="#" onClick={()=> setfiltro('Cupcake')}><p style={{ color: "#1f2124",fontSize: "2rem" }} className="fonti2 marginsp " >Cupcakes</p></a></div>
                    </div>
                        <SimpleListMenu updatefiltro2={updatefiltro2}/>
                        <Cardlist key={cont} filtro={filtro} filtro2={filtro2} cantidad="todos"/>
                    </div>
                </div>
            
        </div>
    );
}
export default Productsearch;