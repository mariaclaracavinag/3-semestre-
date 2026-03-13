import{estilos} from "../style/Estilos"
import Aula11_cadastroprodutos from "./Aula11_cadastroprodutos"

const Aula11 = () => {
    return (
         <div style={estilos.cardAula}> 
            <h2> Aula 11 - Cadastro de produtos </h2>
            <p> criando uma lista de produtos e armazenando os dados localmente</p>
            <hr />
            <Aula11_cadastroprodutos/> 
        </div>
    )
}
export default Aula11