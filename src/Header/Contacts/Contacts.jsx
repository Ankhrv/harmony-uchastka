import React from 'react';
import s from './Contacts.module.css';
import logo from './logo.messangers/77.png';
import logo2 from './logo.messangers/32.png';
import logo3 from './logo.messangers/33.png';
import logo4 from './logo.messangers/34.png';

const Contacts = () => {
    return (
        <div className={s.q33}>
            <a href="#1"><img src={logo2} alt='logo2' className={s.ii2}></img><img src={logo3} alt='logo3' className={s.ii3}></img><img src={logo4} alt='logo4' className={s.ii4}></img></a>
            <a href="#1"><img src={logo} alt='logo' className={s.ii1}></img> +7 (937) 263-90-10</a>
        </div>
    );
}
export default Contacts;