import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import { Helmet } from 'react-helmet';

const Price = () => {

	return (
        <div className={sux.g0}>
              <Helmet
       
       title="Прайс"
       meta={[
       {"name": "description", "content": "Landscape design Saratov"}
       ]}
       base={{"href": "https://harmonyuchastka.ru/Price/"}}

       />
           <Header />
           <Menu />
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Прайс-лист</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
</ul>  </div>
           <Seven />
           <WindowCall />
           
        </div>
      
    );
}


export default Price;