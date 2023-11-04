import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from "react";
import fm from './79.module.css';
// import ii1 from '../Str7/icons82.png' ;
import ii2 from '../Str7/icons8.png' ;
import ii3 from '../Str7/icons81.png' ;
import ii4 from '../Str7/icons83png.png' ;
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../Form/windmodal/w3.css';
import vv from './../WindowCall/Phone.module.css';
import InputMask from "react-input-mask";


const Seven = () => {

    const form = useRef();
    const [phone, setPhone] = React.useState("");

    const [buttonText, setButtonText] = useState("Отправить");
  
    const sendEmail  = (e)  => {
     
      e.preventDefault();
      // setButtonText("загрузка...");
      setButtonText("отправка");
      emailjs.sendForm('service_hmoh4pe','template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
      .then((result) => {
        setButtonText("отправлено");
        console.log(result.text);
        e.target.reset();
    }, (error) => {
        console.log(error.text); 
        setButtonText("Sending Failed");
    });
   
  };

	return (

<div className={fm.firstdiv}>
<Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Обслуживание систем автополива" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
    <div className={fm.f1div}>
<div className={fm.f2div}>
<ul>
        <li className={fm.Liclass}>Гармония Участка </li>
        <li className={fm.Liclass1}><img src={ii2} alt='i2' className={fm.ii11}></img>+7 (937) 263-90-10 </li>
        <li className={fm.Liclass1}><img src={ii3} alt='i1' className={fm.ii21}></img>harmonY64@bk.ru</li>
        <li className={fm.Liclass1}><img src={ii4} alt='i1' className={fm.ii21}></img>ежедневно: 9:00 - 18:00. </li>
    </ul>


</div>
<div className={fm.f2div}>
<ul>
<li className={fm.Liclass}>Популярные услуги</li> 
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Посадка деревьев</li> </NavLink>
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Рулонный газон</li> </NavLink>
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Посевной газон</li> </NavLink>
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Искусственный газон</li> </NavLink>
<NavLink to="/Actions" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Услуги ландшафтного дизайнера</li> </NavLink>
<li href="/LD" className={fm.Liclass1}>Ландшафтное проектирование</li> 
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Монтаж систем автополива</li> </NavLink>
<NavLink to="/Contacts" style={{ textDecoration: 'none'}} >   <li className={fm.Liclass1}>Обслуживание систем автополива</li> </NavLink>
       
    </ul>
</div>
<div className={fm.f2div}>
<ul>
        <li className={fm.Liclass}>Служба поддержки</li>

        
        <Popup trigger=
                        {<li className={fm.Liclass1}>Связаться с нами</li>}
                        modal nested>
                        {
                            close => (
                                <div className='modal'>

                                    <div className='content'>

                                        <form ref={form} onSubmit={sendEmail} className='te'>

                                            <div>
                                                <button className={vv.closed} onClick=
                                                    {() => close()}>
                                                    x
                                                </button>
                                                <p className='ui3'>Служба поддержки</p>
                                                <p className='ui2'>   Укажите ваши данные и нажмите кнопку "Отправить"</p> </div>
                                                <input type="text"
                                                title="Разрешено использовать только пробелы и русские буквы"
                                                pattern="^[А-Яа-яЁё\s]+$" maxLength={10} className="inp" placeholder="Ваше имя" name="us_name" required />
                                            <InputMask type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                                                title="Используйте формат: +7 (777) 777-77-77"
                                                value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
                                                maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required />
                                            <textarea maxLength={500} className="inp" placeholder="Комментарий (не обязательно)" name="message"></textarea>
                                            <button className='knop44' type="submit" value="Отправить">{buttonText}
                                            </button>
                                            
                                            <p className='Ttb'>
                                                Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <NavLink className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</NavLink> </p>
                                        </form>
                                    </div>
                                </div>
                            )
                        }
                    </Popup>

                    
        {/* <NavLink to="/Contacts" ><li className={fm.Liclass1}>Связаться с нами</li></NavLink> */}
        <NavLink to="/Contacts" style={{ textDecoration: 'none'}} ><li className={fm.Liclass1}>Контакты</li></NavLink>
    </ul>
</div>
<div className={fm.f2div}>
<ul>
        <li className={fm.Liclass}>Личный кабинет</li>
        <NavLink to="/UserPage" style={{ textDecoration: 'none'}} > <li className={fm.Liclass1}>Личный кабинет</li> </NavLink>
        <li className={fm.Liclass1}>История заказа</li>
        <li className={fm.Liclass1}>Закладки</li>
        <li className={fm.Liclass1}>Рассылка</li>
        

        
    </ul>
</div></div>
</div>

	);
}


export default Seven;