import { Link } from 'react-router-dom'
import Logo from '../assets/images/icons/Logo.svg'
import '../styles/Header.scss'

export default function Header() {
  return (
    <header>

      <img src={Logo} alt="Logo" id='logo' />

      <nav>
        <ul>
          <li>
            <a href="#banner-event">Eventos</a>
          </li>
          <li>
            <a href="#carousel">Cursos</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}