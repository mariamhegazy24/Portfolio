import Link from "next/link";
import { ProjectFrame } from "@/components/ProjectFrame";
import { Unmask } from "@/components/Unmask";
import { caseStudies } from "@/lib/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 lg:py-40">
      <div className="gutter">
        <h2 className="h-section">Selected Work</h2>
      </div>

      <div className="mt-16 flex flex-col gap-24 lg:mt-28 lg:gap-40">
        {caseStudies.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={p.slug} className="gutter grid items-end gap-8 lg:grid-cols-12 lg:gap-14">
              {/* Image bleeds to the viewport edge on its side (lg+), per the Canva reference. */}
              <Unmask
                className={`-mx-5 sm:-mx-8 lg:mx-0 lg:col-span-7 ${
                  flip ? "lg:order-2 lg:col-start-6 lg:row-start-1 lg:-mr-20" : "lg:-ml-20"
                }`}
              >
                <ProjectFrame image={p.images[0]} priority={i === 0} label={p.confidential ? "Approved screenshots pending (confidential project)" : "Screenshot to be added"} />
              </Unmask>

              <div className={`flex flex-col gap-5 lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="h-title">
                  <Link href={`/projects/${p.slug}`} className="hover:text-accent focus-visible:text-accent">
                    {p.title}
                  </Link>
                </h3>
                <p className="copy-muted">{p.kind}</p>
                <p className="copy">{p.summary}</p>
                {p.confidential ? (
                  <p className="border-l-2 border-accent pl-4 text-[0.95rem] text-mute">Confidential company project.</p>
                ) : null}
                <p className="text-[0.95rem] text-mute">{p.stack.join(", ")}</p>
                <Link href={`/projects/${p.slug}`} className="link mt-1 w-fit py-1">
                  View project<span className="sr-only">: {p.title}</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
