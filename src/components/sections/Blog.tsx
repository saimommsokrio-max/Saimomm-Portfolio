import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, X, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

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
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" /> {article.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" /> {article.readTime}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground leading-snug">
              {article.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 h-9 w-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-6">
          <p className="text-muted-foreground text-base leading-relaxed mb-8 pb-8 border-b border-border italic">
            {article.excerpt}
          </p>
          <div className="prose prose-sm prose-invert max-w-none">
            {article.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h3 key={i} className="text-lg font-bold text-foreground mt-8 mb-3 first:mt-0">
                    {block.replace("## ", "")}
                  </h3>
                );
              }
              if (block.startsWith("**") && block.endsWith("**")) {
                return (
                  <p key={i} className="font-semibold text-foreground mb-3">
                    {block.replace(/\*\*/g, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {block.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="text-foreground font-semibold">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="shrink-0 p-6 border-t border-border bg-background/50">
          <p className="text-sm text-muted-foreground mb-4">Found this useful? Let's connect.</p>
          <div className="flex gap-3">
            <Button asChild size="sm">
              <a href="/#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="sm" onClick={onClose}>
              Back to Articles
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BlogSection() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  return (
    <>
      <section id="blog" className="py-24 md:py-32 relative bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">From My Desk</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Latest Insights</h2>
              <div className="w-12 h-1 bg-secondary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Button asChild variant="ghost" className="group">
                <Link href="/blog" className="flex items-center">
                  Read All Articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-background overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
                      <Tag className="h-3 w-3 text-primary" />
                      <span className="text-primary">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center border-t border-border/50 mt-4">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <Button
                      variant="link"
                      className="p-0 h-auto group/btn text-secondary hover:text-primary"
                      onClick={() => setOpenArticle(article)}
                    >
                      Read Article
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
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
