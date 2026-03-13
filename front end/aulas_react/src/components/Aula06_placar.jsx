import { useState } from "react";
import { estilos } from "../style/Estilos"

const Aula06_placar =() => {
    const[placar1,setPlacar1] = useState (0)
    const[placar2,setPlacar2] = useState (0)

    function botaozerar (){
        setPlacar1 (0)
        setPlacar2 (0)
    }
    return(
        <div> 
            <h2 style={estilos.cardAula}> Futebol </h2>
            <div> 
            <h2>time 1</h2>
            <h2> N°: {placar1} </h2>
            <button onClick= {() => setPlacar1(placar1 +1)} > +1 ponto </button>
            </div>
            <div> 
             <h2>time 2</h2>
            <h2> N°: {placar2} </h2>
            <button onClick= {() => setPlacar2(placar2 +1)} > +1 ponto </button>
            <br/> 
            <button onClick={botaozerar}> Zerar</button>
            </div>
        </div>
    )
}


export default Aula06_placar