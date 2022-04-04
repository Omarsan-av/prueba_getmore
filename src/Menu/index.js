import React from "react";
import './index.css';

function Menu ()
{
   const buttonBurger = ()=>
   {
      let menuMobile = document.getElementById("menu-mobile");
      const menuList = document.querySelector('#menu-list');
      menuMobile.classList.toggle("openmenu");            
      menuList.classList.toggle('active');
      document.body.classList.toggle('opacity'); 
   }

   return(
      <React.Fragment>
         {/* <ul className="menu-desktop">
            <li className="item"><a href="#">Inicio</a></li>
            <li className="item"><a href="#">Acerca de nosotros</a></li>
            <li className="item"><a href="#">Historia</a></li>
            <li className="item"><a href="#">Contacto</a></li>
         </ul> */}

         <div className="menu-list active" id="menu-list">
            <ul className="list">
               <li className="list__item"><a href="#"> Inicio </a></li>
               <li className="list__item"><a href="#"> Acerca de nosotros </a></li>
               <li className="list__item"><a href="#"> historia </a></li>
               <li className="list__item"><a href="#"> Contacto </a></li>
            </ul>
         </div>

         <div className="menu-mobile" id="menu-mobile" onClick={buttonBurger}>
            <div className="icon-burger">
               <span className="icon-burger__line-1"></span>
               <span className="icon-burger__line-2"></span>
               <span className="icon-burger__line-3"></span>
            </div>
         </div>
      </React.Fragment>  
   );
}

export { Menu }