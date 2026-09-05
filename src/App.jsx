import { useState } from "react";
import Order from "./components/Order";
import Logincomp from "./components/Logincomp";
import {Routes, Route, BrowserRouter} from "react-router-dom"
//state
export default function Home(){ 
const [name, setName] = useState("")
 

//affichage
return (
   <Routes>
    <Route path="/" element={<Logincomp zetmessage={setName}/>} /> 
    <Route path="/order/:inputValue" element={<Order nom={name} />} />
   </Routes>
   
     
  

)
}



