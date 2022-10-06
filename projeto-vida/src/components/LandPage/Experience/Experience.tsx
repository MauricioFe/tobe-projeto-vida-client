import smile from '../../../assets/images/icons/ic_emoji_smile.svg'
import capelo from '../../../assets/images/icons/ic_capelo.svg'
import cursor from '../../../assets/images/icons/ic_cursor.svg'
import '../../LandPage/Experience/Style/Experience.scss'
import '../../LandPage/Experience/Style/ExperienceResponsive.scss'

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
            <h5>Planeje seus estudos</h5>
          </div>        
          <p>Alinhamos seu planejamento de acordo com seus objetivos sem perder seu progresso nos estudos</p>
        </div>
        <div className="experience-card">
          <div className="card-title">
            <div className="experience-icon">
              <img src={cursor} alt="cursor" />
            </div>
            <h5>Variedade de cursos</h5>
          </div>          
          <p>Tenha acesso a vários cursos de linguagem e tecnologia e aumente seu conhecimento</p>
        </div>
      </div>
    </section>
  )
}