
const Aula07_multicomponentes = () => {
    return (
        <div>
          <p> Meu componente padrão </p>
          <MeuComponenteNomeado/> 
        </div>
    )
}

export const MeuComponenteNomeado = () => {
    return(
        <p> Meu componente nomeado</p>
    )
}

export const MeuComponenteNomeado2 = () => {
    return(
        <p> Meu componente nomeado 2</p>
    )
}

export const enderecoServidor = "localhost"

//exportando componentes e variaveis nomeadas 

export default Aula07_multicomponentes