import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="gutter py-24 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="h-section">Let&apos;s talk</h2>
          <p className="copy mt-8 text-[1.15rem]">
            I&apos;m looking for frontend developer roles. Send a message here or write to me directly.
          </p>
          <ul className="mt-10 flex flex-col gap-3 text-[1.1rem]">
            <li><a className="link" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a></li>
            <li><a className="link" href={site.cv} download>Download CV (PDF)</a></li>
          </ul>
        </div>
        <div className="lg:col-span-6">
          <ContactForm fallbackEmail={site.email} />
        </div>
      </div>
    </section>
  );
}
