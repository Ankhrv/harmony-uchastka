import './App.css';
import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Profile/Profile';
import App2 from './App2';
// import HeaderandMenu from './src2/HeaderandMenu';
import Actions from './src2/pages/Actions/Actions';
import Price from './src2/pages/Price/Price';
import Obslugivaniye from './src2/pages/Obslugivaniye/Obslugivaniye';
import CoNtacts from './src2/pages/Contacts/CoNtacts';
import Novinky from './src2/pages/Novinky/Novinky';
import Derevja from './src2/pages/Derevja/Derevja';
import Obrabotkadannyh from './src2/pages/Obrabotkadannyh/Obrabotkadannyh';
import Landshaftnyjdizajn from './src2/pages/Landshaftnyjdizajn/Landshaftnyjdizajn';



const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App2 />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Contacts" element={<CoNtacts />} />
      <Route path="/Actions" element={<Actions />} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Obslugivaniye" element={<Obslugivaniye />} />
      <Route path="/Novinky" element={<Novinky />} />
      <Route path="/Rastenya" element={<Derevja />} />
      <Route path="/Obrabotkadannyh" element={<Obrabotkadannyh />} />
      <Route path="/Landshaftnyjdizajn" element={<Landshaftnyjdizajn />} />

    </Routes>
  </BrowserRouter>

  );
}

export default App;
