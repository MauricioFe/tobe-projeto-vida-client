import EventCard from './EventCard'
import '../../LandPage/EventSection/Style/BannerEvents.scss'
import '../../LandPage/EventSection/Style/BannerEventsResponsive.scss'

export default function BannerEvents() {
  interface Event {
    id: number,
    title: string,
    description: string,
    date: string
  }
  const eventList: Array<Event> = [
    {
      id: 1,
      title:"Semana do empreendedorismo",
      description:"Oferecemos aos alunos a semana do empreendedor para vivênciarem na prática as rotinas empresariais, a partir de workshops e dinâmicas",
      date:"SEG 04/07 14:00 até SEX 10/03 17:00",
    },
    {
      id: 1,
      title:"Computação cognitiva",
      description:"Workshop voltado para inteligência artificial que explicará como elas mudaram o mercado de trabalho",
      date:"SEX 15/07 14:00"
    },
    {
      id: 1,
      title:"Imersão inglês",
      description:"Uma semana de workshop com conteúdos, palestras e jogos voltados para o aprendizado do ingês",
      date:"SEX 18/07 08:00"
    }
  ]

  return (
    <section id="banner-event">
      <div id="title-event">
        <h2>Fique ligado nos nossos<br /><span> eventos</span></h2>
      </div>
      <div id="event-list-cards">
        {
          eventList.map((item,_) =>{
            return <EventCard title={item.title} description={item.description} date={item.date} />
          })
        }
      </div>
    </section>
  )
}