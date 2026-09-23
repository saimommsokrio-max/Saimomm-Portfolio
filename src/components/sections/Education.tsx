import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Education Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary">Academic</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Education</h2>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold text-foreground mb-1">BSc in Computer Science & Engineering</h3>
                <div className="text-sm font-semibold text-primary mb-1">Stamford University Bangladesh · 2022</div>
                <div className="text-xs text-muted-foreground font-medium">CGPA: 2.96 / 4.00</div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold text-foreground mb-1">Higher Secondary Certificate (HSC)</h3>
                <div className="text-sm font-semibold text-primary mb-1">Cox's Bazar Govt. College · 2017</div>
                <div className="text-xs text-muted-foreground font-medium">GPA: 4.17 / 5.00</div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold text-foreground mb-1">Secondary School Certificate (SSC)</h3>
                <div className="text-sm font-semibold text-primary mb-1">Eidgah Model High School · 2014</div>
                <div className="text-xs text-muted-foreground font-medium">GPA: 5.00 / 5.00</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Leadership & Extracurriculars Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users size={22} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary">Campus & Community</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Leadership Activities</h2>
              </div>
            </div>

            <div className="relative border-l-2 border-border ml-3 pl-6 space-y-7">
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />
                <h3 className="text-base font-bold text-foreground">Organizing Secretary</h3>
                <div className="text-xs font-semibold text-primary mb-1">Computer Society, Stamford University</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Coordinated tech seminars, workshop logistics, and university-wide member engagement initiatives.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />
                <h3 className="text-base font-bold text-foreground">Vice President</h3>
                <div className="text-xs font-semibold text-primary mb-1">Computer Society, Stamford University</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Spearheaded executive team planning, student mentoring programs, and academic collaboration events.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-background" />
                <h3 className="text-base font-bold text-foreground">Organizing Secretary</h3>
                <div className="text-xs font-semibold text-primary mb-1">Road Safety Forum, Stamford University</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organized campus awareness rallies, panel discussions, and safety campaigns with local authorities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
