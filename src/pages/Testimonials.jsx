import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";
import { testimonials } from "@/lib/testimonials";

const categories = ["all", "weight", "pharma", "wellbeing"];

export default function Testimonials() {
  const { t } = useLang();
  const [category, setCategory] = useState("all");
  const copy = t.testimonials;
  const visible = testimonials.filter((item) => category === "all" || item.category === category);

  return (
    <div className="pt-20">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {t.nav.testimonials}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{copy.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{copy.subtitle}</p>
            <p className="text-sm text-muted-foreground mt-3">{copy.original}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div role="group" aria-label={copy.filters} className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={category === key}
                aria-controls="testimonials-list"
                onClick={() => setCategory(key)}
                className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  category === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-secondary"
                }`}
              >
                {copy[key]}
              </button>
            ))}
          </div>
          <p role="status" className="text-center text-sm text-muted-foreground mb-10">
            {visible.length} {copy.count}
          </p>
          <div id="testimonials-list" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visible.map((item) => (
              <figure key={item.name} className="bg-card rounded-2xl border border-border p-7 flex flex-col">
                <Quote aria-hidden="true" className="w-8 h-8 text-primary mb-5 shrink-0" />
                <blockquote lang="fr" dir="ltr" className="text-foreground leading-relaxed flex-1">
                  <p>« {item.quote} »</p>
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p lang="fr" dir="ltr" className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-primary mt-1">{copy[item.category]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{copy.cta}</h2>
          <Button asChild className="rounded-full px-8">
            <Link to="/contact">{t.nav.rdv}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
