import Logo from '../../../assets/images/illustrations/logo.svg'
import '../../LandPage/Footer/Style/Footer.scss'

export default function Footer() {
  return (
    <footer id="footer">
      <img src={Logo}  alt="Logo" id='logo' />
      <p><span style={{marginRight:'1rem'}}>&copy;</span>  All Rights Reserved</p>
    </footer>
  )
}