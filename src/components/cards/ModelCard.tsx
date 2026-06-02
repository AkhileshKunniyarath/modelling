import Link from "next/link";
import type { ModelProfile } from "@/content/models";

export function ModelCard({ model }: { model: ModelProfile }) {
  return (
    <Link href={`/models/${model.slug}`} className="card image-card">
      <img src={model.heroImage} alt={`${model.name} portfolio portrait`} />
      <div className="card-caption">
        <h3>{model.name}</h3>
        <p>{model.category} / {model.location}</p>
      </div>
    </Link>
  );
}
