import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ClipboardList, Stethoscope, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";

const pricingData = {
  fr: {
    badge: "Tarifs",
    first: { title: "Première Consultation", price: "590 ₪", duration: "1h30", includes: ["Bilan complet personnalisé", "Programme de soin sur mesure", "Accès au suivi et protocole de soin"] },
    followup: { title: "Consultation de Suivi", price: "300 ₪", note: "Séance plus courte, ajustement du protocole en cours." },
    cta: "Prendre Rendez-vous",
  },
  en: {
    badge: "Pricing",
    first: { title: "First Consultation", price: "590 ₪", duration: "1h30", includes: ["Complete personalized assessment", "Tailored care program", "Access to follow-up & care protocol"] },
    followup: { title: "Follow-up Consultation", price: "300 ₪", note: "Shorter session, protocol adjustment in progress." },
    cta: "Book an Appointment",
  },
  he: {
    badge: "תמחור",
    first: { title: "ייעוץ ראשון", price: "590 ₪", duration: "שעה וחצי", includes: ["הערכה מקיפה ואישית", "תוכנית טיפול מותאמת אישית", "גישה למעקב ופרוטוקול טיפול"] },
    followup: { title: "ייעוץ המשך", price: "300 ₪", note: "פגישה קצרה יותר, התאמת הפרוטוקול." },
    cta: "קביעת תור",
  },
  ru: {
    badge: "Стоимость",
    first: { title: "Первая консультация", price: "590 ₪", duration: "1ч 30мин", includes: ["Полная персональная оценка", "Индивидуальная программа лечения", "Доступ к наблюдению и протоколу"] },
    followup: { title: "Консультация по наблюдению", price: "300 ₪", note: "Более короткий сеанс, корректировка протокола." },
    cta: "Записаться",
  },
};

export default function PricingSection() {
  const { lang, isRTL } = useLang();
  const d = pricingData[lang] || pricingData.fr;
  const icons = [ClipboardList, Stethoscope, Clock];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
            <div className="precision-dot" />
            {d.badge}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First consultation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          >
            <div className="bg-primary px-8 py-8 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">{d.first.title}</h3>
              <div className="text-5xl font-bold text-white mb-2">{d.first.price}</div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                <Clock className="w-4 h-4" />
                {d.first.duration}
              </div>
            </div>
            <div className="px-8 py-6 space-y-4">
              {d.first.includes.map((text, i) => {
                const Icon = icons[i];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Follow-up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          >
            <div className="bg-primary/80 px-8 py-8 text-center">
              <h3 className="text-white font-semibold text-lg mb-2">{d.followup.title}</h3>
              <div className="text-5xl font-bold text-white mb-2">{d.followup.price}</div>
            </div>
            <div className="px-8 py-6 flex flex-col justify-between h-[calc(100%-160px)]">
              <p className="text-muted-foreground text-sm">{d.followup.note}</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
              {d.cta}
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}