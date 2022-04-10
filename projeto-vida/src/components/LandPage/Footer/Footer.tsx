import Logo from '../assets/images/icons/Logo.svg'
import '../styles/Footer.scss'

export default function Footer() {
  return (
    <footer id="footer">
      <img src={Logo} alt="Logo" id='logo' />
      <p>&copy;All Rights Reserved</p>
    </footer>
  )
}