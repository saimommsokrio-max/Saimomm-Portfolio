import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email Me",
    value: "sarjiaadnan@gmail.com",
    href: "mailto:sarjiaadnan@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sharjia-adnan-saimomm",
    href: "https://www.linkedin.com/in/sharjia-adnan-saimomm",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+8801814311577",
    href: "tel:+8801814311577",
  },
];

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-muted/40 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Let's Collaborate
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            Ready to Drive Business Growth Together?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are looking to scale B2B sales pipelines, expand client networks, or discuss a career opportunity — I'd be excited to connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-xs hover:shadow-sm transition-all"
            >
              <a href="#contact">
                Send a Message <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-border hover:bg-muted font-medium text-base text-foreground transition-colors"
            >
              <a href="/SHARJIA_ADNAN_SAIMOMM.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* 3 Direct Channel Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {CHANNELS.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-5 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col items-center gap-2.5 text-center"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  <item.icon size={18} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                  {item.value}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
