import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { ProjectsSection } from "@/components/sections/Projects";
import { BlogSection } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <ProjectsSection />
        <BlogSection />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
