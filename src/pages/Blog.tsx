import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-3">Thoughts & Strategy</p>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Insights & Articles</h1>
              <div className="w-12 h-1 bg-secondary mb-6" />
              <p className="text-muted-foreground text-lg max-w-2xl">
                Thoughts, strategies, and experiences from the front lines of B2B sales and business development.
              </p>
            </motion.div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg flex flex-col cursor-pointer">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-4">
                      <Tag className="h-3 w-3 text-primary" />
                      <span className="text-primary font-semibold">{article.category}</span>
                      <span>•</span>
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center border-t border-border/50 mt-4">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      onClick={() => setOpenArticle(article)}
                    >
                      Read Article
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 p-10 rounded-3xl bg-card border border-border text-center"
          >
            <h3 className="text-2xl font-display font-bold mb-3">Want to Discuss These Topics?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always open to conversations about sales strategy, business development, and growth. Let's connect.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />

      {openArticle && (
        <ArticleDrawer article={openArticle} onClose={() => setOpenArticle(null)} />
      )}
    </div>
  );
}
