import { notFound } from "next/navigation";
import { editorials } from "@/content/editorials";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return editorials.map((editorial) => ({ slug: editorial.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const editorial = editorials.find((item) => item.slug === params.slug);
  return pageMetadata(editorial?.title || "Editorial", editorial?.description, `/editorials/${params.slug}`);
}

export default function EditorialPage({ params }: { params: { slug: string } }) {
  const editorial = editorials.find((item) => item.slug === params.slug);

  if (!editorial) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <img src={editorial.coverImage} alt={`${editorial.title} cover`} />
          <div>
            <span className="eyebrow">{editorial.theme}</span>
            <h1 className="display">{editorial.title}</h1>
            <p className="subheading">{editorial.description}</p>
            <p className="meta">{editorial.year}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container gallery-strip">
          {editorial.gallery.map((image, index) => (
            <div className="card image-card" key={image}>
              <img src={image} alt={`${editorial.title} gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
