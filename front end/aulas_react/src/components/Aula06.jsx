import { useState } from "react"
import {estilos} from "../style/Estilos.jsx"
import Aula06_Contador from "./aula06_contador.jsx"
import Aula06_placar from "./aula06_placar.jsx"
import Aula06_basquete from "./Aula06_basquete.jsx"

const Aula06 = () =>  {
    //declarnado uma variavel de stateeee
    const [nome, setNome] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [telefone, setTelefone] = useState ('')
    const [visivel, setVisivel] = useState (false)

    function BotaoLimpar (){
       setNome('')
       setCidade('')
       setTelefone('')
    }


    return (
        <div style={estilos.cardAula}> 
        <h2> Aula 06 - Estado de um componente</h2>
        <h3>O hook usestate adiciona estado a componentes funcionais </h3>
        <hr/> 

        <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
        <input type="text" onChange={(event) => setCidade(event.target.value)} value={cidade} />
        <input type="number" onChange={(event) => setTelefone(event.target.value)} value={telefone} />
        <p> olá {nome} ,voce mora em {cidade}, seu telefone é {telefone} </p>
        <button onClick={BotaoLimpar}>Limpar</button>
        <hr/>

       <button onClick={ () => setVisivel(!visivel)}>
         {visivel == false ? <p> Mostrar saldo</p> : <p> ocultar saldo </p>}
         </button>

       {visivel == false ? <p> R$ ***,** </p> : <p> R$ 732,10</p> } 
    
        <hr/> 
        <Aula06_Contador/>
        <Aula06_placar/> 
        <Aula06_basquete/> 
        

        </div>
    )
}

export default Aula06