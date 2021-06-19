import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';

import "../css/fonts.css"
function Footer(){
    return(
     
      <footer id="contactanos">
      <div class="footer-top" style={{paddingTop:"30px",paddingBottom:"30px",backgroundColor:"#ffbb80"}}>
        <div class="container">
          <div class="row" style={{padding:"20px"}}>
            <div class="col-md-3 footer-about wow fadeInUp animated" style={{alignContent:"center"}} >
              <h3 className="fonti2 " style={{marginBottom:"20px"}} >Acerca de nosotros</h3>
              <p className="fonti4">
                Somos una empresa joven buscando deleitarte con el mejor sabor que tu paladar puede probar.
              </p>
              <p>© ElsyBakery Inc.</p>
                  </div>
            <div class="col-md-4 offset-md-1 footer-contact wow fadeInDown animated" >
              <h3 className="fonti2"  style={{marginBottom:"70px"}}>Contactanos</h3>
                  <p className="fonti4"><i  class="fas fa-map-marker-alt"></i> Calle 67 # 34-22 Barranquilla Colombia</p>
                  <p className="fonti4"><i className="fonti4"></i> Phone: 300 126 8347</p>
                  <p className="fonti4"><i class="fas fa-envelope"></i> Email: <a  href="elsybakery@gmail.com">elsybakery@gmail.com</a></p>
                  
                  </div>
                  <div class="col-md-4 footer-links wow fadeInUp animated">
                    <div class="row">
                      <div class="col">
                        <h3 className="fonti2" style={{marginBottom:"70px"}}>Links</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="row">
                        <p><a style={{color:"black",margin:"15px"}} class="scroll-link" href="#top-content"><InstagramIcon fontSize="large"/></a></p>
                        <p><a style={{color:"black",margin:"15px"}} href="#"><FacebookIcon  fontSize="large"/></a></p>
                        <p><a style={{color:"black",margin:"15px"}} className="fonti4" href=""><TwitterIcon  fontSize="large"/></a></p>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
               <div class="col footer-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a> 
          <a href="#"><i class="fab fa-twitter"></i></a> 
          <a href="#"><i class="fab fa-google-plus-g"></i></a> 
          <a href="#"><i class="fab fa-instagram"></i></a> 
          <a href="#"><i class="fab fa-pinterest"></i></a>
                  </div>
             </div>
        </div>
      </div>
    </footer>
     
    )
}
export default Footer;

