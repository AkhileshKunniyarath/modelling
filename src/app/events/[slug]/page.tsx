import { notFound } from "next/navigation";
import { events } from "@/content/events";
import { whatsappUrl } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);
  return pageMetadata(event?.title || "Event", event?.description, `/events/${params.slug}`);
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <img src={event.posterImage} alt={`${event.title} poster`} />
          <div>
            <span className="eyebrow">{event.status}</span>
            <h1 className="display">{event.title}</h1>
            <p className="subheading">{event.description}</p>
            <div className="info-list">
              <span><strong>City:</strong> {event.city}</span>
              <span><strong>Date:</strong> {event.date}</span>
            </div>
            <a className="btn" href={event.externalCtaUrl || whatsappUrl(`Hello Hanaz Modelling, I want details for ${event.title}.`)}>
              Enquire
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
