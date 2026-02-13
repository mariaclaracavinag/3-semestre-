import { estilos } from '../style/estilos'

const Aula03_login = () => {
    return (
        <div style={ estilos.loginConteudo}> 
       <div style={estilos.cardLogin}> 
   <img style={estilos.imagem}
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnNSK5_e2fKQGccebLgMnRr53lstlzXDNnQ&s"
  alt="Ícone de login"
/>

    <h2 style={estilos.titulo}> login</h2>
    <p style={estilos.label}  >email</p>
    <label>
        <input style={estilos.input} type="email" placeholder="Digite seu email" />
    </label>
    <p style={estilos.label} >senha</p>
    <label>
       <input style={estilos.input} type="password" placeholder="Digite sua senha" />
    </label>
    <button style={estilos.botao} type="button"> Entrar </button>
       </div>
        </div>
    )
}


export default Aula03_login