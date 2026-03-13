import { useState } from "react"
import{estilos} from "../style/Estilos"
import Aula07_perfil from "./Aula07_perfil"
import Aula07_perfilcorrigido from "./Aula07_perfilcorrigido"
import Aula09_Numero from "./Aula09_numero.jsx"
import Aula09_ListaNomes from "./Aula09_ListaNomes.jsx"
import Aula09_ListaNomeCorrigido from "./Aula09_ListaNomeCorrigido.jsx"

const Aula02 = () => {
    const [numerosSorteados, setNumeroSorteados] = useState( [10,43,28,2] )

    const [listaPerfis, setlistaPerfis] = useState ([
        {"nome": "claudia", "foto": "https://i.pinimg.com/1200x/1f/e2/14/1fe2144807e2c627378c27adc40de8f6.jpg"},
        {"nome": "claudio", "foto": "https://i.pinimg.com/736x/fa/35/66/fa3566650aaf579d62299a7fb4228eec.jpg"}
    ])
    function botaoSortear () {
        const novoNumero = Math.floor(Math.random () * 60 ) + 1
        setNumeroSorteados([...numerosSorteados, novoNumero])
    }

    function botaoExcluir(nr){
        const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
        setNumeroSorteados(novosNumeros)
    }

    return (
        <div style={estilos.cardAula}>
            <h2> Aula 09 - Lista em React </h2>
            <h3> Conceitos Básicos e configuração do ambiente</h3>
            <p> Exibindo conteúdos com listas </p>
          <hr/> 

          <button onClick={botaoSortear}> novo numero </button>
          
          <h3> Lista de numeros sorteados</h3>
          {/* A função map é como o for para o arrayas/ vetores*/}
          {
            numerosSorteados.map((numero,index) => (
               <Aula09_Numero key={index} numero={numero} excluir={() => botaoExcluir(numero)} /> 
            )) 
          }
          <hr/> 
          <div style={{display: "flex"}}> 
            {
             listaPerfis.map ((perfil,index)=> (
                <Aula07_perfilcorrigido key={index} nome={perfil.nome} foto={perfil.foto}/> 
             ))
          }
          </div>
         <hr/> 
          <Aula09_ListaNomes/> 
          <Aula09_ListaNomeCorrigido/>
        </div>
    )
}
export default Aula02