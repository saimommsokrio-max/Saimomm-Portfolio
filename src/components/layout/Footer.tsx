import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-display font-bold text-foreground">
              SAS<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Sharjia Adnan Saimomm — Business Development & Sales
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/sharjia-adnan-saimomm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:sarjiaadnan@gmail.com"
              className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:+8801814311577"
              className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all"
            >
              <Phone size={18} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Sharjia Adnan Saimomm. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
