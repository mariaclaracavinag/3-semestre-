import { use } from 'react'
import {Link, useParams} from 'react-router-dom'

function filmes (){
   const {filme} = useParams ();
    return(
        <div>
            <h1> exibindo dados do filme {filme} </h1>
            {/*<a href='/'> </a> */}
            <Link to= '/'> Voltar para Principal</Link> 
        </div>
    )
}

export default filmes 