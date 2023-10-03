import './App.css';
import React from "react";
import Header from './Header/Header';
import Menu from './Menu/Menu';
import MenuBaner from './Baner/MenuBaner';
import First from './Str/First';
import Two from './Str2/Two';
import Three from './Str3/Three';
import For from './Str4/For';
import Five from './Str5/Str5';
import Form from './Form/Form';
import Six from './Six/Six';
import Seven from './Str7/Str7';
import ScrollButton from './ScrollButton/ScrollButton';
import WindowCall from './WindowCall/WindowCall';
import { Helmet } from 'react-helmet';



const App2 = () => {
  return (

    <div className="App">
      <Helmet
        title="Гармония Участка"
        meta={[
          { "name": "description", "content": "Landscape design Saratov" }
        ]}
        link={[
          { "rel": "icon", "href": "%PUBLIC_URL%/favicon33.ico" },

        ]}
        // base={{ "href": "https://harmonyuchastka.ru/" }}
      />


      <Header />
      <Menu />
      <MenuBaner />
      <First />
      <Two />
      <Three />
      <For />
      <Five />
      <Form />
      <Six />
      <Seven />
      <ScrollButton />
      <WindowCall />
    </div>

  );
}

export default App2;
