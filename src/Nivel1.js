import "./style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default  function Nivel1(){
    const [senha,setSenha] =useState('');
    const [nome,setNome] =useState('');
    const [email,setEmail] =useState('');
    const [foto,setFoto] =useState('');
    function GO(){
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email: email,
            name: nome,
            image: foto,
            password: senha
        })
        requisicao.then(resposta => {
            console.log('oioi')
        });
    }
    return(
        <>
         <img className="tela01"  src="Group 8.png" />
       
        
		 <div className="tela03"> <input  className="botao0" placeholder='email' type="email"   onChange={(a) => setEmail(a.target.value)} value={email}/></div>
         
		  <div className="tela03"><input  className="botao0" placeholder='senha' type="password"  onChange={(s) => setSenha(s.target.value)} value={senha} /></div>

          <div className="tela03"><input  className="botao0" placeholder='nome ' type="text"   onChange={(e) => setNome(e.target.value)} value={nome}/></div>

          <div className="tela03"><input  className="botao0" placeholder='foto' type="url" onChange={(f) => setFoto(f.target.value)} value={foto}/></div>
         
		  <Link to={`${email!==""&& senha !=='' && nome !== ''&& foto !=='' ?'/' :''}`}><div className="tela03"><button className="botao" type="submit" onClick={GO}>Entrar</button></div></Link>
        
          
            <Link to='/'><p className="tela02">Já tem uma conta? Faça login! </p></Link>
         
		
        {console.log(nome)}
        </>
    )
}