import { estilos } from './GameEstilos'
import { useState } from "react"


const Game = () => {
    const [numeroSecreto, setNumeroSecreto] = useState(sortearNumero)
    const [chute,setChute] = useState('')
    const [mensagem, setMensagem] = useState('adivinhe um numero ente 1 e 100')
    const [tentativas, setTentativas] = useState(1)
    const [jogoJogoFinalizado, setJogoFinalizado] = useState(false)

    function sortearNumero(){
        return Math.floor(Math.random() * 100) +1 
    }

    function botaoChutar(){
        if (numeroSecreto == chute){
            setMensagem(`✅ Acertou! você descobriu em ${tentativas} tentativas`)
            setJogoFinalizado(true)
        }else if (numeroSecreto < chute) {
             setMensagem(`Você chutou ${chute} o n° segredo é menor!`)
             setChute('')
             setTentativas(tentativas + 1 )
        }else{
             setMensagem(`Você chutou ${chute} o n° segredo é maior!`)
             setChute('')
             setTentativas(tentativas + 1 )
        }
    }
    function botaoNovoJogo(){
        setChute('')
        setJogoFinalizado(false)
        setTentativas(1)
        setMensagem('escolha um numero entre 1 e 100')
        setNumeroSecreto(sortearNumero)
    }



    return (
        <section style={estilos.container}> 
        <div style= {estilos.conteudo}> 
         <div style={estilos.informacoes}> 
            <div style={estilos.texto}> 
                <h1 style={estilos.h1}>Jogo Numero Secreto</h1>
                <p style={estilos.mensagem}> {mensagem}</p>
             </div>
             <input onChange={(event) => setChute(event.target.value)} value ={chute}
             type= "number" style={estilos.chute}/> 
             <div style= {estilos.botoes}> 
             <button style= {estilos.botao} onClick={botaoChutar}> Chutar </button>
             <button style= {estilos.botao}onClick={botaoNovoJogo}> novo jogo </button>
             </div>
         </div>
         <img src="./img/ia.png" style={estilos.imagem} /> 
        </div>


        </section>
    )
}

export default Game