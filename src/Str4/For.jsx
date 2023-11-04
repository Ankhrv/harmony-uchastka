import React from 'react';
import n from './For.module.css';
import dom1 from '../Str4/dom4.jpg';
import dom2 from '../Str4/dom2.jpg';
import dom3 from '../Str4/dom1.jpg';
import dom7 from '../Str4/dom7.jpg';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";
import { useRef } from 'react';
import { useState } from "react";
import Popup from 'reactjs-popup';
import vv from '../WindowCall/Phone.module.css';
import { Helmet } from 'react-helmet';

const For = () => {
  
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
    
<div className={n.Glav}>

<Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>

<div className={n.txt}><p>Примеры наших работ </p> 
</div>
<div className={n.Pic4}>
    <div className={n.Pic}>
    <div className={n.Pic300}> 

    <div className={n.Pic200}> 

    <div className={n.Pic24}> 
     <img src={dom1} alt="fom1" className={n.Pic2}></img>
      <p className={n.Pic25}>Посадка хвойных деревьев</p>
  

      <Popup trigger=
            {<a href='#' className={n.Pica}>Подробнее</a>}
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
        pattern="^[А-Яа-яЁё\s]+$"  maxLength={10} className="inp" placeholder="Ваше имя" name="us_name" required />
      <InputMask  type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
        title="Используйте формат: +7 (777) 777-77-77"
        value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
        maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required />
      <textarea maxLength={500} className="inp" placeholder="Опишите ваш вопрос и уточните удобное время для получения консультации" required name="message"></textarea>
      <button  className='knop44' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Ttb'>
     Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link> </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>


      </div>

    <div className={n.Pic24}>  
     <img src={dom2} alt="fom1" className={n.Pic2}></img>
     <p className={n.Pic25}>Посадка цветов </p>
  
    



    <Popup trigger=
            {<a href='#' className={n.Pica}>Подробнее</a>}
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
        pattern="^[А-Яа-яЁё\s]+$"  maxLength={10} className="inp" placeholder="Ваше имя" name="us_name" required />
      <InputMask  type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
        title="Используйте формат: +7 (777) 777-77-77"
        value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
        maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required />
      <textarea maxLength={500} className="inp" placeholder="Опишите ваш вопрос и уточните удобное время для получения консультации" required name="message"></textarea>
      <button  className='knop44' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Ttb'>
     Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link> </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>
    



    </div></div>
    
    <div className={n.Pic200}> 
    
   <div className={n.Pic24}> 
    <img src={dom3} alt="fom1" className={n.Pic2}></img>
    <p className={n.Pic25}>Посадка кустарных растений</p>
  

    <Popup trigger=
            {<a href='#' className={n.Pica}>Подробнее</a>}
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
        pattern="^[А-Яа-яЁё\s]+$"  maxLength={10} className="inp" placeholder="Ваше имя" name="us_name" required />
      <InputMask  type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
        title="Используйте формат: +7 (777) 777-77-77"
        value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
        maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required />
      <textarea maxLength={500} className="inp" placeholder="Опишите ваш вопрос и уточните удобное время для получения консультации" name="message" required></textarea>
      <button  className='knop44' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Ttb'>
     Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link> </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>


    </div>
   <div className={n.Pic24}> 
    <img src={dom7} alt="fom1" className={n.Pic2}></img>
    <p className={n.Pic25}>Посадка живой изгороди</p>
   
    <Popup trigger=
            {<a href='#' className={n.Pica}>Подробнее</a>}
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
        pattern="^[А-Яа-яЁё\s]+$"  maxLength={10} className="inp" placeholder="Ваше имя" name="us_name" required />
      <InputMask  type="tel" pattern="[+]7\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
        title="Используйте формат: +7 (777) 777-77-77"
        value={phone} onChange={e => setPhone(e.target.value)} mask="+7\ (999) 999-99-99"
        maskChar=" " className="inp" name="phone" placeholder="Контактный телефон" required />
      <textarea maxLength={500} className="inp" placeholder="Комментарий (не обязательно)" name="message"></textarea>
      <button  className='knop44' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Ttb'>
     Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link> </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>


    

    </div></div>
   </div>
 
</div>
</div>
    </div>
    
    
    ); 
}
export default For;