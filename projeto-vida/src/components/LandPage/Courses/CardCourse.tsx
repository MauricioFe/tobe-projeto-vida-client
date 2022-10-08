import { Link } from "react-router-dom";
import '../../LandPage/Courses/Style/CardCourse.scss'
import '../../LandPage/Courses/Style/CardCourseResponsive.scss'
import Vector from '../../../assets/images/icons/Vector.svg'

export default function CardCourse({ title, description, id, index }:
  { title: String, description: String, id: Number, index: number }) {
  return (
    <>
      <div className={`card-carousel`}>
        <div id="icon-card-carousel">
          <img src={Vector} alt="Vector icon" />
        </div>
        <div className="description-card">
          <h3>
            {title}
          </h3>
          <p>{description}</p>
        </div>
        <Link id={id.toString()} to=" /">Acessar</Link>
      </div>
    </>
  )
}