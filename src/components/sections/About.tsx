import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const STATS = [
  { value: "3+", label: "Years Experience", icon: TrendingUp, color: "text-primary" },
  { value: "4", label: "Companies", icon: Award, color: "text-secondary" },
  { value: "35%+", label: "Lead-to-Client Rate", icon: Target, color: "text-chart-3" },
  { value: "150+", label: "Outlets Managed", icon: Users, color: "text-chart-4" },
];

const HIGHLIGHTS = [
  { label: "Currently at", value: "Sokrio Technologies Ltd." },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Education", value: "BSc in CSE, Stamford University" },
  { label: "Languages", value: "Bangla (Native), English (Professional)" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-card border-y border-border overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">About Me</h2>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio & highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-medium">
              Business Development & Sales professional with{" "}
              <span className="text-primary font-semibold">3+ years of experience</span> in client acquisition,
              digital marketing, and relationship management across tech and service sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Skilled in lead generation, market research, pipeline management, and closing deals. Proven track
              record in achieving sales targets, managing client relationships, and contributing to revenue growth
              through strategic planning and execution. I thrive at the intersection of people, process, and
              technology — turning prospects into long-term partners.
            </p>

            {/* Quick-facts grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-background border border-border"
                >
                  <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground">{h.label}</span>
                  <span className="text-sm font-semibold text-foreground">{h.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Mail, label: "sarjiaadnan@gmail.com", href: "mailto:sarjiaadnan@gmail.com" },
                { icon: Phone, label: "+8801814311577", href: "tel:+8801814311577" },
                { icon: MapPin, label: "Dhaka, Bangladesh", href: "#" },
                { icon: ExternalLink, label: "LinkedIn", href: "https://www.linkedin.com/in/sharjia-adnan-saimomm" },
              ].map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary shrink-0" />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {STATS.map(({ value, label, icon: Icon, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] bg-muted/50 group-hover:bg-primary/5 transition-colors" />
                <Icon className={`h-6 w-6 ${color} mb-4 relative`} />
                <div className={`text-4xl font-display font-bold ${color} mb-2`}>{value}</div>
                <div className="text-sm text-muted-foreground font-medium">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
