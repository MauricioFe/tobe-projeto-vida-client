import Logo from '../../../assets/images/illustrations/logo.svg'
import '../../../styles/Footer/Footer.scss'

export default function Footer() {
  return (
    <footer id="footer">
      <img src={Logo} alt="Logo" id='logo' />
      <p>&copy;All Rights Reserved</p>
    </footer>
  )
}