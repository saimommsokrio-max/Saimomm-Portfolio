import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export const PROJECTS = [
  {
    id: 1,
    title: "B2B SaaS Market Expansion Strategy",
    description: "Developed and executed an outbound go-to-market sales strategy for enterprise SaaS, generating a 40% increase in qualified sales pipeline in Q1.",
    tags: ["Market Research", "Lead Gen", "B2B Strategy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: 2,
    title: "Enterprise Client Onboarding & Retention",
    description: "Streamlined corporate client onboarding and retention workflows, cutting churn by 25% and boosting NPS via structured account touchpoints.",
    tags: ["CRM", "Client Success", "Account Growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
  },
  {
    id: 3,
    title: "Multi-Channel B2B Outbound Campaign",
    description: "Orchestrated a cross-functional outbound sales sprint across LinkedIn and direct email outreach, yielding 150% ROI and multiple closed enterprise accounts.",
    tags: ["B2B Sales", "Lead Generation", "Team Leadership"],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800&h=500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-primary mt-3" />
          </motion.div>

          <Button asChild variant="outline" className="rounded-full self-start sm:self-auto border-border hover:bg-muted font-medium">
            <Link href="/projects" className="flex items-center gap-1.5">
              View All Projects <ArrowRight size={15} />
            </Link>
          </Button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl bg-card border border-border overflow-hidden shadow-2xs hover:shadow-md hover:border-primary/40 transition-all duration-200"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  Explore Initiative <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
