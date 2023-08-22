import { useRef } from 'react';
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import сp from './Wind3.module.css';
import './w3.css';
import vv from '../WindowCall/Phone.module.css';
import i1 from '../Str7/icons82.png';
import i2 from '../Str7/icons8.png';
import i3 from '../Str7/icons81.png';
import i4 from '../Str7/icons83png.png';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";


const Wind3 = () => {



    const form = useRef();

    const [buttonText, setButtonText] = useState("Отправить");




    const [phone, setPhone] = useState('');





    var sendEmail = (e) => {

        e.preventDefault();
        // setButtonText("загрузка...");
        setButtonText("отправка");
        emailjs.sendForm('service_hmoh4pe', 'template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
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
                        {<button className='knop' type="submit" value="Заказать звонок">Заказать звонок</button>}
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
                                                Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link> </p>
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