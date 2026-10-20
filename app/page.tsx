import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { LandingGallery } from "@/components/LandingGallery";
import { MoreProjects } from "@/components/MoreProjects";
import { SelectedWork } from "@/components/SelectedWork";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <LandingGallery />
      <MoreProjects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
