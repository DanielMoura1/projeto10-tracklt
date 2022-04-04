import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import  {  CircularProgressbar  }  from  'react-circular-progressbar' ; 

export default  function Nivel2(props){
    const [dia,setDia] =useState([]);
    const {obj,token} =props;
    const [num,setNum] =useState([1,1,1,1,1,1,1])
    const [nome,setNome] =useState('');
    const [chave,setChave]=useState(1);
    const [hab,setHab] =useState([]);
    const [b,setB] =useState([]);
    const x =false
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
    }       
    }
    
    useEffect(() => {
        const requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
       config)
       requisicao.then(resposta => {
           console.log(resposta)
           
           setHab(resposta.data)
           console.log(hab)
        });

    }, []);
   
    function selecionar(i,d){
        
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
        const config = {
	        headers: {
		        "Authorization": `Bearer ${token}`
	    }       
        }
    
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',{
            name: nome,
            days: dia // segunda, quarta e sexta
        },config)
        requisicao.then(resposta => {
            console.log(resposta)
            MudarTelas()
            const requisicao2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
            config)
            requisicao2.then(resposta => {
                console.log(resposta)
                
                setHab(resposta.data)
                console.log(hab)
             });
            
        });
        
    }
    function fechar(){
        if(chave == 2){
            setChave(1)
            num[0]=1
            num[1]=1
            num[2]=1
            num[3]=1
            num[4]=1
            num[5]=1
            num[6]=1
            setNum([...num])
            setNome('')
            const dia =[]
            setDia([...dia])
        }
    }
    function abrir(){
        if(chave == 1){
            setChave(2)
            num[0]=1
            num[1]=1
            num[2]=1
            num[3]=1
            num[4]=1
            num[5]=1
            num[6]=1
            setNum([...num])
            setNome('')
            const dia =[]
            setDia([...dia])
        }

    }
    function MudarTelas(){
        setChave(1)
        num[0]=1
        num[1]=1
        num[2]=1
        num[3]=1
        num[4]=1
        num[5]=1
        num[6]=1
        setNum([...num])
        setNome('')
        const dia =[]
        setDia([...dia])
    }
    function apagar(id){
        const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
       config)
       requisicao.then(resposta2 => {
       const requisicao2 = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
       config)
       requisicao2.then(resposta => {
           console.log(resposta)
           
           setHab(resposta.data)
           console.log(hab)
        });});
       alert('apaguei')

    }
    
    return(
        <>
        
        {console.log(hab)}
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
            <div className="mais" onClick={abrir}>+ </div>
        </div>
        
        <div className={`${chave==1 ?'fechar' :'aberto'}`}>
            <input className="input" type="text"   placeholder='nome do hábito'   onChange={(e) => setNome(e.target.value)} value={nome}/>
            <div className="caixa">
                <div onClick={ () =>selecionar(0,0)} className={`${num[0]>1 ?'semanas2' :'semanas'}`}>D</div><div onClick={ () =>selecionar(1,1)}  className={`${num[1]>1 ?'semanas2' :'semanas'}`}>S</div><div onClick={ () =>selecionar(2,2)}  className={`${num[2]>1 ?'semanas2' :'semanas'}`}>T</div><div onClick={ () =>selecionar(3,3)}  className={`${num[3]>1 ?'semanas2' :'semanas'}`}>Q</div>
               <div onClick={ () =>selecionar(4,4)}  className={`${num[4]>1 ?'semanas2' :'semanas'}`}>Q</div><div onClick={ () =>selecionar(5,5)} className={`${num[5]>1 ?'semanas2' :'semanas'}`}>S</div><div onClick={ () =>selecionar(6,6)} className={`${num[6]>1 ?'semanas2' :'semanas'}`}>S</div>
            </div>
            <div className="caixa">
                <div  className="cancelar" onClick={fechar}>
                    Cancelar 
                </div>
                <div className="salvar" onClick={salvar}>
                    Salvar
                </div>
            </div>
        </div>
        <div className="b">
            
        {hab.map(item => <>
        
        
            <div className="caixa">
                <div  className="cor" >
                    {item.name}
                </div>
           
                <div className="cor2" onClick={() => apagar(item.id)}>
                    <img src='Vector (1).png'/>
                </div>
            </div>
            <div  className="caixa2">
                
                <div className={`${item.days[0]==0||item.days[1]==0||item.days[2]==0||item.days[3]==0||item.days[4]==0||item.days[5]==0 ||item.days[6]==0 ?'semanas2' :'semanas'}`}>
                    D
                </div>
                <div className={`${item.days[0]==1||item.days[1]==1||item.days[2]==1||item.days[3]==1||item.days[4]==1||item.days[5]==1||item.days[6]==1 ?'semanas2' :'semanas'}`}>
                    S
                </div>
                <div className={`${item.days[0]==2||item.days[1]==2||item.days[2]==2||item.days[3]==2||item.days[4]==2||item.days[5]==2 ||item.days[6]==2 ?'semanas2' :'semanas'}`}>
                    T
                </div>
                <div className={`${item.days[0]==3||item.days[1]==3||item.days[2]==3||item.days[3]==3||item.days[4]==3||item.days[5]==3||item.days[6]==3  ?'semanas2' :'semanas'}`}>
                    Q
                </div>
                <div className={`${item.days[0]==4||item.days[1]==4||item.days[2]==4||item.days[3]==4||item.days[4]==4||item.days[5]==4||item.days[6]==4  ?'semanas2' :'semanas'}`}>
                    Q
                </div>
                <div className={`${item.days[0]==5||item.days[1]==5||item.days[2]==5||item.days[3]==5||item.days[4]==5||item.days[5]==5 ||item.days[6]==5 ?'semanas2' :'semanas'}`}>
                    S
                </div>
                <div className={`${item.days[0]==6||item.days[1]==6||item.days[2]==6||item.days[3]==6||item.days[4]==6||item.days[5]==6 ||item.days[6]==6 ?'semanas2' :'semanas'}`}>
                    S
                </div>
            
            </div>
         </> )}
        
        </div>
        <div className={`${hab[0]==undefined ?'xxx' :'fechar'}`}> você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começa a trackear!</div>
        
        
        <div className="BarraDeBaixo">
        
            <Link to='/Nivel2'> <p className="habito"> hábitos</p></Link>
            <Link to='/Nivel3'> <div className="abcc" >Hoje</div></Link>
            <Link to='/Nivel4'><p className="Historico">Historico</p></Link>

        </div>
        </>
    )
}