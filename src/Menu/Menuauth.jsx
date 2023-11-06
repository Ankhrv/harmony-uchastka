import React from 'react';
import b from './mobilmenu/mobilmenu.module.css';
import Menupcauth from './menupc/Menupcauth';
import Mobmenuauth from './mobilmenu/Mobmenuauth';

const Menu = () => {

    return (
        <div className={b.MenuOb}>

            <div className={b.qw}>

                <Menupcauth />

            </div>

            <div className={b.qw2}>

                <Mobmenuauth />

            </div>

        </div>

    );
}

export default Menu;