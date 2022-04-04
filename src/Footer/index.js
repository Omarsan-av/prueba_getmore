import React from "react";
import './index.css';

function Footer ()
{
   return(
      <footer>
         <div className="footer">
            <ul className="footer-menu">
               <li><a className="footer-menu__item" href="#">Inicio</a></li>
               <li><a className="footer-menu__item" href="#">Acerca de nosotros</a></li>
               <li><a className="footer-menu__item" href="#">Historia</a></li>
               <li><a className="footer-menu__item" href="#">Contacto</a></li>
            </ul>

            <ul className="footer-social">
               <li><a className="footer-social__red" href="#"><img src="https://omarsav.com/images/getmore/linkedin.svg" alt="icon linkedin"/></a></li>
               <li><a className="footer-social__red" href="#"><img src="https://omarsav.com/images/getmore/vimeo.svg" alt="icon vimeo"/></a></li>
               <li><a className="footer-social__red" href="#"><img src="https://omarsav.com/images/getmore/instagram.svg" alt="icon instagram"/></a></li>
               <li><a className="footer-social__red" href="#"><img src="https://omarsav.com/images/getmore/twitter.svg" alt="icon twitter"/></a></li>
               <li><a className="footer-social__red" href="#"><img src="https://omarsav.com/images/getmore/facebook.svg" alt="icon facebook"/></a></li>
            </ul>
         </div>
         <img className="ball-footer" src="https://omarsav.com/images/getmore/ball_footer.svg" alt="ball"/>
      </footer>
   );
}

export { Footer }