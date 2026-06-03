import { notFound } from "next/navigation";
import { events } from "@/content/events";
import { whatsappUrl } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return pageMetadata(event?.title || "Event", event?.description, `/events/${slug}`);
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <div className="profile-media">
            <OptimizedImage
              src={event.posterImage}
              alt={`${event.title} poster`}
              sizes="(max-width: 960px) calc(100vw - 40px), 480px"
              priority
            />
          </div>
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
