import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"

function App (){
    return(
      <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Principal/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/perfil/:nome" element={<Perfil/>}/>
        <Route path="/filmes/:filme" element={<Filme/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/detalhes" element={<Detalhes/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    )


}

export default App 