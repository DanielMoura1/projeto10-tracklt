import "./style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

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
         <img src="TrackIt (1).png" />
       
        
		 <div> <input  placeholder='email' type="email"   onChange={(a) => setEmail(a.target.value)} value={email}/></div>
         
		  <div><input  placeholder='senha' type="password"  onChange={(s) => setSenha(s.target.value)} value={senha} /></div>

          <div><input  placeholder='nome ' type="text"   onChange={(e) => setNome(e.target.value)} value={nome}/></div>

          <div><input  placeholder='foto' type="url" onChange={(f) => setFoto(f.target.value)} value={foto}/></div>
         
		  <div><button className="botao" type="submit" onClick={GO}>Entrar</button></div>
        
          
            <p>Já tem uma conta? Faça login! </p>
         
		
        {console.log(nome)}
        </>
    )
}