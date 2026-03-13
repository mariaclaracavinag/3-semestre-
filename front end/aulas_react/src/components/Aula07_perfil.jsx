import{estilos} from "../style/Estilos"
import { useState } from "react"

const Aula07_perfil= () => {
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
            <hr />
          <Avatar/> 
          <InfoUsuario/> 
          <Botaoseguir/> 
        </div>
    )
}

export const Avatar = () => {
    return(
        <img style= {{width: 100, height: 100, borderRadius: '50%'}}
                            src="https://i.pinimg.com/736x/76/fe/63/76fe63599943a5002fc58b262f915b87.jpg"
                            alt="imagem"
                        />
    )
}

export const InfoUsuario = () => {
    return(
        <p> LARA D'AVILA</p>
    )
}
export const Botaoseguir = ({nome}) => {
    const [seguindo,setSeguindo] = useState(false)
    return(
       <button onClick= {() => setSeguindo (!seguindo)} style={{
        backgroundColor:seguindo == false ?  '#4c494b' : "#000000",
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

export default Aula07_perfil