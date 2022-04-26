import eventIcon from '../../../assets/images/icons/ic_event.svg'
import '../../LandPage/EventSection/Style/EventCard.scss'
import '../../LandPage/EventSection/Style/EventCardResponsive.scss'

export default function EventCard({ title, description, date }: { title: string, description: string, date: string }) {
    return (
        <div id="event-card-container">
            <div id="date-time-event">
                <span>{date}</span>
            </div>
            <div id="event-card">
                <div id="event-card-icon">
                    <img src={eventIcon} alt="event" />
                </div>
                <div id="event-card-content">
                    <h2>{title}</h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}