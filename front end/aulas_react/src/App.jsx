import Aula07 from "./components/aula07";
import Aula01 from "./components/Aula01";
import Aula02 from "./components/Aula02";
import Aula03 from "./components/Aula03";
import Aula04 from "./components/aula04";
import Aula05 from "./components/aula05";
import Aula06 from "./components/Aula06";


import Cabecalho from "./components/Cabecalho";

import{estilos} from "./style/estilos"
import Aula08 from "./components/aula08";
import Aula09 from "./components/Aula09";
import Aula10 from "./components/Aula10";
import Aula11 from "./components/Aula11";

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
        <Aula06/> 
        <Aula07/>
        <Aula08/> 
        <Aula09/>
        <Aula10/> 
        <Aula11/> 
      </div>
      </main>
    </div>
  )
}

export default App; 