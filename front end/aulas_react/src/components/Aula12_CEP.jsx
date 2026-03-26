import { useState, useEffect } from "react"
import {estilos} from "../style/Estilos"

const Aula12_CEP = () =>{

    const [cep, setcep] = useState('')
    const [logradouro, setlogradouro] = useState('')
    const [bairro, setbairro] = useState('')
    const [cidade, setcidade] = useState('')
    const [estado, setestado] = useState('')

 const buscarDados = async () => {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const dados = await resposta.json()
            console.log(dados);
            setcep(dados.cep)
            setlogradouro(dados.logradouro)
            setbairro(dados.bairro)
            setcidade(dados.localidade)
            setestado(dados.estado)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardLogin}>
            <h1> buscar CEP  </h1>
            <div>
                <input type="text" value={cep} onChange = {(event) => setcep (event.target.value)} placeholder="digite seu CEP" style={estilos.input} /> 

                <button style={estilos.botao} onClick={buscarDados}> Buscar </button>
            </div>
                <div>
                    <p style={estilos.loginConteudo}> logadouro: {logradouro}</p>
                    <p style={estilos.loginConteudo}> Bairro: {bairro}</p>
                    <p style={estilos.loginConteudo}> cidade: {cidade}</p>
                    <p style={estilos.loginConteudo}> estado: {estado}</p>
                </div>
            </div>
        
    )
}

export default Aula12_CEP

