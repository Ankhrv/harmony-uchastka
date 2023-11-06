import { useRef } from 'react';
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import hone from '../WindowCall/206.png';
import vv from '../WindowCall/Phone.module.css';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";




const WindowCall = () => {

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
    
        <Popup trigger=
            {<a><img src={hone} alt='phone' className={vv.ii2}></img></a>}
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
     Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyhauth">политикой конфиденциальности</Link> </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>
    
  );
}

export default WindowCall;
