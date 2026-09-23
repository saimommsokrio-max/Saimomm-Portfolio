import { motion } from "framer-motion";
import { TrendingUp, Users, Wrench, CheckCircle2 } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: TrendingUp,
    title: "Sales & Business Development",
    description: "End-to-end B2B sales lifecycle management — from outbound prospecting through deal closing.",
    level: 95,
    skills: [
      "B2B Sales & Client Acquisition",
      "Lead Generation & Cold Outreach",
      "Sales Negotiation & Closing",
      "Proposal & Solution Pitching",
      "CRM & Pipeline Optimization",
      "Objection Handling & Retention",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Relationships",
    description: "Building high-performance sales teams and forging lasting enterprise partnerships.",
    level: 90,
    skills: [
      "Field Sales Team Leadership",
      "Key Account Management (KAM)",
      "Cross-Functional Coordination",
      "Sales Coaching & Training",
      "Stakeholder Communication",
      "Territory & Target Planning",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Productivity",
    description: "Proficient in modern sales intelligence, CRM platforms, and productivity suites.",
    level: 85,
    skills: [
      "Advanced MS Excel & Formulas",
      "Google Sheets & Analytics",
      "CRM Systems & Data Entry",
      "PowerPoint & Pitch Decks",
      "Loom Video Outreach",
      "Google Workspace & Slack",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Core Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-primary mt-3" />
        </motion.div>

        {/* 3-Column Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <cat.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Proficiency Meter */}
                <div className="mb-6 pb-6 border-b border-border/60">
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-muted-foreground uppercase tracking-wider">Proficiency</span>
                    <span className="text-primary font-bold">{cat.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${cat.level}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-muted/60 text-foreground border border-border/70 hover:border-primary/40 transition-colors"
                  >
                    <CheckCircle2 size={12} className="text-primary shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
