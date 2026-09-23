import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <Card className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">BSc in Computer Science & Engineering</h3>
                  <div className="text-primary font-medium mb-2">Stamford University Bangladesh, 2022</div>
                  <div className="text-muted-foreground">CGPA: 2.96</div>
                </CardContent>
              </Card>

              <Card className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Higher Secondary Certificate</h3>
                  <div className="text-primary font-medium mb-2">Cox's Bazar Govt. College, 2017</div>
                  <div className="text-muted-foreground">GPA: 4.17</div>
                </CardContent>
              </Card>

              <Card className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Secondary School Certificate</h3>
                  <div className="text-primary font-medium mb-2">Eidgah Model High School, 2014</div>
                  <div className="text-muted-foreground">GPA: 5.00</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Extracurricular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Users size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">Leadership & Extracurricular</h2>
            </div>

            <div className="space-y-6 relative border-l-2 border-border/50 ml-6 pl-8">
              <div className="relative">
                <div className="absolute -left-[39px] top-2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background" />
                <h3 className="text-xl font-bold mb-1">Organizing Secretary</h3>
                <div className="text-secondary font-medium mb-2">Computer Society, Stamford University</div>
                <p className="text-muted-foreground">Coordinated events, workshops, and member engagement.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] top-2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background" />
                <h3 className="text-xl font-bold mb-1">Vice President</h3>
                <div className="text-secondary font-medium mb-2">Computer Society, Stamford University</div>
                <p className="text-muted-foreground">Led student initiatives and organizational strategy.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[39px] top-2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background" />
                <h3 className="text-xl font-bold mb-1">Organizing Secretary</h3>
                <div className="text-secondary font-medium mb-2">Road Safety Forum, Stamford University</div>
                <p className="text-muted-foreground">Led awareness campaigns and seminars on campus.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
