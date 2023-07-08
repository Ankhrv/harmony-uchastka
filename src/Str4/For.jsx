import React from 'react';
import n from './For.module.css';
import dom1 from '../Str4/dom4.jpg';
import dom2 from '../Str4/dom2.jpg';
import dom3 from '../Str4/dom3.jpg';
import dom7 from '../Str4/dom7.jpg';

const For = () => {
    return (
    
<div className={n.Glav}>
<div className={n.GlavB}>
<div className={n.txt}><p>Примеры наших работ </p> 
</div>
<div className={n.Pic4}>
    <div className={n.Pic}><div className={n.Pic300}> <div className={n.Pic200}> 
    <div className={n.Pic24}>  <img src={dom1} alt="fom1" className={n.Pic2}></img> <div className={n.Pic25}>Посадка хвойных деревьев</div><div className={n.Pic29}><a href='#' className={n.Pica}>Подробнее</a></div></div>
    <div className={n.Pic24}>   <img src={dom2} alt="fom1" className={n.Pic2}></img><div className={n.Pic25}>Посадка цветов </div><div className={n.Pic29}><a href='#' className={n.Pica}>Подробнее</a></div></div></div>
    <div className={n.Pic200}> <div className={n.Pic24}>  <img src={dom3} alt="fom1" className={n.Pic2}></img><div className={n.Pic25}>Посадка кустарных растений</div><div className={n.Pic29}><a href='#' className={n.Pica}>Подробнее</a></div></div>
   <div className={n.Pic24}>  <img src={dom7} alt="fom1" className={n.Pic2}></img><div className={n.Pic25}>Посадка живой изгороди</div><div className={n.Pic29}><a href='#' className={n.Pica}>Подробнее</a></div></div></div>
   </div>
 
</div>
</div>
    </div></div>
    
    ); 
}
export default For;