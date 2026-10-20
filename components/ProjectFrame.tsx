import Image from "next/image";
import type { ImageAsset } from "@/lib/projects";

/**
 * Renders an approved image, or a clearly marked placeholder with a FIXED aspect ratio (no layout shift).
 * Swap in real assets by adding them to the project's `images` in lib/projects.ts.
 */
export function ProjectFrame({
  image,
  label = "Screenshot to be added",
  ratio = "aspect-[16/10]",
  priority = false,
  sizes = "(min-width: 1024px) 58vw, 100vw",
  className = "",
}: {
  image?: ImageAsset;
  label?: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (image) {
    return (
      <div className={`relative w-full overflow-hidden bg-surface ${className}`} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority} sizes={sizes} className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div className={`${ratio} frame-pending flex w-full items-center justify-center ${className}`}>
      <p className="px-6 text-center text-[0.95rem] text-mute">{label}</p>
    </div>
  );
}
