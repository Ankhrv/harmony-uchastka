import React from 'react';

import sux from './CoNtacts.module.css';
import Header from '../../../Header/Header';
import Menu from '../../../Menu/Menu';
import Seven from '../../../Str7/Str7';
import WindowCall from '../../../WindowCall/WindowCall';
// import HeaderandMenu from '../../HeaderandMenu';


const CoNtacts = () => {

	return (
        <div>
           <Header />
           <Menu />
           <ul className={sux.breadcrumb}>
  <li><a href="#">Home</a></li>
  <li><a href="#">Контакты</a></li>
  {/* <li><a href="#">Summer 15</a></li>
  <li>Italy</li> */}
</ul> 
           <Seven />
           <WindowCall />
        
           
        </div>
      
    );
}


export default CoNtacts;