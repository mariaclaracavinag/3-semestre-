import { estilos } from '../style/Estilos'
import { useState } from "react";
import { enderecoServidor } from '../utils';
import {Link, Navigate, useNavigate} from 'react-router-dom'

const Aula15_login = () => {
    const Navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem , setMensagem] = useState('')

    const botaoEntrar = async (event) => {
        //função para não recarregar a tela
        event.preventDefault();
        try {
            if (email == '' || senha == ''){
                throw new Error('Preencha todos os campos')
            }
            const login ={
                email: email,
                senha: senha, 
            }
            //utilizando autenticação com a API do backend
            const resposta = await fetch(`${enderecoServidor}/login`,{
                method: 'POST',
                headers:{'Content-type': 'application/json'},
                body: JSON.stringify(login)
            })
            const dados = await resposta.json()

            if(resposta.ok){
                console.log('login bem sucedido', dados);
                setMensagem ('✅ login bem-sucedido!')
                localStorage.setItem('UsuarioLogado', JSON.stringify(dados))
                Navigate('/inicio')
            } else{
                setMensagem('❌ Email ou senha incorretos !')
                console.log('Erro ao fazer login',dados)
            }
            
        } catch (erro) {
            console.error('Erro ao realizar login',erro)
            setMensagem(erro.message)
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


export default Aula15_login