import { useState } from "react";
import Aula09_nome from "./Aula09_nome";

const Aula09_ListaNomes = () => {

  const [listaPresenca, setListaPresenca] = useState([]);
  const [nome, setNome] = useState("");

  function botaoAdicionar() {
  setListaPresenca([...listaPresenca, nome]);
  setNome("");
}
function botaoLimpar() {
    setListaPresenca([])
}

  function botaoExcluir(nomeExcluir) {
    const novaLista = listaPresenca.filter(
      (item) => item !== nomeExcluir
    );
    setListaPresenca(novaLista);
  }

  return (
    <div>

      <h1>Lista de Presença do Churrasco</h1>

      <input value={nome} onChange={(e) => setNome(e.target.value)}placeholder="Digite o nome e o seu alimento"
      />

      <button onClick={botaoAdicionar}>Adicionar  </button>

      {listaPresenca.map((nome, index) => (
        <Aula09_nome key={index} texto={nome} excluir={() => botaoExcluir(nome)}
        />
      ))}
      <button onClick={botaoLimpar}>Limpar</button>
<hr/> 
    </div>
  );
};

export default Aula09_ListaNomes;
