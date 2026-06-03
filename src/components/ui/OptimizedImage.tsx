import Image from "next/image";
import { site } from "@/content/site";

type OptimizedImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

export function OptimizedImage({ src, alt, sizes, priority = false }: OptimizedImageProps) {
  const imageSrc = src || site.logo;
  const loadingProps = priority ? { priority: true } : { loading: "lazy" as const };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes={sizes}
      quality={75}
      {...loadingProps}
    />
  );
}
