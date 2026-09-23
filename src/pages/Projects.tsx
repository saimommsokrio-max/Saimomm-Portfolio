import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS } from "@/components/sections/Projects";

export default function Projects() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3 text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Portfolio</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Featured Projects & Initiatives
              </h1>
              <div className="w-12 h-1 bg-primary mb-5" />
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
                Strategic campaigns, client acquisition frameworks, and territory growth initiatives executed throughout my career.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-xs"
              >
                <div className={`lg:col-span-6 space-y-4 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                    {project.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground">
                      <a href="/#contact">
                        Discuss this Project <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
