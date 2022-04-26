import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/illustrations/logo.svg'
import menu from '../../../assets/images/icons/ic_action_menu.svg'
import '../../LandPage/Header/Style/Header.scss'
import '../../LandPage/Header/Style/HeaderResponsive.scss'
import { useState } from 'react';
import MenuMobile from './MenuMobile'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header>
      <img src={Logo} alt="Logo" id='logo' />
      <div className={`menu-icon`}  onClick={() => {setShowMenu(!showMenu); console.log(showMenu)}}>
        <img src={menu} alt="menu" id="menu" />
      </div>
      <MenuMobile showMenu={showMenu} setShowMenu={setShowMenu} />
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
    </header >
  )
}