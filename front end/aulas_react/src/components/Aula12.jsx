import { useEffect, useState } from "react"
import { estilos } from "../style/Estilos"
import Aula12_CEP from "./Aula12_CEP"

const Aula12 = () => {
    const [imagem, setimagem] = useState(``)

    const buscarDados = async () => {
        try {
            const resposta = await fetch('https://dog.ceo/api/breeds/image/random')
            const dados = await resposta.json()
            console.log(dados);
            setimagem(dados.message)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        buscarDados()
    }, [])

    return (
        <div style={estilos.cardAula}>
            <h2> Aula-12 - Consumo de APIs </h2>
            <h3> Aprendendo a utilizar APIs em React</h3>
            <hr />
            <div>
                <p> Imagem de cachorro </p>
                <img src={imagem}  width={300} />
                <button onClick={buscarDados}> Exibir imagem</button>
            </div>
            <hr />
            <Aula12_CEP/>
        </div>
    )
}

export default Aula12