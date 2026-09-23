import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Business Development Executive",
    company: "Sokrio Technologies Limited",
    date: "Oct 2025 – Present",
    type: "Full-time · Tech / SaaS",
    location: "Dhaka, Bangladesh",
    current: true,
    responsibilities: [
      "Manage end-to-end B2B sales pipeline: prospect identification → discovery calls → solution demos → proposals → negotiation → closing.",
      "Execute high-converting outreach targeting mid-to-enterprise corporate decision-makers and C-level executives.",
      "Track and analyze sales velocity, pipeline value, and deal stages using CRM, Excel, and Google Sheets.",
      "Cultivate and maintain long-term client relationships to drive account retention, renewals, and upselling.",
      "Partner with technical and product teams to customize SaaS presentations and satisfy enterprise client requirements.",
    ],
  },
  {
    role: "Senior Sales and Marketing Executive",
    company: "Pixell Coder",
    date: "May 2024 – Sep 2025",
    type: "Full-time · Digital Agency",
    location: "Dhaka, Bangladesh",
    current: false,
    responsibilities: [
      "Conducted comprehensive market research and competitive intelligence to identify high-margin sales opportunities.",
      "Accelerated client acquisition and revenue through tailored enterprise outreach strategies.",
      "Increased qualified lead inquiries by 40% through targeted outreach and value-driven pitching.",
      "Delivered strategic sales presentations and closed high-value contracts with corporate clients.",
    ],
  },
  {
    role: "Senior Sales and Marketing Executive",
    company: "Zam Zam Group",
    date: "July 2023 – March 2024",
    type: "Full-time · FMCG",
    location: "Dhaka, Bangladesh",
    current: false,
    responsibilities: [
      "Developed and executed sales strategies, expanding retail distribution across Dhaka metropolitan territories.",
      "Scaled the retail distribution network from 60 to 150+ active outlets through disciplined territory management.",
      "Led, trained, and mentored a team of 20 field sales representatives, setting daily targets and reviewing performance metrics.",
      "Coordinated with supply chain and cross-functional teams to ensure uninterrupted inventory fulfillment.",
    ],
  },
  {
    role: "Telecommunication & Sales Marketing Team Leader",
    company: "Bibahobd.com",
    date: "Feb 2022 – Jun 2023",
    type: "Full-time · Matrimony Platform",
    location: "Dhaka, Bangladesh",
    current: false,
    responsibilities: [
      "Achieved a 35%+ lead-to-client conversion rate, consistently ranking as the top sales performer across the company.",
      "Supervised a high-performing sales team with daily target tracking, objection-handling workshops, and quality audits.",
      "Exceeded sales targets by 100% and earned the 'Best Sales Performer' award for outstanding contribution to company revenue.",
      "Managed premium membership package sales through consultative phone consultations and high-touch closing.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center sm:text-left"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 mx-auto sm:mx-0" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-border/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full border-2 border-background ring-4 ${
                  exp.current
                    ? "bg-primary ring-primary/20"
                    : "bg-muted-foreground/40 ring-border group-hover:bg-primary group-hover:ring-primary/20 transition-colors"
                }`}
              />

              {/* Experience Card Content */}
              <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Briefcase size={15} />
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground font-normal">·</span>
                      <span className="text-muted-foreground font-normal text-xs">{exp.type}</span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/60 self-start sm:self-auto">
                    <Calendar size={13} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Responsibilities Bullets */}
                <ul className="space-y-2.5 pt-3 border-t border-border/50">
                  {exp.responsibilities.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
