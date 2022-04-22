import { Link } from "react-router-dom";
import '../../../styles/Courses/CardCourse.scss'
import '../../../styles/Courses/CardCourseResponsive.scss'

export default function CardCourse({ title, description, id, index }:
  { title: String, description: String, id: Number, index: number }) {
  return (
    <>
      <div className={`card-carousel`}>
        <div id="icon-card-carousel">
          <img src="" alt="" />
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