import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../src2/pages/Contacts/Dom.png';
import sux from '../src2/pages/Contacts/CoNtacts.module.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Seven from '../Str7/Str7';
import WindowCall from '../WindowCall/WindowCall';
import Userpage from '../Components/userpage/userpage';

const UserProfile = () => {

	

	return (
		<div className={sux.g0}>
		
<Header />
<Menu />

<div className={sux.g1}>  <div className={sux.g}>
<ul className={sux.breadcrumb}>
<li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
<li><a className={sux.b}>Регистрация</a></li>
</ul>  
</div></div>

<Userpage/>
<Seven />
<WindowCall />
         
</div>
      
		
	);
}


export default UserProfile;