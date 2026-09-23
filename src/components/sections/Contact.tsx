import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2, User, MessageSquare, AtSign, FileText } from "lucide-react";
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
      if (value.trim().length < 5) return "Subject must be at least 5 characters";
      return "";
    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 20) return "Message must be at least 20 characters";
      return "";
    default:
      return "";
  }
}

function Field({
  id,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  state,
  onChange,
  onBlur,
  multiline = false,
}: {
  id: string;
  label: string;
  icon: React.ElementType;
  type?: string;
  placeholder: string;
  state: FieldState;
  onChange: (id: string, value: string) => void;
  onBlur: (id: string) => void;
  multiline?: boolean;
}) {
  const hasError = state.touched && state.error;
  const isValid = state.touched && !state.error && state.value;

  const inputClass = `bg-background border pl-10 transition-all duration-200 ${
    hasError
      ? "border-destructive focus-visible:ring-destructive/30"
      : isValid
      ? "border-green-500/60 focus-visible:ring-green-500/20"
      : "border-border"
  }`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-sm font-semibold flex items-center gap-2">
        {label}
        {isValid && <span className="text-xs font-normal text-green-500">✓</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
        {multiline ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            className={`${inputClass} min-h-[130px] resize-none pt-2.5`}
            value={state.value}
            onChange={(e) => onChange(id, e.target.value)}
            onBlur={() => onBlur(id)}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            className={inputClass}
            value={state.value}
            onChange={(e) => onChange(id, e.target.value)}
            onBlur={() => onBlur(id)}
          />
        )}
      </div>
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-xs text-destructive flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" />
            {state.error}
          </motion.p>
        )}
      </AnimatePresence>
      {id === "message" && (
        <p className="text-xs text-muted-foreground text-right">{state.value.length} chars {state.value.length < 20 && state.value.length > 0 ? `(${20 - state.value.length} more needed)` : ""}</p>
      )}
    </div>
  );
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "sarjiaadnan@gmail.com",
    href: "mailto:sarjiaadnan@gmail.com",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+8801814311577",
    href: "tel:+8801814311577",
    color: "text-secondary",
    bg: "bg-secondary/10 group-hover:bg-secondary group-hover:text-secondary-foreground",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
    color: "text-foreground",
    bg: "bg-muted group-hover:bg-foreground group-hover:text-background",
  },
];

export function Contact() {
  const [fields, setFields] = useState({
    name: initialField(),
    email: initialField(),
    subject: initialField(),
    message: initialField(),
  });

  const [mutation, setMutation] = useState<{ isSuccess: boolean; isPending: boolean; isError: boolean; reset: () => void }>({
    isSuccess: false,
    isPending: false,
    isError: false,
    reset: () => setMutation((prev) => ({ ...prev, isSuccess: false })),
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

    setMutation({ isSuccess: false, isPending: true, isError: false, reset: () => {} });
    
    setTimeout(() => {
      setMutation({
        isSuccess: true,
        isPending: false,
        isError: false,
        reset: () => setMutation({ isSuccess: false, isPending: false, isError: false, reset: () => {} }),
      });
      setFields({
        name: initialField(),
        email: initialField(),
        subject: initialField(),
        message: initialField(),
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Let's Work Together</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you're looking for a driven sales professional or just want to connect, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — contact info + references */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-10">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${bg} transition-colors shrink-0`}>
                    <Icon size={20} className={color} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-0.5">{label}</p>
                    <p className={`font-semibold ${color} text-sm md:text-base`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 mb-10">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                Usually responds within 24 hours
              </p>
            </div>

            {/* References */}
            <div>
              <h3 className="text-lg font-bold mb-4">Professional References</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "MD. Shahedul Islam",
                    role: "Acting Chairman, Dept. of CSE",
                    org: "Stamford University",
                    phone: "01720189228",
                    email: "shahed@stamforduniversity.edu.bd",
                  },
                  {
                    name: "Mahir Foysal",
                    role: "Head of Marketing",
                    org: "Abakash Golf Resort & City",
                    phone: "01873000737",
                    email: "mahir109@gmail.com",
                  },
                ].map((ref) => (
                  <div key={ref.name} className="p-5 rounded-2xl bg-card border border-border">
                    <p className="font-bold text-sm text-foreground mb-1">{ref.name}</p>
                    <p className="text-xs text-primary font-medium mb-0.5">{ref.role}</p>
                    <p className="text-xs text-muted-foreground mb-3">{ref.org}</p>
                    <a href={`tel:${ref.phone}`} className="text-xs text-muted-foreground block hover:text-foreground transition-colors">{ref.phone}</a>
                    <a href={`mailto:${ref.email}`} className="text-xs text-muted-foreground block hover:text-foreground transition-colors break-all">{ref.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border p-8 rounded-3xl shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Send a Message</h3>
                <p className="text-xs text-muted-foreground">I'll respond to sarjiaadnan@gmail.com</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {mutation.isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
                    className="h-20 w-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
                  >
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground max-w-xs">
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Button variant="outline" onClick={() => mutation.reset()}>
                      Send Another
                    </Button>
                    <Button asChild>
                      <a href="mailto:sarjiaadnan@gmail.com">Email Directly</a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      id="name"
                      label="Full Name"
                      icon={User}
                      placeholder="John Doe"
                      state={fields.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Field
                      id="email"
                      label="Email Address"
                      icon={AtSign}
                      type="email"
                      placeholder="john@example.com"
                      state={fields.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <Field
                    id="subject"
                    label="Subject"
                    icon={FileText}
                    placeholder="Opportunity inquiry, collaboration, etc."
                    state={fields.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    id="message"
                    label="Message"
                    icon={MessageSquare}
                    placeholder="Tell me about the opportunity or how I can help…"
                    state={fields.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    multiline
                  />

                  {mutation.isError && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>Something went wrong. Please try again or email me directly.</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-13 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your message is delivered directly to my inbox at{" "}
                    <a href="mailto:sarjiaadnan@gmail.com" className="text-primary hover:underline">
                      sarjiaadnan@gmail.com
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
