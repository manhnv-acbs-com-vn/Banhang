import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./../pages/Home/Home"
import Contatct from "./../pages/Contact/Contact"
import Introduce from "./../pages/Introduce/Introduce"
import Mens from "./../pages/Men'sFashion/Mem"
import Women from "./../pages/Women'sFashions/Women"


const Router = () => ( 
      <Routes>
        {/* Trang web ban hang  */}
        <Route path="/trangchu" element={<Home/>}/>
        <Route path="/lienhe" element={<Contatct/>}/>
        <Route path="/gioithieu" element={<Introduce/>}/>
        {/* <Route path="/Mens" element={<Mens/>}/> */}
        <Route path="/Mens/giaynam" element={<Mens/>}/>
        
        <Route path="/Women" element={<Women/>}/>                     
      </Routes>

     
    )
    
    export default Router
