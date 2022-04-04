import React from "react";
import './index.css';

function Images (props)
{
   return(
      <React.Fragment>
         {props.children}
         <section className="image-background" alt="image Tennis"></section>
      </React.Fragment>
   );
}

export { Images }