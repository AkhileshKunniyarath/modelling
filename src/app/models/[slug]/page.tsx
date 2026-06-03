import { notFound } from "next/navigation";
import { models } from "@/content/models";
import { collaborationUrl } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);
  return pageMetadata(model?.name || "Model", model?.bio, `/models/${slug}`);
}

export default async function ModelProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = models.find((item) => item.slug === slug);

  if (!model) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <div className="profile-media">
            <OptimizedImage
              src={model.heroImage}
              alt={`${model.name} hero portrait`}
              sizes="(max-width: 960px) calc(100vw - 40px), 480px"
              priority
            />
          </div>
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
            <div className="card image-card" key={`${image}-${index}`}>
              <OptimizedImage
                src={image}
                alt={`${model.name} gallery image ${index + 1}`}
                sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 960px) calc((100vw - 60px) / 2), 380px"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
