import '../styles/BannerEvents.scss'
import EventCard from './EventCard'

export default function BannerEvents () {
  return (
    <section id="banner-event">
      <div id="title-event">
        <h2>Fique ligado nos nossos<br/><span> eventos</span></h2>
      </div>
      <div id="event-list-cards">
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </section>
  )
}