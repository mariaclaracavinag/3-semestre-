import {Link} from 'react-router-dom'

function Inicio (){
    return(
        <div>
            <h1> Entre em contato </h1>
            {/*<a href='/'> </a> */}
            <Link to= '/inicio'> Volte ao inicio </Link> 
        </div>
    )
}

export default Inicio 