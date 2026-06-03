import Link from "next/link";
import type { Editorial } from "@/content/editorials";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function EditorialCard({ editorial }: { editorial: Editorial }) {
  return (
    <Link href={`/editorials/${editorial.slug}`} className="card editorial-card">
      <OptimizedImage
        src={editorial.coverImage}
        alt={`${editorial.title} editorial cover`}
        sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 960px) calc((100vw - 60px) / 2), 380px"
      />
      <div className="card-body">
        <span className="status">{editorial.theme}</span>
        <h3>{editorial.title}</h3>
        <p className="meta">{editorial.description}</p>
      </div>
    </Link>
  );
}
