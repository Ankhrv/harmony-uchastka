import React from 'react';
import s from './Header.module.css';
import logo from '../Header/Logotipviezd/24.png';
import tel from '../Header/logo.messangers/77.png';
import tel2 from '../Header/logo.messangers/32.png';
import tel3 from '../Header/logo.messangers/33.png';
import tel4 from '../Header/logo.messangers/34.png'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
// import { UserButton } from "@clerk/clerk-react";
// import { useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import user from'../Components/userpage/user.png';
import Userfront from "@userfront/core";


const Headerauth = () => {
    const userData = JSON.stringify(Userfront.user, null, 2);
    const navigate = useNavigate();
    return (

        <div className={s.q111}>
            <Helmet>
                <title>Гармония Участка</title>
                <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
                <meta name="theme-color" content="#0D8259" />
            </Helmet>

            <div className={s.logcont}>
                <div className={s.q1}>
                    <div className={s.q01}>
                        <a href='https://harmonyuchastka.ru/'>H</a>
                        <a href='https://harmonyuchastka.ru/'>U</a>
                    </div>
                    <div className={s.q2}>
                        <a href='https://harmonyuchastka.ru/'>Harmony</a>
                        <a href='https://harmonyuchastka.ru/'>Uchastka</a>
                    </div>
                </div>

                <div className={s.q33}>
                    <a><img src={tel2} alt='tel2' className={s.ii2}></img><img src={tel3} alt='tel3' className={s.ii3}></img><img src={tel4} alt='tel4' className={s.ii4}></img></a>
                    <a><img src={tel} alt='tel' className={s.ii1}></img> +7 (937) 263-90-10</a>
                </div>
            </div>

            <div className={s.q4}>
                <a><img src={logo} alt='logo' className={s.ii}></img> Выезд и расчёт - бесплатно</a>
            </div>

            <div className={s.q5}>
            {/* <div className={s.q6}><UserButton afterSignOutAllUrl="/" /> */}
           {/* <div className={s.imm}><Link to="/UserProfile"><img  src={user} alt='user'></img></Link></div>  */}
            <a onClick={Userfront.logout} className={s.exit} >Выход</a> </div>
          
               {/* <a href='/sign-in'>Войти</a> */}
                {/* <Link to="/Profile">Войти</Link> */}
                </div>
            






    );
}

export default Headerauth;