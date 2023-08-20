import { useRef } from 'react';
import React, { useState } from "react"
import emailjs from '@emailjs/browser';
import './Wind4.css';
import { Link } from 'react-router-dom';
// import { Button } from '@react-email/button';
const Wind4 = (props) => {
  const form = useRef();

  const [buttonText, setButtonText] = useState("Отправить");

  const sendEmail  = (e)  => {
   
    e.preventDefault();
    // setButtonText("загрузка...");
    setButtonText("отправлено");
    emailjs.sendForm('service_hmoh4pe','template_si5n3b9', form.current, 'pBgFTDGTqgd6JkT9M')
    .then((result) => {
      setButtonText("отправить");
      console.log(result.text);
      e.target.reset();
  }, (error) => {
      console.log(error.text); 
      setButtonText("Sending Failed");
  });
 
};


  return (
    <div className='GL'> <form ref={form} onSubmit={sendEmail} className='te'>
      <p className='ui'>Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.</p>
      <input type="text"
        title="Разрешено использовать только пробелы и русские буквы"
        pattern="^[А-Яа-яЁё\s]+$" maxLength={10} placeholder="Ваше имя" name="name" required />
      <input type="email" name="email" maxLength={20} placeholder="Электронная почта" required />
      <textarea maxLength={500} placeholder="Ваш вопрос или сообщение" name="message"></textarea>
      <button  className='knop4' type="submit" value="Отправить">{buttonText} 
      </button>
      <p className='Tt'>
        Хотите получить письменный ответ на вопрос? Напишите нам на электронную почту.
        Нажимая кнопку "Отправить" вы подтверждаете что ознакомились и согласны с <Link className='Tt2' to="/Obrabotkadannyh">политикой конфиденциальности</Link></p>
    </form>
    </div>

  );
}
export default Wind4;