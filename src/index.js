import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile/Profile';
// import HeaderandMenu from './src2/HeaderandMenu';
import Actions from './src2/pages/Actions/Actions';
import Price from './src2/pages/Price/Price';
import Obslugivaniye from './src2/pages/Obslugivaniye/Obslugivaniye';
import CoNtacts from './src2/pages/Contacts/CoNtacts';
import Novinky from './src2/pages/Novinky/Novinky';
import Derevja from './src2/pages/Derevja/Derevja';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Contacts" element={<CoNtacts />} /> 
      <Route path="/Actions" element={<Actions />} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Obslugivaniye" element={<Obslugivaniye />} />
      <Route path="/Novinky" element={<Novinky />} />
      <Route path="/Rastenya" element={<Derevja />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
