import { notFound } from "next/navigation";
import { models } from "@/content/models";
import { collaborationUrl } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const model = models.find((item) => item.slug === params.slug);
  return pageMetadata(model?.name || "Model", model?.bio, `/models/${params.slug}`);
}

export default function ModelProfilePage({ params }: { params: { slug: string } }) {
  const model = models.find((item) => item.slug === params.slug);

  if (!model) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <img src={model.heroImage} alt={`${model.name} hero portrait`} />
          <div>
            <span className="eyebrow">{model.category}</span>
            <h1 className="display">{model.name}</h1>
            <p className="subheading">{model.bio}</p>
            <div className="info-list">
              <span><strong>Category:</strong> {model.category}</span>
              <span><strong>Location:</strong> {model.location}</span>
            </div>
            <a className="btn" href={collaborationUrl()}>
              Book or Collaborate
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container gallery-strip">
          {model.gallery.map((image, index) => (
            <div className="card image-card" key={image}>
              <img src={image} alt={`${model.name} gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
