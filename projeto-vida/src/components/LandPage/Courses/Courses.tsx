import { Link } from "react-router-dom";
import '../../../styles/Courses/Courses.scss'
import '../../../styles/Courses/CoursesResponsive.scss'

export default function Courses() {
  return (
    <section id="carousel">
      <div className="container">
        <div id="carousel-presentation">
          <div id="description">
            <h2>Quais cursos a ToBe <span>oferece?</span></h2>
            <h4>Temos uma variedade de cursos para você</h4>
          </div>
        </div>

        <div className="cards-carousel">

          <div className="card-carousel">
            <div id="icon-card-carousel">
              <img src="" alt="" />
            </div>
            <div className="description-card">
              <h3>
                Liderança
              </h3>
              <p>Neste curso você desenvolverá as habilidades necessárias para liderar nesse cenário em que a única constante é a mudança.</p>
            </div>
            <Link to=" /">Acessar</Link>
          </div>

          <div className="card-carousel">
            <div id="icon-card-carousel">
              <img src="" alt="" />
            </div>
            <div className="description-card">
              <h3>
                Oratória
              </h3>
              <p>Aprenda a se expressar de forma clara e objetiva, melhorando sua comunicação interpessoal e, consequentemente, se destacando educacional e profissionalmente..</p>
            </div>
            <Link to=" /">Acessar</Link>
          </div>
        </div>
      </div>
      <div id="slider">
        <span id="button-slide-1" className="active"></span>
        <span id="button-slide-2"></span>
        <span id="button-slide-3"></span>
        <span id="button-slide-4"></span>
      </div>
    </section>
  )
}