import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import Aula04 from "./components/aula04";
import Aula05 from "./components/aula05";
import Cabecalho from "./components/Cabecalho";

import{estilos} from "./style/estilos"

const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula='React'/> 
      <main style={estilos.conteudo}>
      <h2>Aulas</h2>
      <div style={estilos.lista_aulas}> 
        {/* aqui incluiremos todos os componentes */}
        <Aula01/>
        <Aula02/>
        <Aula03/>
        <Aula04/>
        <Aula05/> 
      </div>
      </main>
    </div>
  )
}

export default App; 