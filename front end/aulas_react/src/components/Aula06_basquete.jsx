import { useState } from "react";
import { estilos } from "../style/Estilos"

const Aula06_basquete =() => {
    const[placar1,setPlacar1] = useState (0)
    const[placar2,setPlacar2] = useState (0)

     function botaozerar (){
        setPlacar1 (0)
        setPlacar2 (0)
    }

    return(
        <div> 
            <div>
            <h2 style={estilos.cardAula}> Basquete </h2> 
            <h2>time 1</h2>
            <h2> N°: {placar1} </h2>
            <button onClick= {() => setPlacar1(placar1 +1)} > +1 ponto </button>
            <button onClick= {() => setPlacar1(placar1 +2)} > +2 ponto </button>
            <button onClick= {() => setPlacar1(placar1 +3)} > +3 ponto </button>
            </div>
            <div> 
            <h2>time 2</h2>
            <h2> N°: {placar2} </h2>
            <button onClick= {() => setPlacar2(placar2 +1)} > +1 ponto </button>
            <button onClick= {() => setPlacar2(placar2 +1)} > +2 ponto </button>
            <button onClick= {() => setPlacar2(placar2 +1)} > +3 ponto </button>
            </div>
            <br/> 
            <button onClick={botaozerar}> Zerar</button>
        </div>
    )
}


export default Aula06_basquete