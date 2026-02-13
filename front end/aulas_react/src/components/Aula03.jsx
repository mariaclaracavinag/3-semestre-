//importanto um css comum 
import '../style/Aula03.css'
import { estilos } from '../style/estilos'
import Aula03_login from './aula03_login'


const Aula03 = () => {
    return (
          <div style={estilos.cardAula}>
            <h2> Aula 03 - componentes e estilização</h2>
            <h3> Criação de componentes reutilizáveis e suas estilização</h3>
            <p> Aprendendo a criar e reutilizar componentes e estilizações para melhorar a UI </p>

         <hr/>
         <p className= "texto"> CSS externo </p> 
         <p className= "descricao"> A forma mais simples e classica de estilização CSS</p> 

          <hr/>
            <p style={ { color: 'blue', fontWeight: 'bold' } } >Estilização Inline</p>
            <p style={ {fontStlye: 'italic'} } >Estilos aplicados diretamente nos elementos como OBJETOS</p>

            <hr />
            <p style={estilos.tituloModulo} >CSS Modules</p>
            <p style={estilos.descricaoModulo}>CSS modularizado é a forma mais comum para Mobile</p>
            <hr/> 
          <Aula03_login /> 
        </div>
    )
}


export default Aula03