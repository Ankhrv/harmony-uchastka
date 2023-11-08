import './App.css';
import React from "react";
import { Routes, Route,  Navigate, useLocation, } from "react-router-dom";
import Profile from './Profile/Profile';
import UserProfile from './Profile/UserProfile';
import UserProfileinfo from './Profile/UserProfileInfo';
import App2 from './App2';
import App2auth from './App2auth';
import Designnproject from './src2/pages/Designnproject/Designnproject';
import Price from './src2/pages/Price/Price';
import Priceauth from './src2/pages/Price/Priceauth';
import Obslugivaniye from './src2/pages/Obslugivaniye/Obslugivaniye';
import Obslugivaniyeauth from './src2/pages/Obslugivaniye/Obslugivaniyeauth';
import CoNtacts from './src2/pages/Contacts/CoNtacts';
import CoNtactsauth from './src2/pages/Contacts/CoNtactsauth';
import Novinky from './src2/pages/Novinky/Novinky';
import Novinkyauth from './src2/pages/Novinky/Novinkyauth';
import Derevja from './src2/pages/Derevja/Derevja';
import Derevjaauth from './src2/pages/Derevja/Derevjaauth';
import Obrabotkadannyh from './src2/pages/Obrabotkadannyh/Obrabotkadannyh';
import Obrabotkadannyhauth from './src2/pages/Obrabotkadannyh/Obrabotkadannyhauth';
import Landshaftnyjdizajn from './src2/pages/Landshaftnyjdizajn/Landshaftnyjdizajn';
import Landshaftnyjdizajnauth from './src2/pages/Landshaftnyjdizajn/Landshaftnyjdizajnauth';
import Userfront from "@userfront/core";


Userfront.init("8b66qjvb");

const App = () => {
 
  return (

    <Routes>

      <Route path="/" element={<App2 />} />
      <Route path="/dashboard" element={<RequireAuth> <App2auth /> </RequireAuth>} /> 
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/login" element={<Profile />} />
      <Route path="/UserProfileinfo" element={<RequireAuth> <UserProfileinfo /> </RequireAuth>} />
      <Route path="/Contacts" element={<CoNtacts />} />
      <Route path="/Contactsauth" element={<CoNtactsauth />} />
      <Route path="/Designnproject" element={<RequireAuth> <Designnproject /> </RequireAuth>} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Priceauth" element={<Priceauth />} />
      <Route path="/Obslugivaniye" element={<Obslugivaniye />} />
      <Route path="/Obslugivaniyeauth" element={<Obslugivaniyeauth />} />
      <Route path="/Novinky" element={<Novinky />} />
      <Route path="/Novinkyauth" element={<Novinkyauth />} />
      <Route path="/Rastenya" element={<Derevja />} />
      <Route path="/Rastenyaauth" element={<Derevjaauth />} />
      <Route path="/Obrabotkadannyh" element={<Obrabotkadannyh />} />
      <Route path="/Obrabotkadannyhauth" element={<Obrabotkadannyhauth />} />
      <Route path="/Landshaftnyjdizajn" element={<Landshaftnyjdizajn />} />
      <Route path="/Landshaftnyjdizajnauth" element={<Landshaftnyjdizajnauth />} />

    </Routes>

  );
}



export default App;

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}