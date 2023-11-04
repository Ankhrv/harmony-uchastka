import './App.css';
import React from "react";
// import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import Profile from './Profile/Profile';
import UserProfile from './Profile/UserProfile';
import Roomprofile from './Components/signin/roomprofile';
import App2 from './App2';
import App2auth from './App2auth';
// import HeaderandMenu from './src2/HeaderandMenu';
import Designnproject from './src2/pages/Designnproject/Designnproject';
import Price from './src2/pages/Price/Price';
import Obslugivaniye from './src2/pages/Obslugivaniye/Obslugivaniye';
import CoNtacts from './src2/pages/Contacts/CoNtacts';
import Novinky from './src2/pages/Novinky/Novinky';
import Derevja from './src2/pages/Derevja/Derevja';
import Obrabotkadannyh from './src2/pages/Obrabotkadannyh/Obrabotkadannyh';
import Landshaftnyjdizajn from './src2/pages/Landshaftnyjdizajn/Landshaftnyjdizajn';
import { useNavigate } from 'react-router-dom';
// import Userfront, {
//   SignupForm,
//   LoginForm,
//   PasswordResetForm 
// } from "@userfront/toolkit/react";



const App = () => {
  const navigate = useNavigate();
  return (

   
    <Routes>
      <Route path="/" element={<App2 />} />
      <Route path="/dashboard" element={<App2auth />} />
     
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/login" element={<Profile />} />
      <Route path="/Roomprofile" element={<Roomprofile />} />
      <Route path="/Contacts" element={<CoNtacts />} />
      <Route path="/Designnproject" element={<Designnproject />} />
      <Route path="/Price" element={<Price />} />
      <Route path="/Obslugivaniye" element={<Obslugivaniye />} />
      <Route path="/Novinky" element={<Novinky />} />
      <Route path="/Rastenya" element={<Derevja />} />
      <Route path="/Obrabotkadannyh" element={<Obrabotkadannyh />} />
      <Route path="/Landshaftnyjdizajn" element={<Landshaftnyjdizajn />} />

      {/* <Route
          path="/protected"
          element={
            <>
            <SignedIn>
              <App2auth />
            </SignedIn>
             <SignedOut afterSignOutAllUrl="/" />
        
            </>
          }
        /> */}
        
        

    </Routes>

    // </ClerkProvider>

  );
}

export default App;
