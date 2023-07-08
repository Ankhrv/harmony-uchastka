import React from 'react';
import l from './Two.module.css';
import pp1 from '../Str2/45.jpg';
import pp2 from '../Str2/dom1001.jpg';
import pp3 from '../Str2/1006.jpg';
import pp4 from '../Str2/47.jpg';
import pp5 from '../Str2/451.jpg';
import pp6 from '../Str2/plan2.jpg';
import pp7 from '../Str2/44.jpg';
import pp8 from '../Str2/AA.jpg';

const Two = () => {
    return (
    
<div className={l.Glavv}>

<div className={l.Zagv}><p className={l.Zagvh2}>Виды работ</p>
</div>
<div className={l.Glavv2}>
<div className={l.Imgv}>
<div className={l.Img11}><img src={pp1} alt='pp1' className={l.Img121}></img><div className={l.overlay}>Выполнение работ по консервации систем автополива </div></div> 
<div className={l.Img12}><img src={pp2} alt='pp2' className={l.Img121}></img><div className={l.overlay}>Дизайн проект или пожелания клиента</div></div> 
<div className={l.Img13}><img src={pp3} alt='pp3' className={l.Img121}></img><div className={l.overlay}>Копка для проводки коммуникаций</div></div> 
<div className={l.Img14}><img src={pp4} alt='pp4' className={l.Img121}></img><div className={l.overlay}>Человечный подход к клиенту</div></div> 
</div>  
<div className={l.Imgv2}>
<div className={l.Img15}><img src={pp5} alt='pp5' className={l.Img121}></img><div className={l.overlay}>Укладка рулонного газона</div></div> 
<div className={l.Img16}><img src={pp6} alt='pp6' className={l.Img121}></img><div className={l.overlay}>Очистка и выравнвание участка</div></div> 
<div className={l.Img17}><img src={pp7} alt='pp7' className={l.Img121}></img><div className={l.overlay}>Монтаж и регулировка систем подачи воды</div></div> 
<div className={l.Img18}><img src={pp8} alt='pp8' className={l.Img121}></img><div className={l.overlay}>Посадка деревьев и кустарников</div></div> 
</div>  


    </div>     
</div>

    );
}
export default Two;