import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import k from './Novinky.module.css';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import { Helmet } from 'react-helmet';

const Novinky = () => {

	return (
         <div className={sux.g0}>
           <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Продажа и монтаж водопадов" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
           <Header />
           <Menu />
           
           <div className={sux.g1}>   
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Новинки сезона</a></li>
</ul>  
</div></div>
 
<div className={k.Glav0}>
<div className={k.h2}>Водопад в дизайн проект</div>
<div className={k.Glav}>

<div className={k.txt}>
    <p className={k.p}>Многим этого продукта недоставало , кто-то думает о приобретении, а кто-то уже любуется данным чудом сидя перед своим собсвенным пейзажем. Водопады превосходны не только приятной внешностью, но и учавствуют в уровне влажности в жаркую погоду. Наша компания осуществит монтаж данных ноу-хау систем в Ваш интрьер.</p>
    <p className={k.p}>Дополнительная информация предоставляется по контактному телефону, или в заявке в с  интересующим вопросом в 
    службу поддержки компании «Гармония Участка».</p>
    </div>
    <div className={k.Pic22}></div>
</div>

</div>
           <Seven />
           <ScrollButton />
           <WindowCall />

        </div>
      
    );
}


export default Novinky;