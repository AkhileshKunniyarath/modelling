import { EventCard } from "@/components/cards/EventCard";
import { events } from "@/content/events";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Events", "Upcoming and completed runway, casting, and fashion events from Hanaz Modelling.", "/events");

export default function EventsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Runway</span>
          <h1 className="display">Events</h1>
          <p className="subheading">Upcoming and completed event cards with city, date, status, poster imagery, and enquiry pathways.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
