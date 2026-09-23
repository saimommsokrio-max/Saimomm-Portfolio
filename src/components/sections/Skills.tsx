import { motion } from "framer-motion";
import { Zap, TrendingUp, Wrench, Users } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    title: "Sales & Business Development",
    description: "End-to-end B2B sales cycle management — from prospecting through closing.",
    level: 95,
    skills: ["Lead Generation & Prospecting", "B2B Sales & Client Acquisition", "Sales Negotiation & Closing", "Proposal Presentation", "CRM & Pipeline Management", "Objection Handling"],
  },
  {
    icon: Users,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    border: "border-chart-3/20",
    title: "Leadership & Relationship Management",
    description: "Building high-performance teams and lasting client partnerships at every level.",
    level: 88,
    skills: ["Team Leadership & Supervision", "Client Relationship Management", "Cross-functional Coordination", "Strategic Planning", "Performance Coaching", "Stakeholder Communication"],
  },
  {
    icon: Wrench,
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    border: "border-chart-4/20",
    title: "Tools & Technology",
    description: "Proficient in modern sales, productivity, and analytics tools.",
    level: 80,
    skills: ["MS Excel (Advanced)", "Google Sheets", "CRM Platforms", "PowerPoint & Presentations", "Loom / Video Outreach", "Google Workspace"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card border-y border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.05),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">What I Bring</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Core Skills & Expertise</h2>
            <div className="w-12 h-1 bg-secondary mt-4" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-md lg:text-right"
          >
            A toolkit combining modern sales strategy, relationship building, and leadership to drive sustainable growth.
          </motion.p>
        </div>

        {/* Category cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className={`p-8 rounded-2xl bg-background border ${cat.border} hover:shadow-lg transition-all group flex flex-col justify-between`}
            >
              {/* Category header */}
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className={`h-12 w-12 rounded-xl ${cat.bg} flex items-center justify-center shrink-0`}>
                    <cat.icon className={`h-6 w-6 ${cat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground mb-1">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  </div>
                </div>

                {/* Proficiency bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={cat.color}>{cat.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        idx === 0 ? "from-primary to-primary/70" :
                        idx === 1 ? "from-chart-3 to-chart-3/70" :
                        "from-chart-4 to-chart-4/70"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${cat.bg} ${cat.color} border ${cat.border} transition-all`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-chart-3/10 border border-border flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-bold text-foreground">Always Learning</p>
            <p className="text-sm text-muted-foreground">Currently deepening expertise in enterprise SaaS sales, account-based marketing, and revenue operations.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
