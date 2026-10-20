import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectFrame } from "@/components/ProjectFrame";
import { caseStudies } from "@/lib/projects";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = caseStudies.find((c) => c.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: site.url ? { canonical: `/projects/${p.slug}` } : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = caseStudies.find((c) => c.slug === slug);
  if (!p) notFound();

  const shots = p.images.length ? p.images : [undefined, undefined];
  const hasImages = p.images.length > 0;
  // External URLs (Cloudinary etc.) are always shown; local /public paths are checked for existence.
  const video = p.video
    ? p.video.src.startsWith("http")
      ? p.video
      : existsSync(path.join(process.cwd(), "public", p.video.src.replace(/^\//, "")))
        ? p.video
        : undefined
    : undefined;

  return (
    <article className="gutter pb-24 pt-[calc(72px+3rem)] lg:pb-40">
      <Link href="/#work" className="link py-2">Back to selected work</Link>

      <h1 className="h-section mt-10">{p.title}</h1>
      <p className="copy-muted mt-6 text-[1.2rem]">{p.kind}</p>

      {p.confidential ? (
        <p className="mt-8 max-w-[62ch] border-l-2 border-accent pl-4 text-mute">{p.confidentialNote}</p>
      ) : null}

      <div className="mt-16 grid gap-14 lg:grid-cols-12">
        <p className="copy text-[1.3rem] leading-snug lg:col-span-7">{p.summary}</p>
        <dl className="grid gap-6 lg:col-span-5">
          <div><dt className="text-[0.95rem] text-mute">My role</dt><dd className="mt-1">{p.role}</dd></div>
          <div><dt className="text-[0.95rem] text-mute">Scope</dt><dd className="mt-1">{p.scope}</dd></div>
          <div><dt className="text-[0.95rem] text-mute">Stack</dt><dd className="mt-1">{p.stack.join(", ")}</dd></div>
        </dl>
      </div>

      <div className={`-mx-5 mt-20 grid gap-4 sm:-mx-8 lg:-mx-20 lg:gap-6 ${hasImages ? "" : "sm:grid-cols-2"}`}>
        {shots.map((img, i) => (
          <ProjectFrame
            key={img?.src ?? `pending-${i}`}
            image={img}
            priority={i === 0 && hasImages}
            label={p.confidential ? "Approved screenshot pending" : "Screenshot to be added"}
            sizes={hasImages ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
          />
        ))}
      </div>

      {video ? (
        <section className="mt-20" aria-labelledby="video-title">
          <h2 id="video-title" className="text-[1.5rem] font-bold tracking-tight">{video.label}</h2>
          <video
            className="mt-6 w-full bg-surface"
            controls
            playsInline
            preload="metadata"
            poster={p.images[0]?.src}
            aria-label={`${p.title}: ${video.label}`}
          >
            <source src={video.src} type="video/mp4" />
            Your browser can&apos;t play this video.
          </video>
        </section>
      ) : null}

      <div className="mt-20 grid gap-14 lg:grid-cols-12">
        {p.built.length ? (
          <section className="lg:col-span-6" aria-labelledby="built">
            <h2 id="built" className="text-[1.5rem] font-bold tracking-tight">What I worked on</h2>
            <ul className="mt-6 border-t border-line">
              {p.built.map((b) => (
                <li key={b} className="border-b border-line py-4">{b}</li>
              ))}
            </ul>
          </section>
        ) : null}
        {p.pending.length ? (
          <section className="lg:col-span-6" aria-labelledby="coming">
            <h2 id="coming" className="text-[1.5rem] font-bold tracking-tight">Still to be added</h2>
            <ul className="mt-6 border-t border-line text-mute">
              {p.pending.map((b) => (
                <li key={b} className="border-b border-line py-4">{b}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>

      {p.links.length ? (
        <ul className="mt-14 flex flex-wrap gap-8">
          {p.links.map((l) => (
            <li key={l.href}><a className="link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label}<span className="sr-only"> (opens in a new tab)</span></a></li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
