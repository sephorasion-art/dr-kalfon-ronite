import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck, Clock, Sparkles, Heart, Brain, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Luxopuncture() {
  const { t } = useLang();
  const lx = t.luxo;

  const hormones = [
    { name: lx.h1name, subtitle: lx.h1sub, color: "bg-primary/10 text-primary border-primary/20", dot: "bg-primary", description: lx.h1desc },
    { name: lx.h2name, subtitle: lx.h2sub, color: "bg-accent/10 text-accent border-accent/20", dot: "bg-accent", description: lx.h2desc },
    { name: lx.h3name, subtitle: lx.h3sub, color: "bg-primary/10 text-primary border-primary/20", dot: "bg-primary", description: lx.h3desc },
    { name: lx.h4name, subtitle: lx.h4sub, color: "bg-accent/10 text-accent border-accent/20", dot: "bg-accent", description: lx.h4desc },
  ];

  const benefits = [
    { icon: Zap, title: lx.b1title, desc: lx.b1desc },
    { icon: ShieldCheck, title: lx.b2title, desc: lx.b2desc },
    { icon: Clock, title: lx.b3title, desc: lx.b3desc },
    { icon: Sparkles, title: lx.b4title, desc: lx.b4desc },
    { icon: Heart, title: lx.b5title, desc: lx.b5desc },
    { icon: Brain, title: lx.b6title, desc: lx.b6desc },
  ];

  const indications = [lx.i1, lx.i2, lx.i3, lx.i4, lx.i5, lx.i6, lx.i7, lx.i8];

  const faqs = [
    { q: lx.faq1q, a: lx.faq1a },
    { q: lx.faq2q, a: lx.faq2a },
    { q: lx.faq3q, a: lx.faq3a },
    { q: lx.faq4q, a: lx.faq4a },
    { q: lx.faq5q, a: lx.faq5a },
    { q: lx.faq6q, a: lx.faq6a },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-accent" />
              {lx.heroBadge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {lx.heroTitle1}
              <br />
              <span className="text-primary">{lx.heroTitle2}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {lx.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-3xl overflow-hidden bg-white shadow-xl flex items-center justify-center p-8">
                <img
                  src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/b21167ef3_BELUXO-FOND-BLANC-copie.jpg"
                  alt="Appareil Beluxo de Luxopuncture®"
                  className="w-full max-h-[380px] object-contain drop-shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
                <div className="precision-dot" />
                {lx.howBadge}
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{lx.howTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: lx.howP1 }} />
                <p dangerouslySetInnerHTML={{ __html: lx.howP2 }} />
                <p dangerouslySetInnerHTML={{ __html: lx.howP3 }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Hormones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {lx.hormonesBadge}
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{lx.hormonesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{lx.hormonesDesc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {hormones.map((h, i) => (
              <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-2xl border p-6 ${h.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${h.dot}`} />
                  <div>
                    <span className="font-bold text-lg">{h.name}</span>
                    <span className="text-sm opacity-70 ml-2">— {h.subtitle}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">{lx.benefitsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{lx.indicationsTitle}</h2>
            <p className="text-muted-foreground">{lx.indicationsDesc}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {indications.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50">
                <div className="precision-dot mt-2 shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {lx.faqBadge}
            </div>
            <h2 className="text-3xl font-bold text-foreground">{lx.faqTitle}</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">{lx.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{lx.ctaDesc}</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 gap-2 h-14 text-base">
              {lx.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}