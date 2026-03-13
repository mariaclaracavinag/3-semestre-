import{estilos} from "../style/Estilos"
import Aula04_IMC from "./aula04_IMC"
import Aula04_filmes from "./Aula04_Filmes"

const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2> Aula 04 - Props </h2>
            <h3> Criação de componentes reutilizaveis e suas estilizações</h3>
            <hr/> 
            <Aula04_IMC nome='jorge' peso={80} altura={1.80} cor="#7d3b7a"/> 
            <Aula04_IMC nome='claudio' peso={200} altura={1.80} cor="#01717d"/> 
            <Aula04_IMC nome='claudia' peso={70} altura={1.60} cor="#c4d901"/> 
            <div style={estilos.containerF}>
                <Aula04_filmes foto='https://i.pinimg.com/1200x/98/0f/92/980f92d4e89bc8a1a5451337a256ba0d.jpg' titulo="através da minha janela" genero= "romance" /> 
                <Aula04_filmes foto='https://i.pinimg.com/736x/71/3e/6c/713e6c875ceda618c9d0e6e6fd7b6c79.jpg' titulo="para todos os garotos que já amei " genero= "romance" /> 
                <Aula04_filmes foto='https://i.pinimg.com/1200x/ae/a2/49/aea24934e1b25f007243dcb1641ad203.jpg' titulo="como eu era antes de você" genero= "romance" />  
                <Aula04_filmes foto='https://i.pinimg.com/736x/4d/09/19/4d0919a920142ffca3b3d07ff894f555.jpg' titulo="As patricinhas de beverly hills" genero= "comedia romantica" /> 
             
            </div>
        </div>
    )
}
export default Aula04