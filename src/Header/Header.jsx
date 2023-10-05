import React from 'react';
import s from './Header.module.css';
import logo from '../Header/Logotipviezd/24.png';
import tel from '../Header/logo.messangers/77.png';
import tel2 from '../Header/logo.messangers/32.png';
import tel3 from '../Header/logo.messangers/33.png';
import tel4 from '../Header/logo.messangers/34.png'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Header = () => {
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
                <Link to="/Profile">Войти</Link>
            </div>
        </div>




    );
}

export default Header;