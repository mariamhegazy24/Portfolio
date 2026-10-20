import { education, experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="gutter py-24 lg:py-40">
      <h2 className="h-section">Experience</h2>
      <div className="mt-16 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <h3 className="text-[1.5rem] font-bold tracking-tight">Work</h3>
          <ul className="mt-6 border-t border-line">
            {experience.map((e) => (
              <li key={e.role} className="border-b border-line py-6">
                <p className="text-[1.2rem] font-bold">{e.role}</p>
                <p>{e.org}</p>
                <p className="text-[0.95rem] text-mute">{e.meta}</p>
                {e.text ? <p className="copy mt-3 text-[1rem]">{e.text}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <h3 className="text-[1.5rem] font-bold tracking-tight">Education and training</h3>
          <ul className="mt-6 border-t border-line">
            {education.map((e) => (
              <li key={e.title} className="border-b border-line py-6">
                <p className="text-[1.2rem] font-bold">{e.title}</p>
                <p>{e.org}</p>
                <p className="text-[0.95rem] text-mute">{e.meta}</p>
                {e.text ? <p className="copy mt-3 text-[1rem]">{e.text}</p> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
