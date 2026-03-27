import { useEffect, useState } from "react"
import Aula13_Usuario from "./Aula13_Usuario"
import { enderecoServidor } from '../utils';
const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function botaoAdicionar() {
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        }
        try {
            //CREATE do nosso CRUD
            //Método POST para criar um novo produto
            const resposta = await fetch('${enderecoServidor}/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // O corpo da requisição contém o produto em formato JSON
                body: JSON.stringify(novoUsuario),
            });
            if (!resposta.ok) {
                throw new Error('Erro ao adicionar produto: ' + resposta.statusText);
            }
            buscarUsuarios(); //Buscando dados novamente para atualizar a tela
            limparCamposFormulario(); // Limpa os campos do formulário após a criação
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
        }
    }
    async function botaoExcluir(id_usuario) {
        if(!window.confirm ('voce tem certeza que deseja excluir?')) return
        try {
            //CREATE do nosso CRUD
            //Método POST para criar um novo produto
            const resposta = await fetch(`${enderecoServidor}/usuarios/${id_usuario}`, {
                method: 'DELETE',

        
            });
            if (!resposta.ok) {
                throw new Error('Erro ao adicionar ussuario: ' + resposta.statusText);
            }
            buscarUsuarios(); //Buscando dados novamente para atualizar a tela
            limparCamposFormulario(); // Limpa os campos do formulário após a criação
        } catch (error) {
            console.error('Erro ao adicionar usurio:', error);
        }
    }
    function limparCamposFormulario() {
        setNome('');
        setEmail('');
        setSenha('');

    }

    //Função para buscar os dados através da API
    async function buscarUsuarios() {
        try {
            //Read do nosso CRUD
            //Método GET para buscar os dados não precisa informar o método
            const resposta = await fetch(`${enderecoServidor}/usuarios`);
            const dados = await resposta.json();
            setListaUsuarios(dados);
        } catch (erro) {
            console.error('Erro ao carregar os dados', erro.message);
        }
    }
    //Ao carregar o componente, chama a funcao
    useEffect(() => {
        buscarUsuarios();
    }, []);

    return (
        <div>
            <h1>Cadastro de Usuários</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                <input type="email" placeholder="Email" style={estilos.inputs} value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <input type="password" placeholder="Senha" style={estilos.inputs} value={senha}
                    onChange={(event) => setSenha(event.target.value)} />
                <button style={estilos.botao} onClick={botaoAdicionar}>Adicionar Usuário</button>
                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaUsuarios.map((usuario, pos) => (
                            <Aula13_Usuario key={pos} usuarioAtual={usuario}  botaoExcluir= {botaoExcluir}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
const estilos = {
    cadastro: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputs: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
    },
    card: {
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        minWidth: "200px",
    }
}
export default Aula13_CRUD_Usuarios