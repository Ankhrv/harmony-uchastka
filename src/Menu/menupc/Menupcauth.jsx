import React from 'react';
import a from './../Menu.module.css';
import b from './../mobilmenu/mobilmenu.module.css';
import Sticky from 'react-stickynode';
import { NavLink } from "react-router-dom";
import '../../Menu/activ.css';


const setActive = ({isActive}) => isActive ? 'active-link' : 'notactive' ;
const setActive2 = ({isActive}) => isActive ? 'active-link2' : 'notactive2' ;
const setActive3 = ({isActive}) => isActive ? 'active-link3' : 'notactive3' ;
const setActive4 = ({isActive}) => isActive ? 'active-link4' : 'notactive4' ;
const setActive5 = ({isActive}) => isActive ? 'active-link5' : 'notactive5' ;
const setActive6 = ({isActive}) => isActive ? 'active-link6' : 'notactive6' ;
const setActive7 = ({isActive}) => isActive ? 'active-link7' : 'notactive7' ;
const setActive8 = ({isActive}) => isActive ? 'active-link8' : 'notactive8' ;



const Menu1 = () => {

    return (
        <div className={b.MenOb1}>

          <Sticky enabled={true}>   {/* bottomBoundary={1200} */}

                <div>

                    <div className={a.navbar}>
                        <ul className={a.mmenuu}>
                            <li> <NavLink to="/dashboard" >Автополив</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                </ul> */}
                            </li>
                            <li> <NavLink to="/Landshaftnyjdizajnauth" className={setActive2}>Ландшафтный дизайн</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Actions" className={setActive8}>Озеленение и благоустройство</NavLink>
                                {/* <a href='#'>Озеленение и благоустройство</a>
                                <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Дизайн-проект</a></li>
                                    <li><a href='#'>Link</a></li>
                                    <li><a href='#'>Link</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Rastenyaauth" className={setActive3}>Растения</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Деревья</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Priceauth" className={setActive4}>Прайс-лист</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>расчет стоимости</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Obslugivaniyeauth" className={setActive5}>Консервация и обслуживание</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>гарантии</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Novinkyauth" className={setActive6}>Новинки сезона</NavLink>
                                {/* <ul className={a.ssubmenuu}>
                                    <li><a href='#'>Водопады</a></li>
                                </ul> */}
                            </li>
                            <li><NavLink to="/Contactsauth" className={setActive7}>О нас</NavLink>
                                {/* <a>О нас</a>
                            <ul className={a.ssubmenuu2}>
                                    <li><NavLink to="/Contacts" className={setActive7}>Контаты</NavLink></li>
                                    <li><NavLink to="/Actions" className={setActive8}>Акции</NavLink></li>
                                </ul> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </Sticky>

        </div>

    );

}

export default Menu1;