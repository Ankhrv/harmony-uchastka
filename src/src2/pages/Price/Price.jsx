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
    let Mennuun11 = React.createRef();
    let Mennuun12 = React.createRef();
    let Mennuun13 = React.createRef();
    let Mennuun14 = React.createRef();
    let Mennuun15 = React.createRef();

 let myFunction = () => {
     Mennuu.current.classList.toggle("show2");
 }


 
  let myFunctionn = () => {
      Mennuun.current.classList.toggle("show2");
  }

  let myFunctionn12 = () => {
    Mennuun12.current.classList.toggle("show2");
}


let myFunctionn11 = () => {
    Mennuun11.current.classList.toggle("show2");
}

let myFunctionn13 = () => {
    Mennuun13.current.classList.toggle("show2");
}

let myFunctionn14 = () => {
    Mennuun14.current.classList.toggle("show2");
}

let myFunctionn15 = () => {
    Mennuun15.current.classList.toggle("show2");
}



    return (
        <div className={sux.g0}>
             <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Прайс на услуги Ландшафтного дизайна" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
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

<td>Комплексный план озеленения и благоустройства</td>
<td>1 штука</td>
<td>от 15 000</td>
</tr>
<tr>

<td>Проект одного элемента ландшафта</td>
<td>1 штука</td>
<td>5000</td>
</tr>
<tr>

<td>Смета, пояснительная записка (при необходимости)</td>
<td>1 штука</td>
<td> - </td>
</tr>
<tr>

<td>Проектирование системы автоматического полива</td>
<td>1 сотка</td>
<td>от 1000</td>
</tr>
</tbody>
</table>
</div>


    
     </div>   
 </div>

             <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn11} className="dropbtn11">ЛАНДШАФТНЫЕ РАБОТЫ</button>
    </div> 
     <div ref={Mennuun11} className="dropdown-content1">
     
 
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

<td>Выезд на объект за пределы Саратова, замеры и обсуждение</td>
<td>1 штука</td>
<td>от 600</td>
</tr>


{/* <tr><td>Сложная территория</td>
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
</tr> */}
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>
              
 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn12} className="dropbtn11">УСТРОЙСТВО ГАЗОНА</button>
    </div> 
     <div ref={Mennuun12} className="dropdown-content1">
     
 
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

<td>Подготовка участка, планировка</td>
<td>1 м2</td>
<td>от 100</td>
</tr>
<tr>

<td>Снятие старого газона</td>
<td>1 м2</td>
<td>от 100</td>
</tr>
<tr>

<td>Укладка</td>
<td>1 м2</td>
<td>от 100</td>
</tr>
<tr>

<td>Устройство газона с завозом плодородного грунта</td>
<td>1 м2</td>
<td>договорная</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn13} className="dropbtn11">ОБРАБОТКА САДА ОТ СОРНЯКОВ</button>
    </div> 
     <div ref={Mennuun13} className="dropdown-content1">
     
 
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

<td>Обработка химическим методом</td>
<td>1 м2</td>
<td>20</td>
</tr>
<tr>

<td>Обработка вручную</td>
<td>1 час</td>
<td>350</td>
</tr>
{/* <tr>

<td>Освещение сада</td>
<td>проект</td>
<td>по проекту</td>
</tr>
<tr>

<td>Обслуживание участков</td>
<td>месяц</td>
<td>договорная</td>
</tr> */}
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn14} className="dropbtn11">ПОДГОТОВИТЕЛЬНЫЕ РАБОТЫ</button>
    </div> 
     <div ref={Mennuun14} className="dropdown-content1">
     
 
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

<td>Уборка строительного и растительного мусора</td>
<td>1 м3</td>
<td>от 1500</td>
</tr>
<tr>

<td>Погрузка мусора в машину</td>
<td>1 штука</td>
<td>от 2 000</td>
</tr>
<tr>

<td>Перевоз грунта и засыпка территории плодородным грунтом</td>
<td>1 м3</td>
<td>от 1000</td>
</tr>
<tr>

<td>Изменение рельефа участка</td>
<td>1 м3</td>
<td>от 1000</td>
</tr>
</tbody>
</table>
</div>

  
      
     
     </div>   
 </div>

 <div className="dropdown1">  
    <div className="kn1"><div className="knn1"></div>
    <button onClick={myFunctionn15} className="dropbtn11">КОРЧЕВКА ДЕРЕВЬЕВ И КУСТАРНИКОВ</button>
    </div> 
     <div ref={Mennuun15} className="dropdown-content1">
     
 
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

<td>Корчевка кустарников</td>
<td>1 штука</td>
<td>от 2 100</td>
</tr>
<tr>

<td>Корчевка деревьев диаметром менее 20 сантиметров </td>
<td>1 штука</td>
<td>от 1 500</td>
</tr>
<tr>

<td>Корчевка деревьев диаметром 20-30 сантиметров</td>
<td>1 штука</td>
<td>от 2 000</td>
</tr>
<tr>

<td>Корчевка деревьев диаметром более 30 сантиметров</td>
<td>1 штука</td>
<td>от 2000</td>
</tr>

</tbody>

</table>
</div>

  
      
     
     </div>   
 </div>
                <div className="dropdown12">
    
    <div className="kn122"><div className="knn12"></div>
    <p className="dropbtn12">В разделе опубликован актуальный прайс-лист с ценами на ландшафтные работы. Уточнить стоимость товаров и услуг компании «Гармония участка» Вы можете по указанным на сайте телефонам.</p>
    </div>  </div>

 


            </div>

          


            <Seven />
            <WindowCall />

        </div>

    );
}


export default Price;