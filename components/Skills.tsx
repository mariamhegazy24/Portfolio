import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="gutter py-24 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 className="h-section lg:col-span-5">Skills</h2>
        <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {skills.map((g) => (
            <div key={g.group}>
              <dt className="text-[1.2rem] font-bold">{g.group}</dt>
              <dd className="mt-2 text-mute">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
