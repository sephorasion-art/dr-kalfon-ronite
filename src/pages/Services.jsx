import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Apple, Weight, Cigarette, Moon, Sparkles, Brain, Flower2, ArrowRight, ArrowLeft, CheckCircle2 } from
"lucide-react";
import { useLang } from "@/lib/LanguageContext";

const icons = [Apple, Weight, Cigarette, Moon, Sparkles, Brain, Flower2];
const images = [
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/47c7a5246_generated_71578a0c.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png",
"https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"];


export default function Services() {
  const { t, isRTL } = useLang();
  const services = t.servicesPage.s.map((s, i) => ({ ...s, icon: icons[i], image: images[i], id: i }));
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center">
            
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {t.services.pageLabel}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.services.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.services.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
            index % 2 === 1 ? "lg:direction-rtl" : ""}`
            }>
            
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.benefits.map((benefit) =>
                <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                )}
                </div>

                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
                    {t.services.rdvBtn}
                    {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Button>
                </Link>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative`}>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/3c414395a_ronit_expertise_nutri1.jpeg"

                alt={service.title}
                className="w-full h-[350px] object-cover" />
                
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t.services.cta}
          </h2>
          <p className="text-muted-foreground mb-8">
            {t.services.ctaDesc}
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 gap-2 h-14 text-base">
              {t.services.ctaBtn}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}