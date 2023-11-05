// import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import f from '../signin/form.module.css';
import Userfront from "@userfront/core";
import k from '../../src2/pages/Novinky/Novinky.module.css';
import '../signin/input.css';

import React, { useRef } from 'react';

// const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
  

  Userfront.init("8b66qjvb");
  Userfront.sendResetLink("viewer@example.com");
  

  class PasswordResetForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        password: "",
        passwordVerify: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setAlertMessage = this.setAlertMessage.bind(this);
    }
  
    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
  
      // Reset the alert to empty
      this.setAlertMessage();
  
      // Verify that the passwords match
      if (this.state.password !== this.state.passwordVerify) {
        return this.setAlertMessage("Пароли должны совпадать");
      }
  
      // Call Userfront.resetPassword()
      Userfront.resetPassword({
        password: this.state.password,
      }).catch((error) => {
        this.setAlertMessage(error.message);
      });
    }
  
    setAlertMessage(message) {
      this.setState({ alertMessage: message });
    }
  
    render() {

  return (

    <div className={f.Glava}>
    <div className={f.h22}>Обновить пароль</div>
 <form className={f.Glav3}
 onSubmit={this.handleSubmit} >

   <div className={f.text}>
     <label className={f.La} htmlFor="password">Пароль</label>

     <input className={f.Pas}
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
     />

   </div>
   <div className={f.text}>
     <label className={f.La} htmlFor="password">Подтвердите пароль</label>

     <input className={f.Pas}
                   name="passwordVerify"
                   type="password"
                   value={this.state.passwordVerify}
                   onChange={this.handleInputChange}
     />

   </div>
   
   <div className={f.Set}>
     
     <button className={f.But}
     
     type="submit">Продолжить</button>

   <div className={f.Err}> {this.state.alertMessage}</div>
 
   <div className={f.Cap}> 
 
   </div>
   {/* <NavLink className={setActivelink} to="/login"><p className={f.p}>У меня есть аккаунт</p></NavLink> */}
   </div>
   
 </form>
 </div>
  );
}
  }


export default PasswordResetForm;

