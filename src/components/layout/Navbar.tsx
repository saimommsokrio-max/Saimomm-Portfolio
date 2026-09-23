import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (location !== "/" && href.startsWith("#")) {
      window.location.href = `/${href}`;
    }
  };

  const scrollToTop = () => {
    if (location !== "/") {
      window.location.href = "/";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-xs py-3.5"
          : "bg-background/60 backdrop-blur-xs border-b border-border/40 py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xl font-bold font-display tracking-tight text-foreground transition-colors cursor-pointer"
          >
            <span>Sharjia Adnan</span>
            <span className="text-primary group-hover:translate-x-0.5 transition-transform">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-sm font-medium transition-all shadow-xs hover:shadow-sm"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Let's Talk <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 -mr-2 rounded-lg hover:bg-muted/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-5 flex flex-col gap-3 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-medium text-foreground py-2 border-b border-border/50 last:border-0 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-3 rounded-full bg-primary text-primary-foreground">
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              Let's Talk
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
