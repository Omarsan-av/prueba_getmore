import React from "react";
import './index.css';

function Accesories ()
{
   return(
      <section className="accesories">
         <h2 className="accesories__title">Raquetas.Accesorios.<br/>Pelotas.</h2>
         <h3 className="accesories__description">Conoce nuestras raquetas y aprende a jugar Tennis cómo un profesional.</h3> 
         <h3 className="accesories__tennis">Tennis</h3>
         {/* <div className="description__text"> </div>*/}
         <a href="#" className="accesories__button">Historia <img className="arrow" src="https://omarsav.com/images/getmore/path.svg" alt="image arrow"/></a>
      </section>
   );
}

export { Accesories }