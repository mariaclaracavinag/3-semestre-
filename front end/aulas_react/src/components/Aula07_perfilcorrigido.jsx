import { useState } from "react"

const Aula07_perfilcorrigido = ({foto,nome}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap:10,
            border: '1px solid #ccc',
            padding: 20,
            width: 220, 
            boxShadow: '0 4px 10px rgba(0,0,0.1)',
            borderRadius:12, 
            margin: 10
        }}>
          <Avatar foto= { foto } /> 
          <InfoUsuario nome={nome}/> 
          <Botaoseguir/> 
        </div>
    )
}

export const Avatar = ({foto}) => {
    return(
       <img src= {foto} alt="" style= {{width: 80, height: 100, borderRadius: '50%'}}/> 
    )
}

export const InfoUsuario = ({nome}) => {
    return(
       <h3>{nome}</h3>
    )
}
export const Botaoseguir = ({nome}) => {
    const [seguindo,setSeguindo] = useState(false)
    return(
       <button onClick= {() => setSeguindo (!seguindo)} style={{
        backgroundColor: seguindo == false ?  '#b01584' : "#5a013c",
        color: '#fff',
        border: 'none',
        padding: '10px 16px', 
        borderRadius: 8
       }}> 
       {seguindo == false ? "Seguir": "Deixar de Seguir"}
        </button>
    )
}



export const enderecoServidor = "localhost"

//exportando componentes e variaveis nomeadas 

export default Aula07_perfilcorrigido   