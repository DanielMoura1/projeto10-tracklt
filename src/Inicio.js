import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Confirmar from "./Confirmar";
import "./style.css";
export default  function Inicio(props){
    const {senha,setSenha,email,setEmail,setObj,setToken} = props
        const [chave,setChave] = useState(1)

    function logar(){
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email: email,
            password: senha
        })
        requisicao.then(resposta => {
            console.log(resposta)
            setObj(resposta.data.image)
            setToken(resposta.data.token)
            setChave(2)
        });

    }
    
    return(<>
        <img className="tela01" src="Group 8.png" />
        <form>
        
		 <div className="tela03"> <input className="botao0" placeholder='email' type="email"  onChange={(a) => setEmail(a.target.value)} value={email} /></div>
         
		    <div className="tela03"><input className="botao0" placeholder='senha' type="password" onChange={(s) => setSenha(s.target.value)} value={senha} /></div>
          <Link to={`${email!==""&& senha !=='' ?'/Nivel4' :''}`}>
		    <div className="tela03"><button className="botao" type="submit" onClick={logar}>Entrar</button></div>
          </Link>
        
          <Link to='/Nivel1'>
            <p className="tela02">Não tem uma conta? Cadastre-se! </p>
          </Link>
		</form>
        </>
    )
}