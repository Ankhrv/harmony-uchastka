import { useRef } from 'react';
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import hone from '../WindowCall/206.png';
import vv from '../WindowCall/Phone.module.css';




const WindowCall = () => {

    const form = useRef();

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
                            </button> <p className='ui3'>Служба поддержки</p>
                            <p className='ui2'>   Укажите ваши данные и нажмите кнопку "Отправить"</p> </div>
      <input className="inp" type="text" placeholder="Ваше имя" name="us_name" required />
      <input className="inp" type="phone" placeholder="Контактный телефон" name="us_email" required />
      <textarea className="inp" placeholder="Комментарий (не обязательно)" name="message"></textarea>
      <button  className='knop44' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Tt2'>
     Нажимая кнопку "отправить" вы подтверждаете что ознакомились и согласны с политикой конфиденциальности </p>
    </form>
                        </div>
                    </div>
                )
            }
        </Popup>
    
  );
}

export default WindowCall;
