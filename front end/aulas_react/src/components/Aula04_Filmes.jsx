import{estilos} from "../style/Estilos"
const Aula04_filmes = ({foto,titulo,genero,}) => {


    return(
        <div style={estilos.container}> 
    <div style={estilos.cardF}> 
        <img src={foto} style={estilos.imagemF}/> 
        <h3 style={estilos.textoF}> {titulo} </h3>
        <p style={estilos.textoF} > gênero: {genero} </p>
        <button type="button" style={estilos.botaoF}> assistir </button>
        </div> 
    </div> 
    )
}

export default Aula04_filmes