import Link from "next/link";
import type { EventItem } from "@/content/events";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/events/${event.slug}`} className="card event-card">
      <OptimizedImage
        src={event.posterImage}
        alt={`${event.title} event poster`}
        sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 960px) calc((100vw - 60px) / 2), 380px"
      />
      <div className="card-body">
        <span className="status">{event.status}</span>
        <h3>{event.title}</h3>
        <p className="meta">{event.city} / {event.date}</p>
      </div>
    </Link>
  );
}
