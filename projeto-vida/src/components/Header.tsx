import { Link } from 'react-router-dom'
import Logo from '../assets/images/icons/Logo.svg'
import '../styles/Header.scss'

export default function Header() {
  return (
    <header>
      
      <img src={Logo} alt="Logo" id='logo'/>
      
      <nav>
        <ul>
          <li>
            <Link to="/">Eventos</Link>
          </li>
          <li>
            <Link to="/">Cursos</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}