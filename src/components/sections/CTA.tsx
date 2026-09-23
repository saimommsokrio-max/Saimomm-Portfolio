import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email me directly",
    value: "sarjiaadnan@gmail.com",
    href: "mailto:sarjiaadnan@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    value: "sharjia-adnan-saimomm",
    href: "https://www.linkedin.com/in/sharjia-adnan-saimomm",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: "+8801814311577",
    href: "tel:+8801814311577",
    color: "text-chart-3",
    bg: "bg-chart-3/10",
  },
];

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for new opportunities
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Let's Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Together
              </span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you're looking for a driven sales professional, need a business development strategy, or
              just want to connect — I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                <a href="#contact">
                  Send a Message <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-10 text-base font-semibold border-primary/20 hover:bg-primary/5"
              >
                <a href="/SHARJIA_ADNAN_SAIMOMM.pdf" download>
                  Download My CV
                </a>
              </Button>
            </div>

            {/* Channel cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {CHANNELS.map(({ icon: Icon, label, value, href, color, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className={`h-12 w-12 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground">
                    {label}
                  </div>
                  <div className={`text-sm font-semibold ${color} break-all text-center`}>
                    {value}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
