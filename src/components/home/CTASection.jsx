import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function CTASection() {
  const { t, isRTL } = useLang();
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/543c22812_generated_652e5d3b.png"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t.cta.title1}
            <br />
            <span className="text-primary">{t.cta.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 gap-2 text-base h-14">
                {t.cta.btn}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}