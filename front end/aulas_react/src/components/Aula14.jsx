import{estilos} from "../style/Estilos"
import {Link, Navigate, useNavigate} from 'react-router-dom'

const Aula14 = () => {
    const Navigate = useNavigate();
    return (
        <div style={estilos.cardAula}>
            <h2> Aula 14 - React Router - Navegação em React </h2>
            <h3> Biblioteca que permite criar e gerenciar rotas em React</h3>
            <hr/>
            <h3> Navegação com links do React Router </h3>
            <Link to='/'> Página Principal </Link>
            <br/>
            <Link to='/sobre'> Sobre Maria Clara </Link>
             <br/>
              <Link to='*'> Pagina Inexistente </Link>
              <br/> 
              <h3>Naveação com progamação utilizando o useNavigate</h3>
              <button onClick={() =>Navigate("/sobre")}>Sobre Maria Clara</button>

              <hr/>
              <h3> Rota dinâmica com useParms</h3>
              <button onClick={() =>Navigate("/perfil/Gabi")}>Perfil da Gabi</button>
              <hr/> 
              <h3>Entre aqui </h3>
              <button onClick={() =>Navigate("/inicio")}>inicio</button>
              <h3>Escolha um Filme </h3>
              <button onClick={() =>Navigate("/filmes")}>filmes</button>

        </div>
    )
}
export default Aula14

