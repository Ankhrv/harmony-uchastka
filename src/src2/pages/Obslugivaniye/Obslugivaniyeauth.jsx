import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Headerauth from '../../../Header/Headerauth';
import Menuauth from '../../../Menu/Menuauth';
import Seven from '../../../Str7/Str7';
import WindowCallauth from '../../../WindowCall/WindowCallauth';
import { Helmet } from 'react-helmet';

const Obslugivaniye = () => {

	return (
        <div className={sux.g0}>
          <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Консервация системы автополива" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
           <Headerauth />
           <Menuauth />
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/dashboard"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Обслуживание систем автополива</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
</ul>  </div>
           <Seven />
           <WindowCallauth />
        </div>
      
    );
}


export default Obslugivaniye;