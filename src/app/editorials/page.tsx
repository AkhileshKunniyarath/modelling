import { EditorialCard } from "@/components/cards/EditorialCard";
import { editorials } from "@/content/editorials";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Editorials", "Photoshoots, campaigns, and runway collections from Hanaz Modelling.", "/editorials");

export default function EditorialsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1 className="display">Editorials</h1>
          <p className="subheading">Photoshoots, campaigns, runway collections, and curated static galleries.</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {editorials.map((editorial) => (
            <EditorialCard key={editorial.slug} editorial={editorial} />
          ))}
        </div>
      </section>
    </main>
  );
}
