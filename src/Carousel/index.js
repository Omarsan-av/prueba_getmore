import React from "react";
import './index.css';

function Carousel ()
{
   const container = document.querySelector('.container');
   const point = document.querySelectorAll('.point');
   const info = document.querySelector('.info');

   point.forEach(( eachPoint , i ) => 
   {
      point[i].addEventListener('click', () =>
      {
         let position  = i;
         let operation = position * - 50

         if(position != 0)  
         {
            info.style.display= 'none';
         }
         else 
         {
            info.style.display= 'block';
         }
         
         container.style.transform = `translateX(${ operation }%)`;

         point.forEach(( eachPoint, i ) => 
         { 
            point[i].classList.remove('is-active');
         })

         point[i].classList.add('is-active');
      })
   })

   return(
      <div className="carousel">
         <div className="info">
            <h2>Nuestras <br/> <span>Raquetas</span></h2>
            <h3>Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</h3>
         </div>

         <div className="container">
            <img src="https://omarsav.com/images/getmore/image1.png" alt="Imagen 1" className="container__img image1"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 2" className="container__img"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 2" className="container__img"/>
            <img src="https://omarsav.com/images/getmore/racket.png" alt="Imagen 2" className="container__img"/>
         </div>

         <ul className="points">
            <li className="point is-active"><img className="arrow-left" src="https://omarsav.com/images/getmore/arrow_direction.svg"/></li>
            <li className="point"><img src="https://omarsav.com/images/getmore/arrow_direction.svg"/></li>
         </ul>
      </div>
   );
}

export { Carousel }