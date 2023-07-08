import { useRef } from 'react';
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import сp from './Wind3.module.css';
import './w3.css';
import vv from '../WindowCall/Phone.module.css';
import i1 from '../Str7/icons82.png' ;
import i2 from '../Str7/icons8.png' ;
import i3 from '../Str7/icons81.png' ;
import i4 from '../Str7/icons83png.png' ;



const Wind3 = () => {
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
         <div className={сp.oo}> 

         <div className={сp.e1}>
            <div ><p className='kll'>Обратная связь</p>
            <p className='kll2'> <img src={i2} alt='i2' className="ii1"></img>+7 (937) 263-90-10 </p>
            <p className='kll2'><img src={i3} alt='i2' className="ii1"></img>harmonY64@yandex.ru</p>
            <p className='kll2'><img src={i1} alt='i1' className="ii1"></img>Предоставляем услуги в РФ, г. Саратов и области</p>
            <p className='kll2'><img src={i4} alt='i2' className="ii1"></img>Понедельник - Пятница: 9:00 - 18:00. </p>
           
            <Popup trigger=
            { <button className='knop' type="submit" value="Заказать звонок">Заказать звонок</button>}
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
        
           
           </div>
            <div ></div>

            </div></div>



    );
}
export default Wind3;