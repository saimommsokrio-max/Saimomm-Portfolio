import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone, Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const profilePhoto = "/images/avatar.png";


const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const badgeFloat = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  },
};

const badgeFloat2 = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
  },
};

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string>(profilePhoto);
  const [uploading, setUploading] = useState(false);
  const [hover, setHover] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    fetch("/api/upload/avatar")
      .then((r) => r.json())
      .then((data) => { if (data?.avatarUrl) setAvatarUrl(data.avatarUrl); })
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
        controls.start({ scale: [1, 1.04, 1], transition: { duration: 0.4 } });
        setAvatarUrl(data.avatarUrl);
      }
    } catch {
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-1/4 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-medium text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to new opportunities
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Sharjia Adnan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient">
                Saimomm
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed"
            >
              Business Development & Sales Professional driving revenue growth through strategic client
              acquisition and relationship management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              >
                <a href="#contact">
                  Discuss a Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-semibold border-primary/20 hover:bg-primary/10"
              >
                <a href="/SHARJIA_ADNAN_SAIMOMM.pdf" download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sarjiaadnan@gmail.com" className="hover:text-foreground transition-colors">
                  sarjiaadnan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+8801814311577" className="hover:text-foreground transition-colors">
                  +8801814311577
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo panel — with floating animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex-1 w-full max-w-[400px] lg:max-w-none relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent blur-xl pointer-events-none -z-10"
            />

            {/* Floating photo container */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="aspect-[4/5] rounded-2xl overflow-hidden relative border border-primary/20 shadow-2xl shadow-primary/10 cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => !uploading && fileInputRef.current?.click()}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Colour overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 mix-blend-overlay z-10 pointer-events-none" />

              <motion.img
                animate={controls}
                src={avatarUrl}
                alt="Sharjia Adnan Saimomm"
                className="w-full h-full object-cover object-top"
              />

              {/* Upload overlay */}
              <motion.div
                initial={false}
                animate={{ opacity: hover || uploading ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 z-20 bg-background/70 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
              >
                {uploading ? (
                  <>
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    <span className="text-sm font-semibold text-foreground">Uploading…</span>
                  </>
                ) : (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-14 w-14 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center"
                    >
                      <Camera className="h-6 w-6 text-primary" />
                    </motion.div>
                    <span className="text-sm font-bold text-foreground">Update Photo</span>
                    <span className="text-xs text-muted-foreground">JPG, PNG or WebP · max 5 MB</span>
                  </>
                )}
              </motion.div>
            </motion.div>

            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Floating badge — years */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              variants={badgeFloat}
              className="absolute -bottom-6 -left-6 bg-card border border-border shadow-xl p-4 rounded-xl flex items-center gap-4 z-20"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl"
              >
                3+
              </motion.div>
              <div className="text-sm font-medium">
                <div className="text-foreground font-bold">Years</div>
                <div className="text-muted-foreground">Experience</div>
              </div>
            </motion.div>

            {/* Floating badge — LinkedIn */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              variants={badgeFloat2}
              className="absolute -top-6 -right-6 bg-card border border-border shadow-xl p-4 rounded-xl flex items-center gap-4 z-20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary"
              >
                <Linkedin className="h-6 w-6" />
              </motion.div>
              <div className="text-sm font-medium">
                <a
                  href="https://www.linkedin.com/in/sharjia-adnan-saimomm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-bold hover:text-primary transition-colors block"
                >
                  Let's Connect
                </a>
                <div className="text-muted-foreground">on LinkedIn</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
