import './App.css';
import React from "react";
import Headerauth from './Header/Headerauth';
import Menuauth from './Menu/Menuauth';
import MenuBaner from './Baner/MenuBaner';
import First from './Str/First';
import Two from './Str2/Two';
import Three from './Str3/Three';
import For from './Str4/For';
import Five from './Str5/Str5';
import Formauth from './Form/Formauth';
import Six from './Six/Six';
import Sevenauth from './Str7/Str7auth';
import ScrollButton from './ScrollButton/ScrollButton';
import WindowCallauth from './WindowCall/WindowCallauth';
import { Helmet } from 'react-helmet';



const App2 = () => {
  return (

    
    <div className="App">
       
        <Helmet>
        <title>Гармония Участка</title>
        <meta name="description" content="Ландшафтный дизайн и озеленение в Саратове и области" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>

      <Headerauth />
      <Menuauth />
      <MenuBaner />
      <First />
      <Two />
      <Three />
      <For />
      <Five />
      <Formauth />
      <Six />
      <Sevenauth />
      <ScrollButton />
      <WindowCallauth />
    </div>

  );
}

export default App2;
