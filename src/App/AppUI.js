import React from "react";
import { ContainerPrincipal } from '../ContainerPrincipal'
import { Menu } from '../Menu';
import { Accesories } from '../Accesories';
import { Images } from '../Images';
// import { Carousel } from '../Carousel';
import { Footer } from '../Footer';
import { Carousel2 } from "../Carousel2";

function AppUI ()
{
   return (
      <React.Fragment>
         <ContainerPrincipal>
            <Menu/>
         </ContainerPrincipal>
         <Accesories/>
         <Images>
            <Carousel2/>
         </Images>
         <Footer/>
      </React.Fragment>
   );
}

export { AppUI }