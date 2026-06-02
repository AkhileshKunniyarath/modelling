import { ModelCard } from "@/components/cards/ModelCard";
import { categories, models } from "@/content/models";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Models", "Curated model profiles for Hanaz Modelling.", "/models");

export default function ModelsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1 className="display">Models</h1>
          <p className="subheading">Static profile cards ready for client-approved model data, gallery images, and category filters.</p>
          <p className="meta">Categories: {categories.join(" / ")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container grid">
          {models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>
    </main>
  );
}
