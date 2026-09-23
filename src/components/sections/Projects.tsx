import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export const PROJECTS = [
  {
    id: 1,
    title: "B2B SaaS Market Expansion Strategy",
    description: "Developed and executed a comprehensive go-to-market strategy for a new B2B software product, resulting in a 40% increase in qualified leads within the first quarter.",
    tags: ["Market Research", "Lead Gen", "Strategy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "Enterprise Client Onboarding Pipeline",
    description: "Redesigned the client onboarding process to reduce churn by 25% and improve overall customer satisfaction scores through streamlined communication.",
    tags: ["CRM", "Client Success", "Process Optimization"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    title: "Omnichannel Digital Marketing Campaign",
    description: "Led a cross-functional team to launch an integrated marketing campaign across LinkedIn, email, and industry forums, driving a 150% ROI.",
    tags: ["Digital Marketing", "SEO", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Projects</h2>
            <div className="w-12 h-1 bg-primary" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Button asChild variant="ghost" className="group">
              <Link href="/projects" className="flex items-center">
                View All Projects 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card overflow-hidden group hover:border-primary/50 transition-colors flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full group/btn" asChild>
                    <Link href="/projects">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
