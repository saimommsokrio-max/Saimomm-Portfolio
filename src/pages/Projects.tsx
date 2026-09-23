import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS } from "@/components/sections/Projects";

export default function Projects() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Featured Projects</h1>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl">
                A deeper dive into some of the strategic initiatives, campaigns, and processes I've developed and led throughout my career.
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <Button>
                      View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className={`order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
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
