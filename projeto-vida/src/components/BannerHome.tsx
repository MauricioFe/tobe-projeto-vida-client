import { Link } from "react-router-dom";
import '../styles/BannerHome.scss'

export default function BannerHome() {
  return (
    <section id="banner-home">
      <div id="content-banner-home">
        <h1>Mergulhe em conhecimento com os melhores <span>cursos</span></h1>
        <h4>O melhor material está aqui de forma fácil, rápida e concisa para você alavancar!</h4>
        <Link to="/">Login</Link>
      </div>
    </section> 
  )
}