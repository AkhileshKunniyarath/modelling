import Link from "next/link";
import type { EventItem } from "@/content/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/events/${event.slug}`} className="card event-card">
      <img src={event.posterImage} alt={`${event.title} event poster`} />
      <div className="card-body">
        <span className="status">{event.status}</span>
        <h3>{event.title}</h3>
        <p className="meta">{event.city} / {event.date}</p>
      </div>
    </Link>
  );
}
