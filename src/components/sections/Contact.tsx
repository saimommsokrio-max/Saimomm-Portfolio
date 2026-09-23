import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, User, MessageSquare, AtSign, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FieldState {
  value: string;
  touched: boolean;
  error: string;
}

const initialField = (value = ""): FieldState => ({ value, touched: false, error: "" });

function validate(name: string, value: string): string {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      return "";
    case "email":
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address";
      return "";
    case "subject":
      if (!value.trim()) return "Subject is required";
      if (value.trim().length < 4) return "Subject must be at least 4 characters";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 15) return "Message must be at least 15 characters";
      return "";
    default:
      return "";
  }
}

export function Contact() {
  const [fields, setFields] = useState({
    name: initialField(),
    email: initialField(),
    subject: initialField(),
    message: initialField(),
  });

  const [mutation, setMutation] = useState<{ isSuccess: boolean; isPending: boolean; isError: boolean }>({
    isSuccess: false,
    isPending: false,
    isError: false,
  });

  const handleChange = useCallback((id: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [id]: {
        value,
        touched: prev[id as keyof typeof prev].touched,
        error: prev[id as keyof typeof prev].touched ? validate(id, value) : "",
      },
    }));
  }, []);

  const handleBlur = useCallback((id: string) => {
    setFields((prev) => ({
      ...prev,
      [id]: {
        ...prev[id as keyof typeof prev],
        touched: true,
        error: validate(id, prev[id as keyof typeof prev].value),
      },
    }));
  }, []);

  const isFormValid = Object.entries(fields).every(([k, v]) => !validate(k, v.value));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.entries(fields).map(([k, v]) => [k, { ...v, touched: true, error: validate(k, v.value) }])
    ) as typeof fields;
    setFields(allTouched);
    if (!isFormValid) return;

    setMutation({ isSuccess: false, isPending: true, isError: false });

    setTimeout(() => {
      setMutation({ isSuccess: true, isPending: false, isError: false });
      setFields({
        name: initialField(),
        email: initialField(),
        subject: initialField(),
        message: initialField(),
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mb-14 text-center sm:text-left"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-primary mt-3 mx-auto sm:mx-0" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info & References */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="space-y-3">
              <a
                href="mailto:sarjiaadnan@gmail.com"
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/40 shadow-2xs hover:shadow-xs transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    sarjiaadnan@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+8801814311577"
                className="group p-4 rounded-xl bg-card border border-border hover:border-primary/40 shadow-2xs hover:shadow-xs transition-all flex items-center gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    +8801814311577
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-card border border-border shadow-2xs flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="text-sm font-semibold text-foreground">Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>

            {/* References */}
            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">
                Professional References
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-muted/40 border border-border/80">
                  <p className="font-bold text-xs text-foreground mb-0.5">MD. Shahedul Islam</p>
                  <p className="text-xs text-primary font-medium mb-1">Acting Chairman, Dept. of CSE</p>
                  <p className="text-xs text-muted-foreground">Stamford University</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/40 border border-border/80">
                  <p className="font-bold text-xs text-foreground mb-0.5">Mahir Foysal</p>
                  <p className="text-xs text-primary font-medium mb-1">Head of Marketing</p>
                  <p className="text-xs text-muted-foreground">Abakash Golf Resort & City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-card border border-border shadow-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
                <p className="text-xs text-muted-foreground">I typically reply within 24 hours.</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {mutation.isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been sent to sarjiaadnan@gmail.com.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full mt-2"
                    onClick={() => setMutation({ isSuccess: false, isPending: false, isError: false })}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <User size={13} className="text-muted-foreground" /> Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        value={fields.name.value}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`bg-background text-sm rounded-xl ${
                          fields.name.touched && fields.name.error ? "border-destructive" : ""
                        }`}
                      />
                      {fields.name.touched && fields.name.error && (
                        <p className="text-xs text-destructive">{fields.name.error}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <AtSign size={13} className="text-muted-foreground" /> Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={fields.email.value}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={`bg-background text-sm rounded-xl ${
                          fields.email.touched && fields.email.error ? "border-destructive" : ""
                        }`}
                      />
                      {fields.email.touched && fields.email.error && (
                        <p className="text-xs text-destructive">{fields.email.error}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <FileText size={13} className="text-muted-foreground" /> Subject
                    </label>
                    <Input
                      placeholder="Opportunity inquiry, partnership, etc."
                      value={fields.subject.value}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      onBlur={() => handleBlur("subject")}
                      className={`bg-background text-sm rounded-xl ${
                        fields.subject.touched && fields.subject.error ? "border-destructive" : ""
                      }`}
                    />
                    {fields.subject.touched && fields.subject.error && (
                      <p className="text-xs text-destructive">{fields.subject.error}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <MessageSquare size={13} className="text-muted-foreground" /> Message
                    </label>
                    <Textarea
                      rows={4}
                      placeholder="How can I assist you or collaborate?"
                      value={fields.message.value}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`bg-background text-sm rounded-xl resize-none ${
                        fields.message.touched && fields.message.error ? "border-destructive" : ""
                      }`}
                    />
                    {fields.message.touched && fields.message.error && (
                      <p className="text-xs text-destructive">{fields.message.error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={mutation.isPending}
                    className="w-full h-11 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-all"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
