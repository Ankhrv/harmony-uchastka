
import React from "react";
import Headerauth from '../../../Header/Headerauth';
import Menuauth from '../../../Menu/Menuauth';
import Sevenauth from '../../../Str7/Str7auth';
import WindowCallauth from '../../../WindowCall/WindowCallauth';
import MenuBaner2 from './Baner/MenuBaner2';
import { Link, NavLink } from "react-router-dom";
import sux from '../Contacts/CoNtacts.module.css';
import Three from '../../../Str3/Three';
import Forauth from '../../../Str4/Forauth';
import Five from '../../../Str5/Str5';
import Form from '../../../Form/Form';
import Six from '../../../Six/Six';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import Dom from '../Contacts/Dom.png';
import { Helmet } from 'react-helmet';
import First from './Str/First';
import For2 from './Vididesign/For2';

const Landshaftnyjdizajn = () => {

    return (
        <div>
           <Helmet>
        <title>Ландшатный дизайн Саратов</title>
        <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>

            <Headerauth />
            <Menuauth />
            <MenuBaner2 />


            <Three />


            <For2/>
            <Forauth />
            <div className={sux.g1}>   
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><NavLink to="/dashboard"><img className={sux.Dom} src={Dom}></img></NavLink></li>
  <li><a name="LD" className={sux.b}>Ландшатный дизайн</a></li>
</ul>  
</div></div>

             <First/>  
            <Five />
            <Form />
            <Six />
            <Sevenauth />
            <ScrollButton />
            <WindowCallauth />
        </div>


    );
}


export default Landshaftnyjdizajn;