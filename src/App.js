import React , {useState} from "react";
import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import InfoPage from "./pages/InfoPage";
import NavBar from "./components/NavBar";


function App() {
  const [isAuth, setIsAuth] =useState(false)

  return (
    <BrowserRouter>
      <NavBar  isAuth = {isAuth} setIsAuth={setIsAuth}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage isAuth ={isAuth} setIsAuth={setIsAuth} />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
