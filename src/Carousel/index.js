import React from "react";
import './index.css';

function Carousel ()
{
   const container = document.getElementsByClassName('container');
   const text = document.getElementsByClassName('info');
   let position = 0;

   const showHide = ()=>
   {
      if(position === 0)
      {
         text[0].style.display = 'block';
      }

      else 
      {
         text[0].style.display = 'none';
      }
   }

   const buttonRigth = () =>
   {
      if(position > -75)
      {
         position = position - 25;
         container[0].style.transform = `translateX(${position}%)`;
         showHide();
      }
   }

   const buttonLeft = () =>
   {
      if( position < 0 ) 
      {
         position = position + 25;
         container[0].style.transform = `translateX(${position}%)`;
         showHide();
      }
   }
   
   return(
      <div className="carousel">
         <div className="info">
            <h2>Nuestras <br/> <span>Raquetas</span></h2>
            <h3>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</h3>
         </div> 

         <div className="container">
            <img src="https://omarsav.com/images/getmore/image1.png" alt="Imagen 1" className="container__img image1"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 2" className="container__img"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 3" className="container__img"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 4" className="container__img"/>
         </div>

         <ul className="points">
            <li id="left" className="point is-active" onClick={buttonLeft}>
               <img className="arrow-left" src="https://omarsav.com/images/getmore/arrow_direction.svg"/>
            </li>
            <li id="right" className="point" onClick={buttonRigth}>
               <img src="https://omarsav.com/images/getmore/arrow_direction.svg"/>
            </li>
         </ul>
      </div>
   );
}

export { Carousel }