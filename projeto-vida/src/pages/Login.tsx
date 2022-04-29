import Logo from '../assets/images/illustrations/logo.svg'
import allUnderControlImg from '../assets/images/illustrations/all_under_control.svg'
import Button from '../components/Generic/Buttons/Button'
import InputText from '../components/Generic/Inputs/InputText'
import '../styles/login/login.scss'
import '../styles/login/loginResponsive.scss'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <>
      <main id='login'>
        <div className="form-section">
          <div className="header-login">
            <Link to="/">
              Voltar
            </Link>
            <img src={Logo} alt="Logo" id='logo' />
          </div>
          <div className="title-login">
            <h3>Login</h3>
            <span>Acesse sua conta de forma fácil!</span>
          </div>
          <form>
            <InputText
              name='email'
              id='email'
              label='E-mail'
              type={"email"}
            />
            <InputText
              name='password'
              id='password'
              label='Senha'
              type={"password"}
            />

            <Button
              label="Entrar"
              className='confirm-button'
            />
          </form>
          <div className="copy-section">
            <span>&copy;2022 All Rights Reserved</span>
          </div>
        </div>
        <div className="illustration-section">
          <div className="title-login-illustration">
            <h3>Mergulhe em conhecimento com os melhores <span>Cursos</span> </h3>
          </div>
          <div className="illustration">
            <img src={allUnderControlImg} />
          </div>
        </div>
      </main>
    </>
  )
}