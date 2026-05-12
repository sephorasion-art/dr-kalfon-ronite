import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ClipboardList, Stethoscope, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";

const pricingData = {
  fr: {
    label: "Tarifs",
    title: "Nos Tarifs",
    first: { title: "Première Consultation", price: "590 ₪", duration: "1h30", includes: ["Bilan complet personnalisé", "Programme de soin sur mesure", "Accès au suivi et protocole de soin"] },
    followup: { title: "Consultation de Suivi", price: "300 ₪", note: "Séance plus courte dédiée à l'ajustement du protocole en cours et au suivi de votre progression." },
    cta: "Prendre Rendez-vous",
  },
  en: {
    label: "Pricing",
    title: "Our Pricing",
    first: { title: "First Consultation", price: "590 ₪", duration: "1h30", includes: ["Complete personalized assessment", "Tailored care program", "Access to follow-up & care protocol"] },
    followup: { title: "Follow-up Consultation", price: "300 ₪", note: "A shorter session dedicated to adjusting your protocol and tracking your progress." },
    cta: "Book an Appointment",
  },
  he: {
    label: "תמחור",
    title: "המחירים שלנו",
    first: { title: "ייעוץ ראשון", price: "590 ₪", duration: "שעה וחצי", includes: ["הערכה מקיפה ואישית", "תוכנית טיפול מותאמת אישית", "גישה למעקב ופרוטוקול טיפול"] },
    followup: { title: "ייעוץ המשך", price: "300 ₪", note: "פגישה קצרה יותר להתאמת הפרוטוקול ומעקב אחר ההתקדמות שלכם." },
    cta: "קביעת תור",
  },
  ru: {
    label: "Стоимость",
    title: "Наши тарифы",
    first: { title: "Первая консультация", price: "590 ₪", duration: "1ч 30мин", includes: ["Полная персональная оценка", "Индивидуальная программа лечения", "Доступ к наблюдению и протоколу"] },
    followup: { title: "Консультация по наблюдению", price: "300 ₪", note: "Более короткий сеанс для корректировки протокола и отслеживания вашего прогресса." },
    cta: "Записаться",
  },
};

const icons = [ClipboardList, Stethoscope, Clock];

export default function Pricing() {
  const { lang, isRTL } = useLang();
  const d = pricingData[lang] || pricingData.fr;
  const [active, setActive] = useState("first");

  return (
    <div className="pt-20">
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {d.label}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{d.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-muted rounded-full p-1 gap-1">
              <button
                onClick={() => setActive("first")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === "first"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.first.title}
              </button>
              <button
                onClick={() => setActive("followup")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === "followup"
                    ? "bg-primary text-primary-foreground shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.followup.title}
              </button>
            </div>
          </div>

          {/* Card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden"
          >
            <div className="bg-primary px-8 py-10 text-center">
              <div className="text-5xl font-bold text-white mb-2">
                {active === "first" ? d.first.price : d.followup.price}
              </div>
              {active === "first" && (
                <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                  <Clock className="w-4 h-4" />
                  {d.first.duration}
                </div>
              )}
            </div>

            <div className="px-8 py-8 space-y-4">
              {active === "first"
                ? d.first.includes.map((text, i) => {
                    const Icon = icons[i];
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground text-sm font-medium">{text}</span>
                      </div>
                    );
                  })
                : <p className="text-muted-foreground text-sm">{d.followup.note}</p>
              }
            </div>
          </motion.div>

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
    </div>
  );
}