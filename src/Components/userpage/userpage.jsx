// import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import f from '../signin/form.module.css';
import Userfront from "@userfront/core";
import k from '../../src2/pages/Novinky/Novinky.module.css';
import '../signin/input.css';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';


  Userfront.init("8b66qjvb");
  const setActivelink = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
  

  class userpage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        accountName: "",
        password: "",
        passwordVerify: "",
        alertMessage: "",
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
      // Call Userfront.signup()
      Userfront.signup({
        method: "password",
        email: this.state.email,
        password: this.state.password,
        data: {
          accountName: this.state.accountName,
          email: this.state.email,
        },
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
       <div className={f.h22}>Регистрация</div>
    <form className={f.Glav3}
    onSubmit={this.handleSubmit} >
   

     
      <div className={f.text}>
        <label className={f.La} htmlFor="email">Email</label>
        
        <input className={f.Ema}
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
          
        />
      </div>
      <div className={f.text}>
        <label className={f.La} htmlFor="email">Имя</label>
        
        <input className={f.Ema}
                        name="accountName"
                        type="text"
                        value={this.state.accountName}
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
     <ReCAPTCHA  sitekey={process.env.REACT_APP_SITE_KEY} /> 
      </div>
      <NavLink className={setActivelink} to="/login"><p className={f.p}>У меня есть аккаунт</p></NavLink>
      </div>
      
    </form>
    </div>
    
  );
}
  }


export default userpage;

