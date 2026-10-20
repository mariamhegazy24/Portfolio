import Link from "next/link";
import { HeroTitle } from "@/components/HeroTitle";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="gutter flex min-h-svh overflow-x-clip flex-col justify-between pb-10 pt-[calc(72px+3rem)] lg:pb-14">
      <div>
        <HeroTitle />
        <div aria-hidden="true" className="hero-rule mt-8 h-[3px] w-full bg-accent lg:mt-12" />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-end">
        <p className="copy text-[1.2rem] leading-snug lg:col-span-6 lg:text-[1.4rem]">
          {site.name} is a frontend developer building responsive interfaces with React, Next.js and
          TypeScript.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-6 lg:justify-end">
          <Link
            href="/#work"
            className="bg-paper px-6 py-3.5 font-bold text-canvas transition-colors hover:bg-accent"
          >
            View selected work
          </Link>
          <a href={site.cv} download className="link py-2">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
