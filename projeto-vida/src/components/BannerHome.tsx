import { Link } from "react-router-dom";
import pointsImg from '../assets/images/illustrations/points.svg'
import allUnderControlImg from '../assets/images/illustrations/all_under_control.svg'
import '../styles/BannerHome.scss'
import '../styles/BannerHomeResponsive.scss'

export default function BannerHome() {
  return (
    <section id="banner-home">
      <div id="content-banner-home">
        <div className="content-banner-action">
          <h1>Mergulhe em conhecimento com os melhores <span>cursos</span></h1>
          <h4>O melhor material está aqui de forma fácil, rápida e concisa para você alavancar!</h4>
          <Link to="/">Login</Link>
        </div>
        <div className="content-banner-img">
          <img src={allUnderControlImg} alt="" />
        </div>
      </div>
      <img className="img-points-1" src={pointsImg} alt="" />
      <img className="img-points-2" src={pointsImg} alt="" />
    </section>
  )
}