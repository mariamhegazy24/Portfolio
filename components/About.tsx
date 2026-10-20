import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="gutter py-24 lg:py-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 className="h-section lg:col-span-7">About</h2>
        <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-6">
          {about.map((p) => (
            <p key={p} className="copy text-[1.15rem]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
