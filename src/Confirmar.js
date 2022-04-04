import "./style.css";
import "./reset.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
export default function  Confirmar(props){
    const {name,done,id,dias, token,datas,setDatas,vd,setVd,currentSequence,highestSequence} =props
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
    }       
    }
    
    const [chave,setChave]= useState(1)
    if(done ==true){
        setVd(2)
    }
    function mudar(id,done){
        if(done == false){
           
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},
            config)
            requisicao.then(resposta => {
                const requisicao2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config)
            requisicao2.then(resposta => {
            console.log('datas')
            console.log(datas)
            console.log(resposta)
            setDatas(resposta.data)
            console.log(datas)
         });
            });
            setChave(2)
            console.log(done)
            console.log(id)
        }else{
            const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},
            config)
            requisicao.then(resposta => {
                const requisicao2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
            config)
            requisicao2.then(resposta => {
            console.log('datas')
            console.log(datas)
            console.log(resposta)
            setDatas(resposta.data[0].habits)
            console.log(datas)
        }); });
            setChave(1)
            console.log(done)
        }
    }
    return (
        <>
         {console.log(id)}
        <div className="fim">
            <div className="caixa">
                <div>
                    <div className="textfim2">{name} </div>
                   <div className="textfim"> <p >Sequência atual : </p> <p className="verde"> { currentSequence} dias</p></div>
                    <div className="textfim"> <p>Seu recorde :</p> <p className={`${currentSequence === highestSequence ?'verde' :'AA'}`}> { highestSequence} dias</p></div>
                </div>
                <div onClick={() => mudar(id,done)} className={`${done ==true? 'confirmar' :'confirmar2' }`}> <img src="Vector.png"/> </div>
            </div>
        </div>
        </>
    )
}