import{estilos} from "../style/Estilos"
import Aula13_CRUD_Produtos from "./Aula13_CRUD_Produtos"
import Aula13_CRUD_Usuarios from "./Aula13_CRUD_Usuarios"


const Aula13 = () => {
    return (
         <div style={estilos.cardAula}> 
            <h2> Aula 13 - CRUD com API </h2>
            <p> criando um CRUD utilizando API desenvolvida em Backend</p>
            <hr />
            <Aula13_CRUD_Produtos/> 
            <Aula13_CRUD_Usuarios/>
        </div>
    )
}
export default Aula13