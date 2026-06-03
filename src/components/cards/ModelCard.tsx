import Link from "next/link";
import type { ModelProfile } from "@/content/models";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function ModelCard({ model }: { model: ModelProfile }) {
  return (
    <Link href={`/models/${model.slug}`} className="card image-card">
      <OptimizedImage
        src={model.heroImage}
        alt={`${model.name} portfolio portrait`}
        sizes="(max-width: 640px) calc(100vw - 28px), (max-width: 960px) calc((100vw - 60px) / 2), 380px"
      />
      <div className="card-caption">
        <h3>{model.name}</h3>
        <p>{model.category} / {model.location}</p>
      </div>
    </Link>
  );
}
