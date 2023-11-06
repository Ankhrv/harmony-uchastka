import React from 'react';
import Sticky from 'react-stickynode';
import Picmen from './Picmen.png';
import './App2.css';
import b from './mobilmenu.module.css';
import { NavLink } from "react-router-dom";

function Mobmenu() {

    let Mennu = React.createRef();
    let Mennuf = React.createRef();

    let myFunction = () => {
        Mennu.current.classList.toggle("show");
    }

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

                        <NavLink to="https://harmonyuchastka.ru/dashboard">Автополив</NavLink>
                        <NavLink to="/Landshaftnyjdizajnauth">Ландшафтный дизайн</NavLink>
                        <NavLink to="/landshaftnyj-dizajn">Озеленение и благоустройство</NavLink>
                        <NavLink to="/Rastenyaauth">Растения</NavLink>
                        <NavLink to="/Priceauth">Прайс-лист</NavLink>
                        <NavLink to="/Obslugivaniyeauth">Консервация и обслуживание</NavLink>
                        <NavLink to="/Novinkyauth">Новинки сезона</NavLink>
                        <NavLink to="/Contactsauth">Контаты</NavLink>
                        {/* <div><button onClick={myFunction3} className="dropbtn2"><a>О нас</a></button></div>
                        <div ref={Mennuf} className="dropdown-content3">
                            <NavLink className='aaa' to="/Contacts">Контаты</NavLink>
                            <NavLink className='aaa' to="/Actions">Акции</NavLink>

                        </div> */}
                    </div>
                </div>

            </Sticky>

        </div>

    );

}
export default Mobmenu;