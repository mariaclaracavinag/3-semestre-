import {Link} from 'react-router-dom'

function Inicio (){
    return(
        <div>
            <h1> Bem-vindo </h1>
            {/*<a href='/'> </a> */}
            <Link to= '/Detalhes'> Veja mais detalhes </Link> 
        </div>
    )
}

export default Inicio 