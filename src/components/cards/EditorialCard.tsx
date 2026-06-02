import Link from "next/link";
import type { Editorial } from "@/content/editorials";

export function EditorialCard({ editorial }: { editorial: Editorial }) {
  return (
    <Link href={`/editorials/${editorial.slug}`} className="card editorial-card">
      <img src={editorial.coverImage} alt={`${editorial.title} editorial cover`} />
      <div className="card-body">
        <span className="status">{editorial.theme}</span>
        <h3>{editorial.title}</h3>
        <p className="meta">{editorial.description}</p>
      </div>
    </Link>
  );
}
