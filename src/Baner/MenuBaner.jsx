import React from 'react';
import a from './MenuBaner.module.css';
import Wind1 from './Wind1';
import Wind2 from './Wind2';
import { Helmet } from 'react-helmet';

const Baner = () => {
    return (
        <div className={a.k}>
            <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>
      <div className={a.hh}>
          <Wind1/>
          <Wind2/>
          </div> 
        </div>
      
    );
}
export default Baner;