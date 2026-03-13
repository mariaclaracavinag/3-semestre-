function Aula09_Nome({ texto, excluir }) {
  return (
    <div>
      <p>{texto}</p>

      <button onClick={excluir}>Excluir </button>

    </div>
  );
}

export default Aula09_Nome;