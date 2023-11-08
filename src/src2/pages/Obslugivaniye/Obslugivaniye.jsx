import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import { Helmet } from 'react-helmet';
import k from '../Novinky/Novinky.module.css';
import ScrollButton from '../../../ScrollButton/ScrollButton';


const Obslugivaniye = () => {

	return (
        <div className={sux.g0}>
          <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Консервация системы автополива" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
           <Header />
           <Menu />
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Обслуживание систем автополива</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
</ul>  </div>


<div className={k.Glav0}>
<div className={k.h2}>Обслуживание систем автополива</div>
<div className={k.Glav}>

<div className={k.txt}>
    <p className={k.p}>В компании «Гармония участка» мы предоставляем услуги по монтажу и обслуживанию систем автоматического полива. Автополив - это удобный и надежный способ орошения участка, который экономит силы, время, ресурсы. Благодаря автополиву растения независимо от погоды и времени, которое вы трат Уход за системами автоматического дождевания включает в себя:
    Пуско-наладочные работы — запуск автополива весной.
    Подбор режима полива, отладка дождевателей и системы капельного орошения, настройка пульта управления.
    Ремонтные и профилактические работы в течение года.
    Консервация системы автополива осенью..</p>
    <p className={k.p}>Дополнительная информация предоставляется по контактному телефону, или в заявке в с  интересующим вопросом в 
    службу поддержки компании «Гармония Участка».</p>
    </div>
    <div className={k.Pic23}></div>
</div>

</div>
           <Seven />
           <ScrollButton />
           <WindowCall />

        </div>
      
    );
}


export default Obslugivaniye;