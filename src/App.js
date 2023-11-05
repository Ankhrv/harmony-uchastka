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
import Obslugivaniye from './src2/pages/Obslugivaniye/Obslugivaniye';
import CoNtacts from './src2/pages/Contacts/CoNtacts';
import Novinky from './src2/pages/Novinky/Novinky';
import Derevja from './src2/pages/Derevja/Derevja';
import Obrabotkadannyh from './src2/pages/Obrabotkadannyh/Obrabotkadannyh';
import Landshaftnyjdizajn from './src2/pages/Landshaftnyjdizajn/Landshaftnyjdizajn';
import Userfront from "@userfront/core";


Userfront.init("8b66qjvb");

const App = () => {
 
  return (

    <Routes>

      <Route path="/" element={<App2 />} />
      <Route path="/dashboard" element={<App2auth />} /> 
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/login" element={<Profile />} />
      <Route path="/UserProfileinfo" element={   
      <RequireAuth>
        <UserProfileinfo />
      </RequireAuth>
  } />
      <Route path="/Contacts" element={<CoNtacts />} />
      <Route path="/Designnproject" element={<Designnproject />} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Obslugivaniye" element={<Obslugivaniye />} />
      <Route path="/Novinky" element={<Novinky />} />
      <Route path="/Rastenya" element={<Derevja />} />
      <Route path="/Obrabotkadannyh" element={<Obrabotkadannyh />} />
      <Route path="/Landshaftnyjdizajn" element={<Landshaftnyjdizajn />} />

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