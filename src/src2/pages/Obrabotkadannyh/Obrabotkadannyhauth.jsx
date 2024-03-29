import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Headerauth from '../../../Header/Headerauth';
import Menuauth from '../../../Menu/Menuauth';
import Sevenauth from '../../../Str7/Str7auth';
import WindowCallauth from '../../../WindowCall/WindowCallauth';
import k from '../Novinky/Novinky.module.css';
import { Helmet } from 'react-helmet';

const Obrabotkadannyh = () => {

	return (
        <div className={sux.go}>
                 <Helmet
       
       title="Обработка данных"
       meta={[
       {"name": "description", "content": "Landscape design Saratov"}
       ]}
    //    base={{"href": "https://harmonyuchastka.ru/Obrabotkadannyh/"}}

       />
           <Headerauth />
           <Menuauth />
           <div className={sux.g1}>     <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/dashboard"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Политика конфиденциальности</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
</ul>  </div></div>
<div className={k.Glav02}>
<div className={k.h2}>
  Соглашение с политикой конфиденциальности компании "Гармония участка"
</div>

<p className={k.p2}>Соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.
<br></br>

Присоединяясь к настоящему соглашению и оставляя свои данные на сайте harmonyuchastka.ru путем заполнения полей онлайн-заявки я даю свое согласие на обработку персональных данных и их передачу – администратору сайта компании "Гармония Участка".
<br></br><br></br>
Я подтверждаю что:
<br></br>
    все указанные данные принадлежат лично мне;
    <br></br>
    прочитал данное соглашение внимательно и в полном объеме;
    <br></br>
    текст соглашения и его условия мне понятны;
    <br></br>
    даю согласие на обработку указанных персональных данных без принуждения, по собственному волеизъявлению и в своих интересах.
    <br></br><br></br>
Персональные данные указываются мною в следующих формах заявки на сайте:<br></br>
<br></br>
    Имя и фамилия;<br></br>
    Адрес электронной почты;<br></br>
    Номер телефона.<br></br>
    <br></br>
Целью обработки персональных данных является их хранение и использование, в том числе:
<br></br>
    ответы на запросы пользователей;<br></br>
    обеспечение работы пользователя на сайте;<br></br>
    направление пользователям материалов, ответы на вопросы, информирование по рабочим вопросам;<br></br>
    заключение с пользователем договора.<br></br><br></br>

Пользователь, принимая условия настоящего Соглашения, выражает свою заинтересованность и дает полное согласие, что обработка его персональных данных включает в себя следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (предоставление доступа), обезличивание, блокирование, удаление, уничтожение персональных данных.
<br></br><br></br>
Согласие Пользователя на обработку персональных данных является конкретным, информированным и сознательным.
<br></br><br></br>
Настоящее Согласие Пользователя признается исполненным в простой письменной форме.
<br></br><br></br>
Согласие действует бессрочно с момента предоставления данных и может быть отозвано Пользователем путем подачи письменного заявления оператору с указанием данных, определенных статьей 14 Федерального закона №152-ФЗ «О персональных данных».
<br></br><br></br>
В случае отзыва Пользователем согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия Пользователя при наличии оснований, указанных в пунктах 2-11 части 1 статьи 6, части 2 статьи 10 и части 2 статьи 11 Федерального закона №152-ФЗ «О персональных данных».
<br></br><br></br>
В ходе обработки персональных данных оператор вправе осуществлять: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных пользователя.
<br></br><br></br>
Передача персональных данных пользователя третьим лицам не осуществляется, за исключением лиц, осуществляющих обработку персональных данных по поручению оператора и от его имени, а также случаев, установленных законодательством.
<br></br><br></br>
В случае участия пользователей в мероприятиях, организуемых оператором, последний вправе раскрыть соответствующие персональные данные пользователей лицам, участвующим в организации такого мероприятия.
<br></br><br></br>
Администрация имеет право вносить изменения в настоящее соглашение в любое время. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция соглашения вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Соглашения.
<br></br><br></br>
На данной странице сайта Вы можете ознакомиться с условиями пользовательского соглашение на обработку персональных данных на основании ст. 14 Федерального закона №152-ФЗ «О персональных данных».</p></div>


           <Sevenauth />
           <WindowCallauth />
        </div>
      
    );
}


export default Obrabotkadannyh;