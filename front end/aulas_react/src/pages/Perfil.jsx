import { use } from 'react'
import {Link, useParams} from 'react-router-dom'

function Perfil (){
   const {nome} = useParams ();
    return(
        <div>
            <h1> Esse é o perfil de {nome} </h1>
            {/*<a href='/'> </a> */}
            <Link to= '/'> Voltar para Principal</Link> 
        </div>
    )
}

export default Perfil 