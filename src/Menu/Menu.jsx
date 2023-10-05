import React from 'react';
import b from './mobilmenu/mobilmenu.module.css';
import Menupc from './menupc/Menupc';
import Mobmenu from './mobilmenu/Mobmenu';

const Menu = () => {

    return (
        <div className={b.MenuOb}>

            <div className={b.qw}>

                <Menupc />

            </div>

            <div className={b.qw2}>

                <Mobmenu />

            </div>

        </div>

    );
}

export default Menu;