import React from 'react';
import k from './First.module.css';

import hh1 from '../Str/hh1.png';

const First = () => {
    return (
<div className={k.Glav0}>
<div className={k.h2}>Услуги нашей компании</div>
<div className={k.Glav}>

<div className={k.txt}>
   
    <p className={k.p}>Наша компания оказывает следующие услуги:</p>
    <ul> <li className={k.li}><img src={hh1} alt='hh1' className={k.hh1}></img> помощь в выборе подходящей для участка системы орошения;</li>
    <li className={k.li}><img src={hh1} alt='hh1' className={k.hh1}></img> продажа поливного оборудования;</li>
    <li className={k.li}><img src={hh1} alt='hh1' className={k.hh1}></img> проектные работы;</li>
    <li className={k.li}><img src={hh1} alt='hh1' className={k.hh1}></img> монтажные работы</li>
    <li className={k.li}><img src={hh1} alt='hh1' className={k.hh1}></img> гарантийное и постгарантийное обслуживание поливных систем.</li>
    </ul>
    <p className={k.p}>Системы автополива под ключ в Саратове — проектирование, монтаж, сервисное обслуживание от компании «Геометрия озеленения».</p>
    </div>

    <div className={k.Pic22}></div>
</div>
</div>

    );
}
export default First;