import { estilos } from "../style/Estilos"
import Aula05_exercios from "./aula05_exercicio"

const Aula05 = () => {
    function botaoClique() {
        alert('você clicou no botão')
        console.log('você clicou no botão')

    }
    const botaoDuploClique = () => {
        alert('Duplo Clique')
    }
   function entradaMouse (event){
     console.log('mouse entrou');
     event.target.style.backgroundColor= 'rgba(220, 31, 179, 0.88)'; 
     
   }
   function saidaMouse (event){
     console.log('mouse saiu');
     event.target.style.backgroundColor= 'rgba(140, 14, 112, 0.88)'; 
     
   }
   function alterarCor (event){
        if(event.key == 'a'){
            event.target.style.backgroundColor= 'rgba(6, 3, 139, 0.88)'
        }
        else if(event.key == 'b'){
            event.target.style.backgroundColor= 'rgba(50, 110, 37, 0.88)'
        }
        else if(event.key == 'c'){
            event.target.style.backgroundColor= 'rgba(226, 229, 37, 0.88)'
        }
        else if(event.key == 'd'){
            event.target.style.backgroundColor= 'rgba(148, 32, 168, 0.88)'
        }
   }
    return (
        <div style={estilos.cardAula}>
            <h2> aula 05 - eventos de um componente </h2>
            <h3> os eventos são fundamentais para criar interatividade em aplicaçoes web
            </h3>
            <hr />

            <p>Evento Onclick - clique do usuario em qualquer elemento </p>
            <button onClick={botaoClique}> Clique aqui</button>
            <p onDoubleClick={botaoDuploClique}>Este paragrafo recebe um duplo clique </p>

            <hr />
            <p> Eventp onChange - sempre que um campo de entrada é alteredo</p>
            <input onChange = {(event) => console.log(event.target.value)} type="text" placeholder="digite algo..." /> 

            <select onChange = {(event) => console.log(event.target.value)}>
                <option value="1A"> 1° A EM</option>
                <option value="2A"> 2° A EM</option>
                <option value="3A"> 3° A EM</option>
                <option value="3B"> 3° B EM</option>
            </select>
            <hr />
            <p>Evento onMouseEnter / On MouseLeave</p>
            <p onMouseEnter = {entradaMouse} onMouseLeave={saidaMouse}> Passe o mouse aqui</p>

            <hr />
            <p> Evento onkeydown - aciona em evento quando pression uma tecla</p>
            <input type="text" onKeyDown = {(event) => alert(event.key)} />
            <input type="text" onKeyDown = {alterarCor} 
            placeholder="a-azul, b-verde, c-amarelo ,d-roxo"/>
            <Aula05_exercios/>
        </div>
    )
}

export default Aula05
