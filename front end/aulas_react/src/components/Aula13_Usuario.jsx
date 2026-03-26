const Aula13_Usuario = ({ usuarioAtual, botaoExcluir }) => {
    if (!usuarioAtual) return
    return (
        <div style={estilos.card}>
            <p><strong>Nome:</strong> {usuarioAtual.nome}</p>
            <p><strong>Email:</strong> {usuarioAtual.email}</p>
            <button style={estilos.botao} onClick={()=> botaoExcluir(usuarioAtual.id_usuario)}>EXCLUIR</button>
        </div>
    )
}

const estilos = {
    card: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250,
        textAlign: 'center'
    },
};

export default Aula13_Usuario