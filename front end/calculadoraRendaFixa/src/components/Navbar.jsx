import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <header className='navbar'>
    <div className='navbar-conteudo'>
        {/* logo / titulo */}
        <Link to='/' className='navbar-logo'>📈 Renda Fixa</Link>

        {/* Liks de navegação do menu */}
        <nav className='navbar-links'> 
        <Link to='/Calculadora' className='navbar-logo'>🧮Calculadora</Link>
        <Link to='/Sobre' className='navbar-logo'>ℹ️Sobre</Link>
        </nav>
    </div>
    </header>
  )
}

export default Navbar