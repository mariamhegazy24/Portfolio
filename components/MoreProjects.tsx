import { ProjectFrame } from "@/components/ProjectFrame";
import { moreProjects } from "@/lib/projects";

export function MoreProjects() {
  return (
    <section id="more-projects" className="gutter py-24 lg:py-40">
      <h2 className="h-title">More Projects</h2>
      <ul className="mt-12 border-t border-line">
        {moreProjects.map((p) => (
          <li key={p.title} className="grid gap-4 border-b border-line py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
            <h3 className="text-[1.5rem] font-bold tracking-tight lg:col-span-3">{p.title}</h3>
            <div className="flex flex-col gap-3 lg:col-span-6">
              <p className="copy">{p.line}</p>
              <p className="text-[0.95rem] text-mute">{p.stack.join(", ")}</p>
              {p.note ? <p className="text-[0.95rem] text-mute">{p.note}</p> : null}
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:col-span-3 lg:justify-end">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="link py-1">
                    {l.label}
                    <span className="sr-only">
                      {" "}
                      for {p.title} (opens in a new tab)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {p.image ? (
              <div className="lg:col-span-6 lg:col-start-4">
                <ProjectFrame image={p.image} sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
