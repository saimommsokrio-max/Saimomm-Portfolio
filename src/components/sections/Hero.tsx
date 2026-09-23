import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone, Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const profilePhoto = "/images/avatar.png";

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string>(profilePhoto);
  const [uploading, setUploading] = useState(false);
  const [hover, setHover] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/upload/avatar")
      .then((r) => r.json())
      .then((data) => {
        if (data?.avatarUrl) setAvatarUrl(data.avatarUrl);
      })
      .catch(() => {});
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload/avatar", { method: "POST", body: form });
      const data = await res.json();
      if (data?.avatarUrl) {
        setAvatarUrl(data.avatarUrl);
      }
    } catch {
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <section id="hero" className="relative py-16 md:py-28 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Available for New Opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-6">
              Sharjia Adnan <br className="hidden sm:inline" />
              <span className="text-primary">Saimomm</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Business Development & Sales professional with <strong className="text-foreground font-semibold">3+ years of experience</strong> driving pipeline growth, enterprise client acquisition, and high-value strategic partnerships.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="h-12 px-7 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base shadow-xs hover:shadow-sm transition-all"
              >
                <a href="#contact">
                  Discuss an Opportunity <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-7 rounded-full border-border hover:bg-muted font-medium text-base text-foreground transition-colors"
              >
                <a href="/SHARJIA_ADNAN_SAIMOMM.pdf" download>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-sm text-muted-foreground pt-4 border-t border-border/60">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:sarjiaadnan@gmail.com" className="hover:text-foreground transition-colors">
                  sarjiaadnan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+8801814311577" className="hover:text-foreground transition-colors">
                  +8801814311577
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Clean Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px]">
              {/* Clean Image Card */}
              <div
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border shadow-md transition-all hover:border-primary/40 cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => !uploading && fileInputRef.current?.click()}
              >
                <img
                  src={avatarUrl}
                  alt="Sharjia Adnan Saimomm"
                  className="w-full h-full object-cover object-top"
                />

                {/* Upload Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center gap-2.5 transition-opacity duration-200 ${
                    hover || uploading ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-8 w-8 text-white animate-spin" />
                      <span className="text-xs font-semibold text-white">Uploading…</span>
                    </>
                  ) : (
                    <>
                      <div className="h-11 w-11 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white">
                        <Camera className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-white">Update Photo</span>
                    </>
                  )}
                </div>
              </div>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Clean Stats Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-card border border-border shadow-lg rounded-xl p-3.5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  3+
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-semibold">Experience</div>
                  <div className="text-sm font-bold text-foreground">Years in Sales</div>
                </div>
              </div>

              {/* LinkedIn Pill */}
              <div className="absolute -top-3 -right-3 bg-card border border-border shadow-md rounded-full px-3.5 py-1.5 flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="https://www.linkedin.com/in/sharjia-adnan-saimomm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-foreground hover:text-primary transition-colors"
                >
                  Connect
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
