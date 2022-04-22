import illustrationContacts from '../../../assets/images/illustrations/illustra_section-6.svg'
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
            <div className="input-block">
              <label htmlFor="name">Seu Nome</label>
              <input id="name" type="text" />
            </div>

            <div className="input-block">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </div>

            <div className="input-block">
              <label htmlFor="subject">Assunto</label>
              <input id="subject" type="text" />
            </div>

            <div className="input-block">
              <label htmlFor="message">Sua mensagem</label>
              <textarea id="message" />
            </div>
            <button className="confirm-button" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}