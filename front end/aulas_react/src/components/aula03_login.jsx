import { estilos } from '../style/Estilos'
import { useState } from "react";

const Aula03_login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem , setMensagem] = useState('')

    function botaoEntrar() {
        if (email == 'senai@senai.br' && senha == '123') {
           setMensagem ('login bem-sucedido')
        }else {
            setMensagem ('email ou senha incorretos ')
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <div style={estilos.cardLogin}>
                <img style={estilos.imagem}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgnNSK5_e2fKQGccebLgMnRr53lstlzXDNnQ&s"
                    alt="Ícone de login"
                />

                <h2 style={estilos.titulo}> login</h2>
                <p style={estilos.label}  >email</p>
                <label>
                    <input style={estilos.input} type="email" onChange={(event) => setEmail(event.target.value)} value={email} placeholder="Digite seu email" />
                </label>
                <p style={estilos.label} >senha</p>
                <label>
                    <input style={estilos.input} type="password" onChange={(event) => setSenha(event.target.value)} value={senha} placeholder="Digite sua senha" />
                </label>
                <button style={estilos.botao} type="button" onClick={botaoEntrar}> Entrar </button>
                <p style={{fontstyle: 'bold'}}>{mensagem}</p>
            </div>
        </div>
    )
}


export default Aula03_login