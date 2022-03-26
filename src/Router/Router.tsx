import React from 'react';
import {Routes, Route, Navigate,} from "react-router-dom"

import Home from "./../pages/Home/Home"
import Contatct from "./../pages/Contact/Contact"
import Introduce from "./../pages/Introduce/Introduce"
import Mens from "./../pages/Men'sFashion/Mem"
import Women from "../pages/Women'sFashions/Women"
import Quannu from "../pages/Quannu/Quannu"
import Search from '../pages/Search/ Search';


const Router = () => ( 
      <Routes>
        {/* Trang web ban hang  */}
        <Route path="/" element={<Home/>}/>
        <Route path="/lienhe" element={<Contatct/>}/>
        <Route path="/gioithieu" element={<Introduce/>}/>
        {/* <Route path="/Mens" element={<Mens/>}/> */}
        <Route path="/Mens/giaynam" element={<Mens/>}/>
        <Route path="/women/giaynu" element={<Women/>}/>     
        <Route path="/:title" element={< Search/>}/>   

      </Routes>

     
    )
    
    export default Router
