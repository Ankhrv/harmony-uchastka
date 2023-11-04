// import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import f from '../signin/form.module.css';
import Userfront from "@userfront/core";
import k from '../../src2/pages/Novinky/Novinky.module.css';
import './input.css';
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from 'react';

const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
  

  Userfront.init("8b66qjvb");
  

  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        captchaResponse: null,
      }
      this.state = {
        emailOrUsername: "",
        password: "",
        alertMessage: "",
      };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);


  }

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
    // Call Userfront.login()
    Userfront.login({
      method: "password",
      emailOrUsername: this.state.emailOrUsername,
      password: this.state.password,
    }).catch((error) => {
      this.setAlertMessage(error.message);
    });
  }

  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  setcaptha(){
  this.setState({ captchaResponse: null });
  }

  render() {
    

  return (

    <div className={f.Glava}>
       <div className={f.h22}>Войти</div>
    <form className={f.Glav3}
    onSubmit={this.handleSubmit} >
   

     
      <div className={f.text}>
        <label className={f.La} htmlFor="email">Email</label>
        
        <input className={f.Ema}
          name="emailOrUsername"
          type="text"
          value={this.state.emailOrUsername}
          onChange={this.handleInputChange}
          
        />
      </div>
      <div className={f.text}>
        <label className={f.La} htmlFor="password">Пароль</label>

        <input className={f.Pas}
         name="password"
         type="password"
         value={this.state.password}
         onChange={this.handleInputChange}
        />

      </div>
      <div className={f.Set}>
        
        <button className={f.But}
        type="submit">Продолжить</button>

      <div className={f.Err}> {this.state.alertMessage} </div>
    
      <div className={f.Cap}>       <div>
       
        {/* <form> element */}
      </div>
      <ReCAPTCHA  sitekey={process.env.REACT_APP_SITE_KEY} /> 
      </div>
      <NavLink className={setActivelink} to="/UserProfile"><p className={f.p}>Зарегистрироваться</p></NavLink>
      </div>
      
      
    </form>
    </div>
    
  );
}
  }


export default Form;

