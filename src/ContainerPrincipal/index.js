import React from "react";
import './index.css';

function ContainerPrincipal (props)
{
   return(
      <main className="background">
         {props.children}
         <img className="ball" src='https://omarsav.com/images/getmore/ball.svg' alt="image ball"/>
         <div className="container-main">
            <h1 className="container-main__title">Las mejores raquetas para jugar <span>Tennis</span></h1>
            <a href="#" className="button">Acerca de nosotros <img className="arrow" src="https://omarsav.com/images/getmore/path_white.svg" alt="image arrow"/></a>
         </div>
      </main>
   );
}

export { ContainerPrincipal }