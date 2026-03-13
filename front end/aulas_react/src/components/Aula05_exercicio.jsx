import { estilos } from "../style/Estilos"

const Aula05_exercios = () => {
    function botaoClique1() {
        alert('você clicou no botão1')

    }
    function botaoClique2() {
        alert('você clicou no botão2')

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
            <p>2 botões que exibam alerts diferentes quando clicados (onClick).</p>
            <button onClick={botaoClique1}> Clique aqui 1</button>
            <button onClick={botaoClique2}> Clique aqui</button>
            <hr />
            <p> Um campo de texto que exibe no console o que o usuário digita (onChange).</p>
            <input onChange = {(event) => console.log(event.target.value)} type="text" placeholder="digite algo..." /> 

            <select onChange = {(event) => console.log(event.target.value)}>
                <option value="1A"> 1° A EM</option>
                <option value="2A"> 2° A EM</option>
                <option value="3A"> 3° A EM</option>
                <option value="3B"> 3° B EM</option>
            </select>
            <hr />
            <p>Um quadrado que muda de cor ao passar o mouse por cima (onMouseEnter e onMouseLeave).</p>
            <p onMouseEnter = {entradaMouse} onMouseLeave={saidaMouse}> Passe o mouse aqui</p>

            <hr />
            <p> Evento onkeydown - aciona em evento quando pression uma tecla</p>
            <input type="text" onKeyDown = {(event) => alert(event.key)} />
            
            <input type="text" onKeyDown = {alterarCor} 
            placeholder="a-azul, b-verde, c-amarelo ,d-roxo"/>

        </div>
    )
}

export default Aula05_exercios
