import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Seven from '../Str7/Str7';
import WindowCall from '../WindowCall/WindowCall';
import { Helmet } from 'react-helmet';


const HeaderandMenu = () => {

	return (
        <div>
         <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
        <meta name="theme-color" content="#0D8259" />
        </Helmet>
           <Header />
           <Menu />
           <Seven />
           <WindowCall />
        </div>
      
    );
}


export default HeaderandMenu;