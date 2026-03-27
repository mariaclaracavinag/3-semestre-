import {Link} from 'react-router-dom'

function Detalhes (){
    return(
        <div>
            <h1> Mais informções </h1>
            {/*<a href='/'> </a> */}
            <Link to= '/Contato'> entre em contato </Link> 
        </div>
    )
}

export default Detalhes 