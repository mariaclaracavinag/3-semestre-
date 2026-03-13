import { useState, useEffect } from "react"
import {estilos} from "../style/Estilos"
import Aula09_nomeCorrigido from "./Aula09_nomecorrigido"

//não pode colocar html aqui 

const Aula09_ListaNomeCorrigido = () => {
    //VARIAVEL DE ESTADOOOOO
    const [listaPresenca, setListaPresenca] = useState ([])
    const [nome,setNome] = useState ('')
    
function botaoLimpar() {
    setListaPresenca([])
    localStorage.setItem('valorNome', JSON.stringify([]))
}

useEffect(() => {
       const NomeSalvo = localStorage.getItem('valorNome') || "[]";
        setListaPresenca(JSON.parse(NomeSalvo))
    }, [])
function botaoAdicionar() {
    setListaPresenca([...listaPresenca, nome])
    localStorage.setItem('valorNome', JSON.stringify([...listaPresenca, nome]))
}

    return(
        <div style={estilos.cardAula}> 
        <h1>Lista de Presença do Churrasco corrigida </h1>
        <input type="text" onChange={(event) => setNome (event.target.value)} value={nome}/> 
        <button onClick={botaoAdicionar}> Adicionar </button>
        {
            listaPresenca.map((pessoa,index) => (
                <Aula09_nomeCorrigido key={index} pessoa={pessoa} />
            ))
        }
        <button onClick={botaoLimpar}>Limpar</button>
        </div>
    )
}

export default Aula09_ListaNomeCorrigido