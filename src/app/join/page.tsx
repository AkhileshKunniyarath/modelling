import { JoinApplicationForm } from "@/components/forms/JoinApplicationForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Join Hanaz", "Apply as a model through the approved Hanaz Modelling external application flow.", "/join");

export default function JoinPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Apply</span>
          <h1 className="display">Join Hanaz</h1>
          <p className="subheading">A clear pathway for aspiring models to submit profile details, portfolio photographs, location, and availability through WhatsApp or an approved external form.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container join-form-panel">
          <div className="join-form-intro">
            <span className="eyebrow">Application Form</span>
            <h2 className="heading">Fill your details. Send on WhatsApp.</h2>
            <p className="subheading">
              No backend or database is used. Your information is formatted locally in the browser and opened directly in WhatsApp for you to send.
            </p>
          </div>
          <JoinApplicationForm />
        </div>
      </section>
      <section className="section">
        <div className="container steps">
          <div className="step"><h3>Prepare</h3><p className="meta">Keep recent portraits, full-length images, basic measurements, location, and contact details ready.</p></div>
          <div className="step"><h3>Submit</h3><p className="meta">Use the approved application link or WhatsApp flow configured for launch.</p></div>
          <div className="step"><h3>Review</h3><p className="meta">The Hanaz team can review fit for runway, editorial, commercial, or event opportunities.</p></div>
        </div>
      </section>
    </main>
  );
}
