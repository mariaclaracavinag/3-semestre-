import './app.css'; 

const App = () => {
  return (
    <div className="container">
      <h1 className="titulo">DADOS DO ALUNO</h1>

      <p className="texto">Maria Clara Pires Cavina Gama</p>
      <p className="texto">RM: 3118</p>
      <p className="texto">ESCOLA: SESI 025</p>
      <p className="texto">TURMA: 3° ano B</p>

      <img
        className="imagem"
        src="https://i.pinimg.com/originals/45/bf/82/45bf82cc5bc8e8919586ea072f0567c8.gif"
        alt=""
      />

      <ul className="lista">
        <li className="item">Matemática</li>
        <li className="item">Biologia</li>
        <li className="item">Língua Portuguesa</li>
        <li className="item">Química</li>
        <li className="item">Física</li>
        <li className="item">História</li>
        <li className="item">Geografia</li>
        <li className="item">Inglês</li>
      </ul>
    </div>
  );
};

export default App;
