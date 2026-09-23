import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const STATS = [
  { value: "3+", label: "Years Experience", icon: TrendingUp },
  { value: "4", label: "Companies", icon: Award },
  { value: "35%+", label: "Lead-to-Client Rate", icon: Target },
  { value: "150+", label: "Outlets Managed", icon: Users },
];

const HIGHLIGHTS = [
  { label: "Currently at", value: "Sokrio Technologies Ltd." },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Education", value: "BSc in CSE, Stamford University" },
  { label: "Languages", value: "Bangla (Native), English (Professional)" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Background & Focus</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            About Me
          </h2>
          <div className="w-12 h-1 bg-primary mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Bio & Details */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              Business Development & Sales professional with <span className="text-primary font-semibold">3+ years of experience</span> in client acquisition, strategic B2B sales, and relationship management across tech, FMCG, and digital sectors.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Skilled in end-to-end sales cycle execution — including prospect research, discovery calls, solution demos, commercial proposals, and contract negotiation. Proven track record in exceeding quotas, leading field sales teams, and establishing long-term enterprise partnerships.
            </p>

            {/* Quick-Facts Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {HIGHLIGHTS.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-card border border-border shadow-2xs"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border/60">
              <a
                href="mailto:sarjiaadnan@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                sarjiaadnan@gmail.com
              </a>
              <a
                href="tel:+8801814311577"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +8801814311577
              </a>
              <a
                href="https://www.linkedin.com/in/sharjia-adnan-saimomm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-primary shrink-0" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Right: Clean Key Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-1">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
