import { ProjectFrame } from "@/components/ProjectFrame";
import { Unmask } from "@/components/Unmask";
import { landingPages, type LandingPage } from "@/lib/projects";

const TBA = "To be added";

function Caption({ lp }: { lp: LandingPage }) {
  const ok = lp.copyApproved;
  const rows: [string, string][] = [
    ["Purpose", ok && lp.purpose ? lp.purpose : TBA],
    ["Stack", ok && lp.stack?.length ? lp.stack.join(", ") : TBA],
    ["My role", ok && lp.role ? lp.role : TBA],
  ];
  return (
    <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr]">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="text-[0.95rem] text-mute">{k}</dt>
          <dd className="mt-1">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LandingGallery() {
  return (
    <section id="landing-pages" className="py-24 lg:py-40">
      <div className="gutter grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 className="h-title">Landing Pages</h2>
          <p className="copy mt-6">A selection of landing pages I built for real projects.</p>
          <ul className="mt-8 hidden flex-col gap-2 text-mute lg:flex">
            {landingPages.map((lp) => (
              <li key={lp.id}>{lp.nameApproved && lp.name ? lp.name : "Client project (name withheld)"}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-20 lg:col-span-8 lg:gap-32">
          {landingPages.map((lp) => {
            const shot = lp.imagesApproved ? lp.desktop : undefined;
            const name = lp.nameApproved && lp.name ? lp.name : "Client project (name withheld)";
            return (
              <article key={lp.id}>
                {/* Approved image: shown whole, at its own aspect ratio. Otherwise a marked placeholder. */}
                <div className="-mx-5 sm:-mx-8 lg:mx-0 lg:-mr-20">
                  <Unmask>
                    <ProjectFrame image={shot} label="Landing page screenshot to be added" sizes="(min-width: 1024px) 62vw, 100vw" />
                  </Unmask>
                </div>
                <h3 className="mt-8 text-[1.5rem] font-bold tracking-tight">{name}</h3>
                <Caption lp={lp} />
                {lp.href ? (
                  <p className="mt-6">
                    <a href={lp.href} target="_blank" rel="noopener noreferrer" className="link py-1">
                      Visit the live page<span className="sr-only">: {name} (opens in a new tab)</span>
                    </a>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
