
import React from "react";
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import MenuBaner2 from '../Landshaftnyjdizajn/Baner/MenuBaner2';
import { Link } from "react-router-dom";
import sux from '../Contacts/CoNtacts.module.css';
import Three from '../../../Str3/Three';
import For from '../../../Str4/For';
import Five from '../../../Str5/Str5';
import Form from '../../../Form/Form';
import Six from '../../../Six/Six';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import Dom from '../Contacts/Dom.png';


const Landshaftnyjdizajn = () => {

    return (
        <div>
            <Header />
            <Menu />
            <MenuBaner2 />


            <Three />
            <For />
            <div className={sux.g}>
                <ul className={sux.breadcrumb}>
                    <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
                    <li><a className={sux.b}>Ландшафтный дизайн</a></li>
                </ul>  </div>
            <Five />
            <Form />
            <Six />
            <Seven />
            <ScrollButton />
            <WindowCall />
        </div>


    );
}


export default Landshaftnyjdizajn;