import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple, Cigarette, Moon, Sparkles, Weight, Brain, Flower2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function ServicesPreview() {
  const { t, isRTL } = useLang();

  const services = [
    { icon: Apple, title: t.servicesPreview.s1title, description: t.servicesPreview.s1desc, note: t.servicesPreview.s1note, color: "text-primary", bg: "bg-primary/10" },
    { icon: Weight, title: t.servicesPreview.s2title, description: t.servicesPreview.s2desc, note: t.servicesPreview.s2note, color: "text-accent", bg: "bg-accent/10" },
    { icon: Cigarette, title: t.servicesPreview.s3title, description: t.servicesPreview.s3desc, note: t.servicesPreview.s3note, color: "text-primary", bg: "bg-primary/10" },
    { icon: Moon, title: t.servicesPreview.s4title, description: t.servicesPreview.s4desc, note: t.servicesPreview.s4note, color: "text-accent", bg: "bg-accent/10" },
    { icon: Sparkles, title: t.servicesPreview.s5title, description: t.servicesPreview.s5desc, note: t.servicesPreview.s5note, color: "text-primary", bg: "bg-primary/10" },
    { icon: Brain, title: t.servicesPreview.s6title, description: t.servicesPreview.s6desc, note: t.servicesPreview.s6note, color: "text-accent", bg: "bg-accent/10" },
    { icon: Flower2, title: t.servicesPreview.s7title, description: t.servicesPreview.s7desc, note: t.servicesPreview.s7note, color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
            <div className="precision-dot" />
            {t.services.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 h-full">
                <div className={`inline-flex p-3 rounded-xl ${service.bg} mb-6`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                  <div className="precision-dot mt-1.5 shrink-0" />
                  <p className="text-xs text-primary/80 font-medium italic">{service.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              {t.services.more}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}