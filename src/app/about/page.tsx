import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "Brand story, values, and modelling approach for Hanaz Modelling.", "/about");

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Brand Story</span>
          <h1 className="display">Elegance, confidence, presence.</h1>
          <p className="subheading">
            Hanaz Modelling is shaped as a premium fashion-modelling presence: selective, visual, and built around the aspirational force of runway and editorial storytelling.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container statement-grid">
          <div>
            <h2 className="heading">A modelling experience with a cinematic point of view.</h2>
            <p className="subheading">
              The brand connects aspiring talent, collaborators, photographers, event teams, and fashion audiences through carefully curated visuals and direct enquiry pathways.
            </p>
          </div>
          <div className="framed-media">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85" alt="Hanaz Modelling brand mood" />
          </div>
        </div>
      </section>
    </main>
  );
}
