import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ClipboardList, Stethoscope, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";

const pricingData = {
  fr: {
    badge: "Tarifs",
    title: "Première Consultation",
    price: "590 ₪",
    duration: "1h30",
    includes: [
      { icon: ClipboardList, text: "Bilan complet personnalisé" },
      { icon: Stethoscope, text: "Programme de soin sur mesure" },
      { icon: Clock, text: "Accès au suivi et protocole de soin" },
    ],
    note: "Séances de suivi sur devis selon le protocole établi.",
    cta: "Prendre Rendez-vous",
  },
  en: {
    badge: "Pricing",
    title: "First Consultation",
    price: "590 ₪",
    duration: "1h30",
    includes: [
      { icon: ClipboardList, text: "Complete personalized assessment" },
      { icon: Stethoscope, text: "Tailored care program" },
      { icon: Clock, text: "Access to follow-up & care protocol" },
    ],
    note: "Follow-up sessions quoted according to the established protocol.",
    cta: "Book an Appointment",
  },
  he: {
    badge: "תמחור",
    title: "ייעוץ ראשון",
    price: "590 ₪",
    duration: "שעה וחצי",
    includes: [
      { icon: ClipboardList, text: "הערכה מקיפה ואישית" },
      { icon: Stethoscope, text: "תוכנית טיפול מותאמת אישית" },
      { icon: Clock, text: "גישה למעקב ופרוטוקול טיפול" },
    ],
    note: "סשנים המשך לפי הצעת מחיר בהתאם לפרוטוקול שנקבע.",
    cta: "קביעת תור",
  },
  ru: {
    badge: "Стоимость",
    title: "Первая консультация",
    price: "590 ₪",
    duration: "1ч 30мин",
    includes: [
      { icon: ClipboardList, text: "Полная персональная оценка" },
      { icon: Stethoscope, text: "Индивидуальная программа лечения" },
      { icon: Clock, text: "Доступ к наблюдению и протоколу лечения" },
    ],
    note: "Стоимость последующих сеансов — по протоколу.",
    cta: "Записаться",
  },
};

export default function PricingSection() {
  const { lang, isRTL } = useLang();
  const d = pricingData[lang] || pricingData.fr;

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
            <div className="precision-dot" />
            {d.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{d.title}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
        >
          {/* Price header */}
          <div className="bg-primary px-10 py-10 text-center">
            <div className="text-5xl font-bold text-white mb-2">{d.price}</div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
              <Clock className="w-4 h-4" />
              {d.duration}
            </div>
          </div>

          {/* Includes */}
          <div className="px-10 py-8 space-y-5">
            {d.includes.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-10 pb-10 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground text-center">{d.note}</p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
                {d.cta}
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}