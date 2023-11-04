// import React  from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import f from '../signin/form.module.css';
import Userfront from "@userfront/core";
import k from '../../src2/pages/Novinky/Novinky.module.css';
import '../signin/input.css';

import React from 'react';


  Userfront.init("8b66qjvb");
  const userData = JSON.stringify(Userfront.user, null, 2);
  

  class userpage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        accountName: "",
        password: "",
        passwordVerify: "",
      };
  
      this.handleInputChange = this.handleInputChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    }
  
    // Handle the form submission by calling Userfront.signup()
    handleSubmit(event) {
      event.preventDefault();
      // Call Userfront.signup()
      Userfront.signup({
        method: "password",
        email: this.state.email,
        password: this.state.password,
        data: {
          accountName: this.state.accountName,
        },
      });
    }
  
    render() {

  return (

    <div className={f.Glava}>
     <pre>{userData}</pre>
    </div>
    
  );
}
  }


export default userpage;

