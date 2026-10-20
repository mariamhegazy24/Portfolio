"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/site";

const sectionIds = [...navLinks.map((l) => l.id), "contact"];

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus();
  }, []);

  // Active-section indicator: state changes only when the section in view changes.
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  // Mobile menu: Escape closes, Tab is trapped inside, background scroll locked.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const items = [menuButton.current, ...(panel.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter(
        (x): x is HTMLElement => !!x,
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const linkClass = (id: string) =>
    `relative py-2 transition-colors hover:text-accent ${
      active === id ? "text-paper after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-accent" : "text-paper/80"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-canvas">
      <nav aria-label="Main" className="gutter flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="bg-paper px-4 py-2 font-bold tracking-tight text-canvas" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <ul className="hidden items-center gap-9 text-[0.95rem] lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link href={`/#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? "location" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-8 lg:flex">
          <span className="hidden text-[0.95rem] text-mute xl:block">{site.location}</span>
          <Link
            href="/#contact"
            className="border border-paper/40 px-4 py-2 text-[0.95rem] transition-colors hover:border-accent hover:bg-accent hover:text-canvas"
          >
            Contact
          </Link>
        </div>

        <button
          ref={menuButton}
          type="button"
          className="border border-paper/40 px-4 py-2 text-[0.95rem] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="gutter fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-canvas pb-10 pt-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {[...navLinks, { id: "contact", label: "Contact" }].map((l) => (
            <li key={l.id} className="border-b border-line">
              <Link
                href={`/#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-5 text-[clamp(2rem,9vw,3.25rem)] font-bold leading-none tracking-tight"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-mute">{site.location}</p>
      </div>
    </header>
  );
}
