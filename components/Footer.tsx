import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="gutter overflow-hidden border-t border-line pb-8 pt-14">
      <p aria-hidden="true" className="display select-none whitespace-nowrap !text-[clamp(2.75rem,12.5vw,13rem)] text-paper/90">
        {site.name}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[0.95rem] text-mute">
        <p>&copy; {new Date().getFullYear()} {site.name}. {site.location}.</p>
        <ul className="flex gap-6">
          <li><a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
          <li><a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
        </ul>
      </div>
    </footer>
  );
}
