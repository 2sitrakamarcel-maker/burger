import { useState } from "react";
import Order from "./components/Order";
import Logincomp from "./components/Logincomp";
import {Routes, Route, BrowserRouter} from "react-router-dom"
//state
export default function Home(){ 

 

//affichage
return (
   <Routes>
    <Route path="/" element={<Logincomp />} /> 
    <Route path="/order" element={<Order />} />
   </Routes>
   
     
  

)
}



