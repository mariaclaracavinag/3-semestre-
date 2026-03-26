import { useState, useEffect } from "react"
import {estilos} from "../style/Estilos"

const Aula12_produtos = () =>{

    const [id, setid] = useState('')
    const [titulo, settitulo] = useState('')
    const [descricao, setdescricao] = useState('')
    const [preco, setpreco] = useState('')
    const [imagem, setimagem] = useState('')

 const buscarDados = async () => {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${id}/json/`)
            const dados = await resposta.json()
            console.log(dados);
            setid(dados.id)
            settitulo(dados.title)
            setpreco(dados.price)
            setdescricao(dados.description)
            setimagem(dados.image)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardLogin}>
            <h1> buscar produto  </h1>
            <div>
                <input type="text" value={id} onChange = {(event) => setid (event.target.value)} placeholder="digite o id" style={estilos.input} /> 

                <button style={estilos.botao} onClick={buscarDados}> Buscar </button>
            </div>
                <div>
                    <p style={estilos.loginConteudo}> titulo: {logradouro}</p>
                    <p style={estilos.loginConteudo}> Bairro: {bairro}</p>
                    <p style={estilos.loginConteudo}> cidade: {cidade}</p>
                    <p style={estilos.loginConteudo}> estado: {estado}</p>
                </div>
            </div>
        
    )
}

export default Aula12_produtos