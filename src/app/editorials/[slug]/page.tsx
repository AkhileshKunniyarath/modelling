import { notFound } from "next/navigation";
import { editorials } from "@/content/editorials";
import { pageMetadata } from "@/lib/metadata";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function generateStaticParams() {
  return editorials.map((editorial) => ({ slug: editorial.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const editorial = editorials.find((item) => item.slug === slug);
  return pageMetadata(editorial?.title || "Editorial", editorial?.description, `/editorials/${slug}`);
}

export default async function EditorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const editorial = editorials.find((item) => item.slug === slug);

  if (!editorial) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container profile-hero">
          <div className="profile-media">
            <OptimizedImage
              src={editorial.coverImage}
              alt={`${editorial.title} cover`}
              sizes="(max-width: 960px) calc(100vw - 40px), 480px"
              priority
            />
          </div>
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
              <OptimizedImage
                src={image}
                alt={`${editorial.title} gallery image ${index + 1}`}
                sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 960px) calc((100vw - 60px) / 2), 380px"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
