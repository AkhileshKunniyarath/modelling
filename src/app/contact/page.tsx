import { site, whatsappUrl } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact", "Contact Hanaz Modelling through Instagram, WhatsApp, email, or location details.", "/contact");

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1 className="display">Begin the conversation.</h1>
          <p className="subheading">Use the live social and enquiry routes below. Client-specific phone, email, and map links can be added from environment variables and static content.</p>
          <div className="button-row">
            <a className="btn" href={site.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
            <a className="btn secondary" href={whatsappUrl()}>WhatsApp</a>
            {site.contactEmail ? <a className="btn secondary" href={`mailto:${site.contactEmail}`}>Email</a> : null}
          </div>
        </div>
      </section>
    </main>
  );
}
