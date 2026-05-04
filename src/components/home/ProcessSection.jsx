import React from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, Sun, HeartPulse } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function ProcessSection() {
  const { t } = useLang();

  const steps = [
    {
      icon: Search,
      title: t.process.s1title,
      description: t.process.s1desc,
      detail: t.process.s1detail,
    },
    {
      icon: FlaskConical,
      title: t.process.s2title,
      description: t.process.s2desc,
      detail: t.process.s2detail,
    },
    {
      icon: Sun,
      title: t.process.s3title,
      description: t.process.s3desc,
      detail: t.process.s3detail,
    },
    {
      icon: HeartPulse,
      title: t.process.s4title,
      description: t.process.s4desc,
      detail: t.process.s4detail,
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
            <div className="precision-dot" />
            {t.process.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-px" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-xs font-bold text-primary/50 uppercase tracking-widest">
                      {t.process.step} {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className={`flex items-center gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <div className="precision-dot" />
                    <span className="text-xs text-primary/80 font-medium italic">{step.detail}</span>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}