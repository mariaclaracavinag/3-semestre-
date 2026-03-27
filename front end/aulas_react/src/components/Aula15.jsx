import{estilos} from "../style/Estilos"
import Aula15_login from "./Aula15_login"

const Aula15 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2> Aula 15 - Login com API </h2>
            <h3> Utilizando o login juntamente com uma API</h3>
            <hr/>
            <Aula15_login/>
        </div>
    )
}
export default Aula15