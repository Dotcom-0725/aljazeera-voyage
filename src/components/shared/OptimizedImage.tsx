import { cn } from "../../utils/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

/** Optimized remote image helper with lazy loading + decoding hints */
export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  // Prefer smaller derivatives from pexels when possible
  const optimizedSrc = src.includes("images.pexels.com")
    ? src.replace(/w=\d+/, "w=900").replace(/h=\d+/, "")
    : src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      className={cn("bg-muted object-cover", className)}
    />
  );
}
