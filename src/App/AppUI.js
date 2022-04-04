import React from "react";
import { ContainerPrincipal } from '../ContainerPrincipal'
import { Menu } from '../Menu';
import { Accesories } from '../Accesories';

function AppUI ()
{
   return (
      <React.Fragment>
         <ContainerPrincipal>
            <Menu/>
         </ContainerPrincipal>
         <Accesories/>
      </React.Fragment>
   );
}

export { AppUI }