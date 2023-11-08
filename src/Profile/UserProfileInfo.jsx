import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../src2/pages/Contacts/Dom.png';
import sux from '../src2/pages/Contacts/CoNtacts.module.css';
import Headerauth from '../Header/Headerauth';
import Menuauth from '../Menu/Menuauth';
import Seven from '../Str7/Str7';
import WindowCall from '../WindowCall/WindowCall';
import Profileinfo from '../Components/profileinfo/profileinfo';
import PasswordResetForm from '../Components/resetpas/resetpas';


const UserProfile = () => {

	

	return (
		<div className={sux.g0}>
		
<Headerauth />
<Menuauth />

<div className={sux.g1}>  <div className={sux.g}>
<ul className={sux.breadcrumb}>
<li><Link to="/dashboard"><img className={sux.Dom} src={Dom}></img></Link></li>
<li><a className={sux.b}>Личный кабинет</a></li>
</ul>  
</div></div>
<PasswordResetForm />
{/* <Profileinfo /> */}
<Seven />
<WindowCall />
         
</div>
      
		
	);
}


export default UserProfile;