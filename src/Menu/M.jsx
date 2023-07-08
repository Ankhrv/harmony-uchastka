import React from 'react';
import Sticky from 'react-stickynode';
import Picmen from './mobilmenu/Picmen.png';
import '../Menu//mobilmenu/App2.css';
import b from './mobilmenu/mobilmenu.module.css';
import { Link } from "react-router-dom";

function Stickynavbar() {

 let Mennu = React.createRef();
//  let Mennu2 = React.createRef();
 let Mennuf = React.createRef();

 let myFunction = () => {
     Mennu.current.classList.toggle("show");
 }

//  let myFunction2 = () => {
//      Mennu2.current.classList.toggle("show");
//  }

 let myFunction3 = () => {
     Mennuf.current.classList.toggle("show");
 }

 
 return (

 <div className={b.mmm}>

 <Sticky enabled={true} >   {/* bottomBoundary={1200} */}

 <div className="dropdown">
    
                   <div className='kn'><div className='knn'>+7 (937) 263-90-10</div>
                   <button onClick={myFunction} className="dropbtn"><img src={Picmen} alt='Picmen' className='picmen'></img></button>
                   </div> 
                    <div ref={Mennu} className="dropdown-content">
                    
                        {/* <div><button onClick={myFunction2} className="dropbtn1"><a>Автополив</a></button></div>
                         <div ref={Mennu2}className="dropdown-content3">
                        <a className="aaa" href='#'>Link</a>
                        <a className="aaa" href='#'>Link</a>
                        <a className="aaa" href='#'>Link</a>
                        <a className="aaa" href='#'>Link</a></div>
                        
                            
                        <div><button onClick={myFunction3} className="dropbtn2"><a>Ландшафтный дизайн</a></button></div>
                         <div ref={Mennuf}className="dropdown-content3">
                        <a className='aaa' href='#'>Link</a>
                        <a className='aaa' href='#'>Link</a>
                        <a className='aaa' href='#'>Link</a>
                        <a className='aaa' href='#'>Link</a></div> */}
                      <a href='https://harmonyuchastka.ru/'>Автополив</a>
                       <Link to="/landshaftnyj-dizajn">Ландшафтный дизайн</Link>
                       <a href='#'>Озеленение и благоустройство</a>
                       <Link to="/Derevja">Растения</Link>
                       <a href='#'>Прайс-лист</a>
                       <a href='#'>Консервация и обслуживание</a>
                       <a href='#'>Новинки сезона</a>

                       <div><button onClick={myFunction3} className="dropbtn2"><a>О нас</a></button></div>
                         <div ref={Mennuf}className="dropdown-content3">
                         <Link className='aaa' to="/Contacts">Контаты</Link>
                         <Link className='aaa' to="/Actions">Акции</Link>
                    </div> 
                    </div>   
                </div>

 </Sticky>

 {/* <ul>

 {data.map((x) => {

 return (<li key={x}>{x}</li>)

 })}

 </ul> */}

 </div>

 );

}
 export default Stickynavbar ;