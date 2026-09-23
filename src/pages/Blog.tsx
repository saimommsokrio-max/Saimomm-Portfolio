import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ARTICLES, type Article } from "@/data/articles";
import { ArticleDrawer } from "@/components/sections/Blog";

export default function Blog() {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const categories = [...new Set(ARTICLES.map((a) => a.category))];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <Navbar />
      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-3 text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Insights & Strategy</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                Articles & Sales Perspectives
              </h1>
              <div className="w-12 h-1 bg-primary mb-5" />
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
                Practical insights on modern B2B sales cycles, lead generation strategy, and pipeline building.
              </p>
            </motion.div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-foreground border border-border"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setOpenArticle(article)}
                className="group p-6 rounded-2xl bg-card border border-border shadow-2xs hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-3">
                    <span className="text-primary font-bold">{article.category}</span>
                    <span>•</span>
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock size={13} /> {article.readTime}
                  </span>
                  <span className="text-primary group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />

      {openArticle && (
        <ArticleDrawer article={openArticle} onClose={() => setOpenArticle(null)} />
      )}
    </div>
  );
}
