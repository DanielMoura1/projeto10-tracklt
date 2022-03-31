import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";
export default  function Inicio(props){
    const {senha,setSenha,email,setEmail,setObj} = props

    function logar(){
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email: email,
            password: senha
        })
        requisicao.then(resposta => {
            setObj(resposta.data.image)
        });

    }
    
    return(<>
        <img src="TrackIt (1).png" />
        <form>
        
		 <div> <input  placeholder='email' type="email"  onChange={(a) => setEmail(a.target.value)} value={email} /></div>
         
		  <div><input  placeholder='senha' type="password" onChange={(s) => setSenha(s.target.value)} value={senha} /></div>
          <Link to='/Nivel2'>
		    <div><button className="botao" type="submit" onClick={logar}>Entrar</button></div>
          </Link>
        
          <Link to='/Nivel1'>
            <p>Não tem uma conta? Cadastre-se! </p>
          </Link>
		</form>
        </>
    )
}