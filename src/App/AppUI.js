import React from "react";
import { ContainerPrincipal } from '../ContainerPrincipal'
import { Menu } from '../Menu';
import { Accesories } from '../Accesories';
import { Carousel } from '../Carousel';

function AppUI ()
{
   return (
      <React.Fragment>
         <ContainerPrincipal>
            <Menu/>
         </ContainerPrincipal>
         <Accesories/>
         <Carousel/>
      </React.Fragment>
   );
}

export { AppUI }