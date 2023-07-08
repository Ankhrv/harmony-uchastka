import React from 'react';
import m from './Three.module.css';
import '../Str3/three.css'
import sto from '../Str3/100.png';
import sto1 from '../Str3/300.png';
import sto2 from '../Str3/200.png';
import sto3 from '../Str3/400.png';
import sto4 from '../Str3/500.png';
import sto5 from '../Str3/600.png';
import sto6 from '../Str3/skob.png';

const Three = () => {
    return (
   

<div className={m.Glav}>

<div className={m.txt}><p className={m.txt2}>Порядок работ</p> 
</div>



<div>
    <div className="Pi46">

    <div className="Picv"> 
    <div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto} alt="sto" className="pictura"></img><p>Консультация</p><img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
    <p>Консультант отвечает на вопросы клиентов по телефону, дает советы и разъяснения, назначает время и место встречи с мастером по монтажу систем автополива.</p> </div>   
</div>
</div>

<div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto2} alt="sto2" className="pictura"></img><p>Осмотр участка</p><img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
    <p>Инженер выезжает на встречу с клиентом, изучает особенности ландшафта, берет пробы, предварительно оценивает работы и согласовывает их с заказчиком.</p> </div>  
    
</div>
</div>

<div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto1} alt="sto1" className="pictura"></img><p>Разработка докуметации</p><img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
     Разрабатывается проект монтажа поливных и дренажных систем с указанием плана размещения коммуникаций, типов поливного оборудования. </div>  
    
</div>
</div>
<div></div>
 </div> 

    <div className="Picv"> 
    <div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto3} alt="sto3"className="pictura"></img><p>Формирование сметы</p><img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
    После согласования проекта с заказчиком, составляется смета, в которой указывается стоимость оборудования, объемы работ и порядок расчетов. </div>   
</div>
</div>

<div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto4} alt="sto4"className="pictura"></img><p>Выполнение работ</p><img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
    <p>В оговоренное в договоре время на участок завозится оборудование. Мастера приступают к выполнению монтажных работ.</p> </div>  
    
</div>
</div>

<div className="flip-box">
    <div className="flip-inner">
    <div className="flip-front">
    <img src={sto5} alt="sto5"className="pictura"></img> <p>Сдача объекта</p> <img src={sto6} alt="sto6" className="pictura2"></img></div>
    <div className="flip-back">
    <p>После монтажа, заказчик проверяет работу системы. Если его все устраивает, он подписывает акт выполненных работ и получает гарантийные документы.</p> </div>  
    
</div>
</div>
<div></div>
 </div> </div></div>

     

    </div>
    
    ); 
}
export default Three;