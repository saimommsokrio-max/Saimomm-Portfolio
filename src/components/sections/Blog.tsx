import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, X, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ARTICLES, type Article } from "@/data/articles";

export function ArticleDrawer({ article, onClose }: { article: Article; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-card border-l border-border shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-border shrink-0">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {article.readTime}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              {article.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 h-9 w-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <p className="text-muted-foreground text-base leading-relaxed pb-4 border-b border-border italic">
            {article.excerpt}
          </p>
          <div className="space-y-4 text-foreground/90 text-sm sm:text-base leading-relaxed">
            {article.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h3 key={i} className="text-lg font-bold text-foreground pt-4 pb-1 first:pt-0">
                    {block.replace("## ", "")}
                  </h3>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {block}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 p-6 border-t border-border bg-muted/20 flex gap-3">
          <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground">
            <a href="#contact" onClick={onClose}>Get in Touch</a>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={onClose}>
            Close
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BlogSection() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  return (
    <>
      <section id="blog" className="py-20 md:py-28 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Thoughts & Strategy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
                Latest Insights
              </h2>
              <div className="w-12 h-1 bg-primary mt-3" />
            </motion.div>

            <Button asChild variant="outline" className="rounded-full self-start sm:self-auto border-border hover:bg-muted font-medium">
              <Link href="/blog" className="flex items-center gap-1.5">
                Read All Articles <ArrowRight size={15} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                    <span className="text-primary font-bold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-medium">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <BookOpen size={13} /> {article.readTime}
                  </span>
                  <button
                    onClick={() => setOpenArticle(article)}
                    className="font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Read Article <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {openArticle && (
        <ArticleDrawer article={openArticle} onClose={() => setOpenArticle(null)} />
      )}
    </>
  );
}
