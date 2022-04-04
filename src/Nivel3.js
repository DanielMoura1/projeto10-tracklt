import "./style.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Confirmar from "./Confirmar";
export default  function Nivel3(props){
    const [datas,setDatas] = useState([])
    const [dias,setDias]= useState('')
    const [dia,setDia]= useState('')
    const [vd,setVd] = useState(1)
    const {token,obj} =props;
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
    }       
    }
    useEffect(() => {
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
        config)
        requisicao.then(resposta => {
            console.log('datas')
            console.log(datas)
            console.log(resposta)
            
            setDias(resposta.data[0].day)
            setDia(resposta.data[0].habits[0].weekDay)
            console.log(datas)
         });
       
	}, []);
    useEffect(() => {
        const requisicao2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
            config)
            requisicao2.then(resposta => {
            console.log('datas')
            console.log(datas)
            console.log(resposta)
            setDatas(resposta.data)
            console.log(datas)
         });

    }, []);

   
    return(<>
     <div className="barra">
            <div className="abc">
                <img className='logo' src='TrackIt (2).png'/>
                <img className="perfil" src={`${obj}`}/>
            </div>
        </div>
        <div> {`${dia ==0 ?'Domingo':dia ==1 ?'segunda-feira':dia ==2?'terça-feira':dia ==3 ?'quarta-feira':dia ==4 ?'Quinta-feira':dia ==5 ?'sexta-feira':'Sábado'}`}-{dias}</div>
        <div className="QQ">{`${vd ==1 ?'Nenhum hábíto concluído ainda' :'% dos hábitos concluídos'}`} </div>
        {datas.map(item => <>
        
            <Confirmar vd={vd} setVd={setVd} datas={datas} setDatas={setDatas} dias={dias} done={item.done} name={item.name} id={item.id} currentSequence={item.currentSequence} highestSequence={item.highestSequence} token={token} />
        </>)}
        
        <div className="BarraDeBaixo">
        
        <Link to='/Nivel2'> <p className="habito"> hábitos</p></Link>
        <Link to='/Nivel3'> <div className="abcc" >Hoje</div></Link>
        <Link to='/Nivel4'><p className="Historico">Historico</p></Link>

        </div>
    </>
    )
}