import illustrationContacts from '../../../assets/images/illustrations/illustra_section-6.svg'
import Button from '../../Generic/Buttons/Button'
import InputText from '../../Generic/Inputs/InputText'
import TextArea from '../../Generic/Inputs/TextArea'
import './Style/Contacts.scss'
import './Style/ContactsResponsive.scss'

export default function Contacts() {
  return (
    <section id="contacts">
      <h2 className='title-contacts'>Ficou com alguma dúvida?<br />Entre em contato <span>conosco</span></h2>
      <div className="contact">
        <img src={illustrationContacts} alt="Contact us illustration" />
        <div className="form-contact">
          <form>
            <InputText
              name='name'
              id='name'
              label='Seu Nome'
              type={"text"}
            />

            <InputText
              name='email'
              id='email'
              label='E-mail'
              type={"email"}
            />

            <InputText
              name='phone'
              id='phone'
              label='Celular'
              type={"tel"}
            />

            <InputText
              name='subject'
              id='subject'
              label='Assunto'
              type={"text"}
            />

            <TextArea
              name='message'
              id='message'
              label='Sua Mensagem'
              type={"text"}
            />
            <Button
              className='confirm-button'
              label="Enviar"
              type={"submit"}
            />
          </form>
        </div>
      </div>
    </section>
  )
}