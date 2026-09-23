import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold font-display tracking-tight text-foreground">
              Sharjia Adnan Saimomm<span className="text-primary">.</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Business Development & Sales Professional · Dhaka, Bangladesh
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/sharjia-adnan-saimomm"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:sarjiaadnan@gmail.com"
              className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-2xs"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+8801814311577"
              className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-2xs"
              aria-label="Phone"
            >
              <Phone size={16} />
            </a>
            <button
              onClick={scrollToTop}
              className="h-9 w-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all ml-2 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {currentYear} Sharjia Adnan Saimomm. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
