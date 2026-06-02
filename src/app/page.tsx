import Link from "next/link";
import { Preloader } from "@/components/animations/Preloader";
import { EditorialCard } from "@/components/cards/EditorialCard";
import { EventCard } from "@/components/cards/EventCard";
import { ModelCard } from "@/components/cards/ModelCard";
import { editorials } from "@/content/editorials";
import { events } from "@/content/events";
import { models } from "@/content/models";
import { applicationUrl, collaborationUrl, site } from "@/content/site";

export default function Home() {
  const featuredModels = models.filter((model) => model.featured).slice(0, 3);

  return (
    <main>
      <Preloader />
      <section
        className="hero"
        style={{
          "--hero-image":
            "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85')"
        } as React.CSSProperties}
      >
        <div className="container hero-content">
          <span className="eyebrow">Premium Modelling House</span>
          <h1 className="display">Hanaz Modelling</h1>
          <p className="subheading">
            A black-and-gold editorial experience for runway talent, portfolio stories, fashion events, and brand collaborations.
          </p>
          <div className="button-row">
            <a className="btn" href={applicationUrl()}>
              Join Hanaz
            </a>
            <Link className="btn secondary" href="/editorials">
              Explore Work
            </Link>
          </div>
          <div className="hero-meta">
            <span>Runway</span>
            <span>Editorial</span>
            <span>Campaigns</span>
          </div>
        </div>
      </section>

      <section className="home-marquee" aria-label="Hanaz Modelling highlights">
        <div className="home-marquee-track">
          <div className="home-marquee-group">
            {["Runway", "Editorial", "Campaigns", "Portfolios", "Fashion Events", "Collaborations"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="home-marquee-group" aria-hidden="true">
            {["Runway", "Editorial", "Campaigns", "Portfolios", "Fashion Events", "Collaborations"].map((item) => (
              <span key={`${item}-repeat`}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight brand-intro-section">
        <div className="container brand-intro">
          <div className="brand-emblem" aria-hidden="true">
            <img src={site.logo} alt="" />
          </div>
          <div className="brand-intro-copy">
            <span className="eyebrow">The Brand</span>
            <h2 className="heading">A premium stage for confident new faces.</h2>
            <p className="subheading">
              Hanaz Modelling is built for runway presence, editorial storytelling, fashion campaigns, and event-led talent showcases. The brand brings aspiring models, designers, photographers, and collaborators into a refined black-and-gold visual world shaped around elegance, confidence, and opportunity.
            </p>
            <div className="brand-points">
              <span>Model Portfolios</span>
              <span>Runway Events</span>
              <span>Editorial Campaigns</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container statement-grid">
          <div>
            <span className="eyebrow">Brand Statement</span>
            <h2 className="heading">Editorial, not corporate. Luxury through restraint.</h2>
            <p className="subheading">
              Hanaz Modelling presents talent with cinematic pacing, refined spacing, and image-led storytelling. Every section is designed to move visitors toward a clear next step: follow, apply, enquire, or collaborate.
            </p>
          </div>
          <div className="framed-media">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
              alt="Editorial fashion portrait for Hanaz Modelling brand story"
            />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <span className="eyebrow">Featured Models</span>
          <h2 className="heading">Curated Visuals</h2>
          <div className="gallery-strip" style={{ marginTop: 32 }}>
            {featuredModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div className="framed-media">
            <img src={events[0].posterImage} alt="Runway event highlight" />
          </div>
          <div className="split-copy">
            <span className="eyebrow">Runway Moments</span>
            <h2 className="heading">{events[0].title}</h2>
            <p className="subheading">{events[0].description}</p>
            <Link className="btn" href="/events">
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <span className="eyebrow">Editorial Showcase</span>
          <h2 className="heading">Magazine-Led Stories</h2>
          <div className="mosaic" style={{ marginTop: 32 }}>
            {editorials.map((editorial) => (
              <EditorialCard key={editorial.slug} editorial={editorial} />
            ))}
          </div>
        </div>
      </section>

      <section className="section apply-section">
        <div className="container apply-panel">
          <div className="apply-copy">
            <span className="eyebrow">Apply</span>
            <h2 className="heading">Ready to be seen by Hanaz?</h2>
            <p className="subheading">
              Start with your best portraits, full-length photos, location, and a short introduction. The application path keeps submissions simple while giving the team enough context to understand your runway, editorial, or campaign potential.
            </p>
            <div className="button-row">
              <a className="btn" href={applicationUrl()}>
                Apply Now
              </a>
              <Link className="btn secondary" href="/join">
                View Requirements
              </Link>
            </div>
          </div>
          <div className="apply-steps" aria-label="Application steps">
            <div className="apply-step">
              <span>01</span>
              <h3>Prepare</h3>
              <p>Portraits, full-length images, basic profile details, and current city.</p>
            </div>
            <div className="apply-step">
              <span>02</span>
              <h3>Submit</h3>
              <p>Apply through WhatsApp or the approved external form once client details are connected.</p>
            </div>
            <div className="apply-step">
              <span>03</span>
              <h3>Review</h3>
              <p>Profiles can be considered for runway, editorial, commercial, and event opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-grid">
          <div>
            <span className="eyebrow">Collaborate</span>
            <h2 className="heading">Campaigns, launches, events, and runway teams.</h2>
            <p className="subheading">For brands, photographers, designers, and event teams looking for a premium modelling partner.</p>
          </div>
          <Link className="btn secondary" href="/collaborate">
            Start Enquiry
          </Link>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <span className="eyebrow">Instagram</span>
          <h2 className="heading">{site.handle}</h2>
          <div className="gallery-strip" style={{ marginTop: 32 }}>
            {editorials.flatMap((item) => item.gallery).slice(0, 3).map((image, index) => (
              <a key={image} className="card image-card" href={site.instagramUrl} target="_blank" rel="noreferrer">
                <img src={image} alt={`Curated Instagram-style Hanaz Modelling visual ${index + 1}`} />
                <div className="card-caption">
                  <h3>Follow Hanaz</h3>
                  <p>{site.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
