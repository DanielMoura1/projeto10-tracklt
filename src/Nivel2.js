import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default  function Nivel2(props){
    const [dia,setDia] =useState([]);
    const {obj} =props;
    const [num,setNum] =useState([1,1,1,1,1,1,1])
    const [nome,setNome] =useState('');
    function selecionar(i,d){
        alert('oi')
        if(num[i] >1){

        }else{
            num[i] = num[i] +1
            setNum([...num])
            dia.push(d)
            setDia(dia)
            console.log(dia)
            console.log(nome)

        }

    }
    function salvar(){
        console.log(dia)
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{
            name: nome,
            days: dia // segunda, quarta e sexta
        })
        requisicao.then(resposta => {
            console.log(resposta)
        });
    }
    return(
        <>
        
        {console.log(obj)}
        <div className="barra">
            <div className="abc">
                <img className='logo' src='TrackIt (2).png'/>
                <img className="perfil" src={`${obj}`}/>
            </div>
        </div>
        <div className="texto">
            <h1 className="textoh1">
                Meus hábitos
            </h1>
        </div>
        <div>
            <input  type="text"   placeholder='nome do hábito'   onChange={(e) => setNome(e.target.value)} value={nome}/>
            <div className="caixa">
                <div onClick={ () =>selecionar(0,0)} className={`${num[0]>1 ?'semanas2' :'semanas'}`}>D</div><div onClick={ () =>selecionar(1,1)}  className={`${num[1]>1 ?'semanas2' :'semanas'}`}>S</div><div onClick={ () =>selecionar(2,2)}  className={`${num[2]>1 ?'semanas2' :'semanas'}`}>T</div><div onClick={ () =>selecionar(3,3)}  className={`${num[3]>1 ?'semanas2' :'semanas'}`}>Q</div>
               <div onClick={ () =>selecionar(4,4)}  className={`${num[4]>1 ?'semanas2' :'semanas'}`}>Q</div><div onClick={ () =>selecionar(5,5)} className={`${num[5]>1 ?'semanas2' :'semanas'}`}>S</div><div onClick={ () =>selecionar(6,6)} className={`${num[6]>1 ?'semanas2' :'semanas'}`}>S</div>
            </div>
            <div className="caixa">
                <div>
                    Cancelar 
                </div>
                <div onClick={salvar}>
                    Salvar
                </div>
            </div>
        </div>
        <div className="BarraDeBaixo">
            <Link to='/Nivel3'> <p> hábitos</p></Link>

        </div>
        </>
    )
}