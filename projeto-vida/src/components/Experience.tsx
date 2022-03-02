import smile from '../assets/images/icons/Smile.svg'
import capelo from '../assets/images/icons/Capelo.svg'
import cursor from '../assets/images/icons/Cursor.svg'
import '../styles/Experience.scss'

export default function Experience() {
  return (
    <section id="experience">
      <h2>A melhor experiência para você, <span>estudante!</span></h2>
      <h4>Temos benefícios exlcusivos comparados a outras plataformas</h4>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="card-title">
            <div className='experience-icon'>
              <img src={smile} alt="smile" />
            </div>
            <h5>Experiência personalizada</h5>
          </div>
          <p>Cursos personalizados para seu perfil para estudar como quiser</p>
        </div>
        <div className="experience-card">
          <div className="card-title">
            <div className='experience-icon'>
              <img src={capelo} alt="capelo" />
            </div>
            <h5>Experiência personalizada</h5>
          </div>        
          <p>Alinhamos seu planejamento de acordo com seus objetivos sem perder seu progresso nos estudos</p>
        </div>
        <div className="experience-card">
          <div className="card-title">
            <div className="experience-icon">
              <img src={cursor} alt="cursor" />
            </div>
            <h5>Experiência personalizada</h5>
          </div>          
          <p>Tenha acesso a vários cursos de linguagem e tecnologia e aumente seu conhecimento</p>
        </div>
      </div>
    </section>
  )
}