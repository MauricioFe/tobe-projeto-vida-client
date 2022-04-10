import eventIcon from '../../../assets/images/icons/ic_event.svg'
import '../../../styles/EventSection/EventCard.scss'
import '../../../styles/EventSection/EventCardResponsive.scss'

export default function EventCard() {
    return (
        <div id="event-card-container">
            <div id="date-time-event">
                <span>Sex 10/03 14:00</span>
            </div>
            <div id="event-card">
                <div id="event-card-icon">
                    <img src={eventIcon} alt="event" />
                </div>
                <div id="event-card-content">
                    <h2>Computação cognitiva</h2>
                    <p>
                        Workshop voltado para inteligência artificial que explicará como elas mudaram o mercado de trabalho
                    </p>
                </div>
            </div>
        </div>
    )
}