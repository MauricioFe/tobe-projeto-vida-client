import React, { useState } from 'react'
import './style.scss'
import { ReactComponent as Logo } from '../../assets/images/illustrations/logo.svg'

interface formDataProps {
  email: string | number
  password: string | number
}

function Login() {
  const [formData, setFormData] = useState<formDataProps>({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    console.log(formData, 'alo')
  }
  return (
    <main className='wrapper'>
      <div className='containerLogin'>
        <div className='loginWhiteForm'>
          <Logo width='80px' height='110px' />
          <div>
            <h2>Login</h2>
            <h3>Acesse sua conta de forma fácil!</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className='formSection'
          >
            <label htmlFor='email'>E-mail</label>
            <input
              type='email'
              className='emailInput'
              placeholder='E-mail'
              id='email'
              value={email}
              onChange={handleChange}
            />
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              className='passwordInput'
              placeholder='Senha'
              id='password'
              value={password}
              onChange={handleChange}
            />
            <button type='submit' className='buttonForm'>
              Entrar
            </button>
          </form>
        <p>@ 2022 All Rights Reserved</p>
        </div>
        <div className='loginBlackForm'>
          <h1>IMG</h1>
        </div>
      </div>
    </main>
  )
}

export default Login
