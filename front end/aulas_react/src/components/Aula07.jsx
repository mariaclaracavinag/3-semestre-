import{estilos} from "../style/Estilos"
import Aula07_multicomponentes, {enderecoServidor, MeuComponenteNomeado,MeuComponenteNomeado2} from "./aula07_multicomponentes"
import Aula07_perfil from "./Aula07_perfil"
import Aula07_perfilcorrigido from "./Aula07_perfilcorrigido"

const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2> Aula 07 - importação e exportação de Módulos </h2>
            <h3> Compreendendo importação e exportação padrão ou nomeada</h3>
            <hr/> 
            <Aula07_multicomponentes/>
            <MeuComponenteNomeado/> 
            <MeuComponenteNomeado2/> 
            <p>{enderecoServidor} </p>
            <Aula07_perfil />
            <Aula07_perfilcorrigido
            foto= "https://i.pinimg.com/736x/45/fd/2e/45fd2e7d91d01463044854051552a7d5.jpg"
            nome= "Maria Clara"/>  
        </div>
    )
}
export default Aula07