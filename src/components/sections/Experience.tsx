import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const EXPERIENCES = [
  {
    role: "Business Development Executive",
    company: "Sokrio Technologies Limited",
    date: "Oct 2025 – Present",
    type: "Full-time · Tech / SaaS",
    color: "bg-primary",
    highlight: "Current Role",
    responsibilities: [
      "Manage end-to-end B2B sales pipeline: lead generation → meetings → demos → proposals → negotiation → closing",
      "Generate leads through cold outreach, LinkedIn, and referrals targeting corporate decision-makers",
      "Maintain and track pipeline using CRM, Excel, and Google Sheets with weekly reporting to leadership",
      "Build strong relationships with corporate clients to ensure retention and upsell opportunities",
      "Collaborate with product and technical teams to deliver tailored solutions for enterprise accounts",
    ],
  },
  {
    role: "Senior Sales and Marketing Executive",
    company: "Pixell Coder",
    date: "May 2024 – Sep 2025",
    type: "Full-time · Digital Agency",
    color: "bg-secondary",
    highlight: null,
    responsibilities: [
      "Conducted market research and competitor analysis to identify new business opportunities",
      "Contributed to client acquisition and revenue growth through targeted outreach strategies",
      "Worked on SEO, social media marketing, and email campaigns for multiple clients",
      "Increased lead inquiries by 40% through targeted LinkedIn and content marketing campaigns",
    ],
  },
  {
    role: "Senior Sales and Marketing Executive",
    company: "Zam Zam Group",
    date: "July 2023 – March 2024",
    type: "Full-time · FMCG",
    color: "bg-chart-3",
    highlight: null,
    responsibilities: [
      "Developed and executed sales strategies expanding market presence across Dhaka territories",
      "Managed visits to 100+ outlets weekly, expanding distribution network from 60 to 150+ outlets",
      "Led a team of 20 field sales representatives, setting daily targets and reviewing performance",
      "Coordinated with cross-functional teams (sales, marketing, operations) to ensure stock availability",
    ],
  },
  {
    role: "Telecommunication & Sales Marketing Team Leader",
    company: "Bibahobd.com",
    date: "Feb 2022 – Jun 2023",
    type: "Full-time · Matrimony Platform",
    color: "bg-chart-4",
    highlight: null,
    responsibilities: [
      "Increased client registrations through digital campaigns, social media, and referral networks",
      "Maintained 35%+ lead-to-client conversion rate — top performer on the sales team",
      "Led and supervised a sales team with daily briefings, training, and performance tracking",
      "Managed objection handling and closing processes for premium membership packages",
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Career Journey</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Work Experience</h2>
          <div className="w-12 h-1 bg-primary" />
        </motion.div>

        <div className="max-w-4xl space-y-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl bg-card border border-border hover:border-primary/30 transition-all overflow-hidden"
            >
              {/* Header — always visible */}
              <button
                className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                {/* Color dot */}
                <div className={`h-3 w-3 rounded-full shrink-0 ${exp.color} mt-1 hidden sm:block`} />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.role}</h3>
                    {exp.highlight && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {exp.highlight}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center gap-1.5 font-semibold text-primary">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{exp.type}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background border border-border px-3 py-1.5 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.date}
                  </div>
                  {expanded === index ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Expandable responsibilities */}
              <motion.div
                initial={false}
                animate={{ height: expanded === index ? "auto" : 0, opacity: expanded === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-border/50 pt-5">
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${exp.color}`} />
                          <span className="leading-relaxed text-sm md:text-base">{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
