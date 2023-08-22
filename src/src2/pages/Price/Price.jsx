import React from 'react';
import { Link } from "react-router-dom";
import Dom from '../Contacts/Dom.png';
import sux from '../Contacts/CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
import { Helmet } from 'react-helmet';
import kk from './Price.module.css';
import '../Price/Priceclick.css';


const Price = () => {
    let Mennuu = React.createRef();
    let Mennuun = React.createRef();

 let myFunction = () => {
     Mennuu.current.classList.toggle("show2");
 }


 
  let myFunctionn = () => {
      Mennuun.current.classList.toggle("show2");
  }


    return (
        <div className={sux.g0}>
            <Helmet

                title="Прайс"
                meta={[
                    { "name": "description", "content": "Landscape design Saratov" }
                ]}
            //    base={{"href": "https://harmonyuchastka.ru/Price/"}}

            />
            <Header />
            <Menu />
            <div className={sux.g1}>   
           <div className={sux.g}>
           <ul className={sux.breadcrumb}>
  <li><Link to="/"><img className={sux.Dom} src={Dom}></img></Link></li>
  <li><a className={sux.b}>Прайс-лист</a></li>
</ul>  
</div></div>

            <div className={kk.Glav0}>
                <div className={kk.h2}>Прайс-лист на услуги ландшафтного дизайна</div>


                <div className="dropdown1">
    
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn} className="dropbtn11">ПРОЕКТНЫЕ РАБОТЫ</button>
    </div> 
     <div ref={Mennuun} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>


    
     </div>   
 </div>

             <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunction} className="dropbtn11"></button>
    </div> 
     <div ref={Mennuu} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>
              
 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunction} className="dropbtn11"></button>
    </div> 
     <div ref={Mennuu} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunction} className="dropbtn11"></button>
    </div> 
     <div ref={Mennuu} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunction} className="dropbtn11"></button>
    </div> 
     <div ref={Mennuu} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunction} className="dropbtn11"></button>
    </div> 
     <div ref={Mennuu} className="dropdown-content1">
     
 
     <div className="GG">

<table border="0px" width="100%"
cellPadding="8" cellSpacing="0" id="table">
<thead>
<tr>
<td>Услуга</td>
<td>Единица измерения</td>
<td>Цена в рублях</td>
</tr>
</thead>
<tbody>
<tr>

<td>Простая территория</td>
<td>100 м2</td>
<td>от 25 000</td>
</tr>
<tr>

<td>Сложная территория</td>
<td>100 м2</td>
<td>индивидуальный расчет</td>
</tr>
<tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 


            </div>

          


            <Seven />
            <WindowCall />

        </div>

    );
}


export default Price;