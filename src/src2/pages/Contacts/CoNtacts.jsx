import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from './CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialVkontakte } from 'react-icons/sl';
import { SlSocialYoutube} from 'react-icons/sl';
import { BsTelephone } from 'react-icons/bs';
import { BsMailbox } from 'react-icons/bs';
import { BsClock } from 'react-icons/bs';
import { Helmet } from 'react-helmet';
import k from '../Novinky/Novinky.module.css';

const CoNtacts = () => {

	return (
        <div className={sux.g0}>
                   <Helmet
       
       title="Контакты"
       meta={[
       {"name": "description", "content": "Landscape design Saratov"}
       ]}
    //    base={{"href": "https://harmonyuchastka.ru/Contacts/"}}

       />
           <Header />
           <Menu />

           <div className={sux.g1}>  <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Контакты</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
  </ul>  
  </div></div>

  <div className={k.Glav02}>
<div className={k.h2}>
Контакты компании «Гармония участка»
</div>

<p className={k.p2}>

<BsTelephone/> +7 (937) 263-90-10 
<br></br>
<BsMailbox /> harmonY64@bk.ru 
<br></br>
<BsClock /> Понедельник - Пятница: 9:00 - 18:00.
<br></br><br></br><SlSocialInstagram/>  <SlSocialVkontakte/>  <SlSocialYoutube/>
<br></br>
<br></br>
В разделе размещена актуальная контактная информация компании по ландшафтному дизайну в Саратове — «Гармония участка».</p></div>




           <Seven />
           <WindowCall />
         
        </div>
      
    );
}


export default CoNtacts;