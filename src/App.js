import Inicio from "./Inicio";
import Nivel1 from "./Nivel1";
import Nivel2 from "./Nivel2";
import Nivel3 from "./Nivel3";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default  function App(props) {
  const [senha,setSenha] =useState('');
  const [email,setEmail] =useState('');
  const [obj,setObj] =useState({});
    return(
        <>
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Inicio senha={senha} setSenha={setSenha} setEmail={setEmail} email={email} setObj={setObj}/>} /> 
          <Route path="/Nivel1" element={<Nivel1 />} />
          <Route path="/Nivel2" element={<Nivel2 obj={obj}/>} />
          <Route path="/Nivel3" element={<Nivel3 />} />
          </Routes>

          </BrowserRouter>
        
       
        </>
        
    )
}