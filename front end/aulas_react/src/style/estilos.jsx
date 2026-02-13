/** @type {{ [key: string]: import('react').CSSProperties }} */
export  const estilos= {
    tituloModulo: {
        color: 'blue',
        fontWeight: 'bold'
    },
    descricaoModulo: {
        fontStlye: 'italic'
    },
    fundo : {
        backgroundColor : '#f3f4f6',
        minHeight: '100vh'
    }, 
    conteudo: {
        maxWidth: 1200,
        margin: '0 auto', 
        padding: 24
    }, 
    lista_aulas: {
        display: 'flex', 
        flexDirection: 'column', 
        gap:16
    }, 
    cardAula: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8, 
        width: '100%',
        boxShadow: 'opx 4px 6px rgba(0,0,0,0.1'
    },
    loginConteudo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, Helvetica, sans-serif'
  },

  cardLogin: {
    width: '360px',
    padding: '30px 25px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 20px rgba(0,0,0,0.08)'
  },

  imagem: {
    width: '200px',
    marginBottom: '25px'
    },
  titulo: {
    color: '#d60000',
    marginBottom: '25px',
    fontWeight: 'bold',
    fontFamily: 'roboto sans-serif'
  },

  label: {
    textAlign: 'left',
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
    fontFamily: 'roboto sans-serif'
  },
 input: {
    width: '100%',
    padding: '10px',
    marginBottom: '18px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'roboto, sans-serif'
  },

  botao: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
 containerF: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap", 
    justifyContent: "space-evenly",
    padding: "20px",
  },

  cardF: {
    width: "220px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px"
  },

  imagemF: {
    width: "100%",
    height: "320px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px"
  },
  textoF:{
    color: "#043d66"
  },

  botaoF: {
    marginTop: "auto",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    cursor: "pointer"
  }
};

export default estilos;

