import { CollaborateEnquiryForm } from "@/components/forms/CollaborateEnquiryForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Collaborate", "Booking and partnership enquiries for brands, photographers, designers, and event organisers.", "/collaborate");

const collaborationTypes = [
  {
    title: "Runway Shows",
    text: "Model coordination for fashion shows, designer showcases, pageants, launches, and stage-led events."
  },
  {
    title: "Brand Campaigns",
    text: "Talent support for lookbooks, social campaigns, product shoots, and luxury brand visuals."
  },
  {
    title: "Editorial Shoots",
    text: "Portfolio-ready models for photographers, stylists, publications, makeup teams, and creative concepts."
  },
  {
    title: "Casting Support",
    text: "Curated shortlisting for brands and event organisers who need the right faces for a specific brief."
  }
];

const process = ["Share brief", "Confirm talent need", "Plan shoot or event", "Coordinate execution"];

export default function CollaboratePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Partnerships</span>
          <h1 className="display">Collaborate with Hanaz.</h1>
          <p className="subheading">For fashion brands, photographers, designers, venues, show producers, and event organisers seeking a premium modelling partner.</p>
          <a className="btn" href="#collaboration-enquiry">Start Enquiry</a>
        </div>
      </section>

      <section className="section" id="collaboration-enquiry">
        <div className="container">
          <span className="eyebrow">Collaboration Types</span>
          <h2 className="heading">Built for fashion teams, brands, and event producers.</h2>
          <div className="collab-grid">
            {collaborationTypes.map((item) => (
              <div className="collab-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container collab-feature">
          <div>
            <span className="eyebrow">Why Hanaz</span>
            <h2 className="heading">A polished visual partner, not just a talent list.</h2>
          </div>
          <div className="collab-feature-list">
            <p>Premium black-and-gold brand positioning suited for fashion, lifestyle, events, and aspirational campaigns.</p>
            <p>Model profiles and event stories can be curated for runway, editorial, commercial, and social-first requirements.</p>
            <p>Backendless enquiry flow keeps communication fast: submit the brief, continue on WhatsApp, and confirm the next step.</p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container collab-process">
          {process.map((item, index) => (
            <div className="process-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container join-form-panel">
          <div className="join-form-intro">
            <span className="eyebrow">Enquiry Form</span>
            <h2 className="heading">Send your collaboration brief on WhatsApp.</h2>
            <p className="subheading">
              Fill the key project details and continue directly to WhatsApp with a ready-to-send message.
            </p>
          </div>
          <CollaborateEnquiryForm />
        </div>
      </section>
    </main>
  );
}
