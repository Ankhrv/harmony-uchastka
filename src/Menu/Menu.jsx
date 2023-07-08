import React from 'react';
import b from './mobilmenu/mobilmenu.module.css';
import Menu1 from './Menu1';
import StickyNavbar from './M';

const Menu = () => {

    return (
        <div className={b.MenuOb}>
<div className={b.qw}>

            <Menu1 /></div>

        <div className={b.qw2}>
             <StickyNavbar/></div>
                     
        </div>
        
    );
}

export default Menu;