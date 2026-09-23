import { motion } from "framer-motion";
import { Trophy, TrendingUp, Users, Star, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ACHIEVEMENTS = [
  {
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Team Leadership",
    stat: "20+",
    statLabel: "team members led",
    description:
      "Led a team of 20 members at Zam Zam Group, driving collective performance and exceeding departmental goals through structured coaching and clear KPIs.",
  },
  {
    icon: Trophy,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Best Sales Performer",
    stat: "100%",
    statLabel: "above target",
    description:
      "Awarded Best Sales Performer at Bibahobd.com for consistently exceeding sales targets by 100% and maintaining the highest client satisfaction scores on the team.",
  },
  {
    icon: TrendingUp,
    color: "text-chart-3",
    bg: "bg-chart-3/10",
    title: "Distribution Growth",
    stat: "150+",
    statLabel: "outlets expanded",
    description:
      "Expanded distribution network from 60 to 150+ outlets at Zam Zam Group through systematic territory development and strong retailer relationship management.",
  },
  {
    icon: Target,
    color: "text-chart-4",
    bg: "bg-chart-4/10",
    title: "Lead Conversion",
    stat: "35%+",
    statLabel: "conversion rate",
    description:
      "Maintained a 35%+ lead-to-client conversion rate at Bibahobd.com — significantly above the industry average — through disciplined follow-up and tailored pitches.",
  },
  {
    icon: Zap,
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Pipeline Growth",
    stat: "40%",
    statLabel: "more qualified leads",
    description:
      "Increased qualified lead inquiries by 40% at Pixell Coder through targeted LinkedIn outreach, email campaigns, and SEO-driven content strategy.",
  },
  {
    icon: Star,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Revenue Contribution",
    stat: "3+",
    statLabel: "years of growth",
    description:
      "Consistently contributed to revenue growth and pipeline development across multiple roles in tech, FMCG, and service sectors over 3+ years.",
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 md:py-32 relative bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">
            Proven Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Key Achievements
          </h2>
          <div className="w-12 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg">
            Measurable results built through discipline, strategy, and a relentless focus on
            delivering value to clients and employers alike.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="bg-card h-full hover:border-primary/40 transition-all hover:shadow-lg group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`h-12 w-12 rounded-xl ${a.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <a.icon className={`h-5 w-5 ${a.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-display font-bold ${a.color}`}>
                        {a.stat}
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {a.statLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {a.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
