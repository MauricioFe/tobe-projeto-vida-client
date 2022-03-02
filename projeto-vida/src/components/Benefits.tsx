import illustra1 from '../assets/images/illustrations/benefit_illustra1.svg'
import illustra2 from '../assets/images/illustrations/benefit_illustra2.svg'
import illustra3 from '../assets/images/illustrations/benefit_illustra3.svg'
import '../styles/Benefits.scss'

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="benefit">
        <div className="description">
          <h2>No seu tempo, do básico ao avançado</h2>
          <p>Temos benefícios exclusivos comparados a outras plataformas</p>
        </div>
        <img src={illustra1} alt="Chart illustration" />
      </div>
      <div className="benefit">
        <div className="description">
          <h2>No seu tempo, do básico ao avançado</h2>
          <p>Temos benefícios exclusivos comparados a outras plataformas</p>
        </div>
        <img src={illustra2} alt="Media illustration" />
      </div>
      <div className="benefit">
        <div className="description">
          <h2>No seu tempo, do básico ao avançado</h2>
          <p>Temos benefícios exclusivos comparados a outras plataformas</p>
        </div>
        <img src={illustra3} alt="Illustration of everything under control" />
      </div>
    </section>
  )
}