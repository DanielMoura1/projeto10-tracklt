import { Link } from "react-router-dom";
import "./style.css";
export default  function Nivel4(props){
    const {token,obj} =props;
    return(
        <>
        <div className="barra">
            <div className="abc">
                <img className='logo' src='TrackIt (2).png'/>
                <img className="perfil" src={`${obj}`}/>
            </div>
        </div>
        <div> Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
        <div className="BarraDeBaixo">
        
        <Link to='/Nivel2'> <p className="habito"> hábitos</p></Link>
        <Link to='/Nivel3'> <div className="abcc" >Hoje</div></Link>
        <p className="Historico">Historico</p>

        </div>

        </>

    )

}