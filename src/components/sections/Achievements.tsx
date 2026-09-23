import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Star, Target, Zap } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: Users,
    title: "Team Leadership",
    stat: "20+",
    statLabel: "Field Sales Reps Led",
    description: "Led and trained a team of 20 field representatives at Zam Zam Group, surpassing monthly sales benchmarks through continuous performance coaching.",
  },
  {
    icon: Trophy,
    title: "Best Sales Performer",
    stat: "100%",
    statLabel: "Above Quota Target",
    description: "Awarded Best Sales Performer at Bibahobd.com for exceeding sales quota by 100% with top customer satisfaction feedback across the team.",
  },
  {
    icon: TrendingUp,
    title: "Territory Expansion",
    stat: "150+",
    statLabel: "Retail Outlets Scaled",
    description: "Expanded the active FMCG distribution footprint from 60 to 150+ retail outlets across Dhaka through disciplined territory mapping.",
  },
  {
    icon: Target,
    title: "High Conversion Rate",
    stat: "35%+",
    statLabel: "Lead-to-Client Rate",
    description: "Maintained a consistent 35%+ conversion rate on inbound and qualified prospects through high-touch discovery and closing tactics.",
  },
  {
    icon: Zap,
    title: "Pipeline Acceleration",
    stat: "40%",
    statLabel: "More Qualified Leads",
    description: "Boosted qualified sales lead inquiries by 40% at Pixell Coder through outbound LinkedIn prospecting and systematic follow-ups.",
  },
  {
    icon: Star,
    title: "Track Record",
    stat: "3+",
    statLabel: "Years High Performance",
    description: "Consistently delivered measurable revenue contributions and client acquisitions across SaaS, tech agency, and retail sectors.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center sm:text-left"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Proven Track Record</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Key Achievements
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 mx-auto sm:mx-0" />
        </motion.div>

        {/* 6-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                      {item.stat}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
