import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ClipboardList, Stethoscope, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";

const pricingData = {
  fr: {
    label: "Tarifs",
    title: "Nos Tarifs",
    first: { title: "Première Consultation", price: "590 ₪", duration: "2h", includes: ["Bilan complet personnalisé : analyse de votre profil biologique, antécédents médicaux et objectifs", "Programme de soin sur mesure : protocole nutritionnel et/ou luxopuncture adapté à votre métabolisme", "Évaluation des interactions médicamenteuses et besoins spécifiques", "Plan d'action détaillé avec recommandations précises"] },
    followup: { title: "Consultation de Suivi", price: "330 ₪", duration: "1h", includes: ["Évaluation de votre progression et des résultats obtenus", "Ajustement du protocole en cours selon votre évolution", "Séance de luxopuncture si nécessaire", "Accompagnement continu et conseils personnalisés"] },
    cta: "Prendre Rendez-vous",
  },
  en: {
    label: "Pricing",
    title: "Our Pricing",
    first: { title: "First Consultation", price: "590 ₪", duration: "2h", includes: ["Complete personalized assessment: analysis of your biological profile, medical history and goals", "Tailored care program: nutritional and/or luxopuncture protocol adapted to your metabolism", "Evaluation of drug interactions and specific needs", "Detailed action plan with precise recommendations"] },
    followup: { title: "Follow-up Consultation", price: "330 ₪", duration: "1h", includes: ["Evaluation of your progress and results achieved", "Adjustment of the current protocol based on your evolution", "Luxopuncture session if needed", "Continuous support and personalized advice"] },
    cta: "Book an Appointment",
  },
  he: {
    label: "תמחור",
    title: "המחירים שלנו",
    first: { title: "ייעוץ ראשון", price: "590 ₪", duration: "שעתיים", includes: ["הערכה מקיפה ואישית: ניתוח הפרופיל הביולוגי, ההיסטוריה הרפואית והמטרות שלכם", "תוכנית טיפול מותאמת אישית: פרוטוקול תזונתי ו/או לוקסופונקטורה מותאם לחילוף החומרים שלכם", "הערכת אינטראקציות תרופתיות וצרכים ספציפיים", "תוכנית פעולה מפורטת עם המלצות מדויקות"] },
    followup: { title: "ייעוץ המשך", price: "330 ₪", duration: "שעה", includes: ["הערכת ההתקדמות והתוצאות שהושגו", "התאמת הפרוטוקול הנוכחי לפי ההתפתחות שלכם", "סשן לוקסופונקטורה במידת הצורך", "ליווי מתמשך וייעוץ אישי"] },
    cta: "קביעת תור",
  },
  ru: {
    label: "Стоимость",
    title: "Наши тарифы",
    first: { title: "Первая консультация", price: "590 ₪", duration: "2 часа", includes: ["Полная персональная оценка: анализ вашего биологического профиля, медицинской истории и целей", "Индивидуальная программа: нутрициологический и/или люксопунктурный протокол, адаптированный к вашему метаболизму", "Оценка лекарственных взаимодействий и специфических потребностей", "Подробный план действий с точными рекомендациями"] },
    followup: { title: "Консультация по наблюдению", price: "330 ₪", duration: "1 час", includes: ["Оценка вашего прогресса и достигнутых результатов", "Корректировка текущего протокола по вашей эволюции", "Сеанс люксопунктуры при необходимости", "Непрерывное сопровождение и персональные советы"] },
    cta: "Записаться",
  },
};

const icons = [ClipboardList, Stethoscope, TrendingUp, Clock];

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
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
                <Clock className="w-4 h-4" />
                {active === "first" ? d.first.duration : d.followup.duration}
              </div>
            </div>

            <div className="px-8 py-8 space-y-4">
              {(active === "first" ? d.first.includes : d.followup.includes).map((text, i) => {
                const Icon = icons[i % icons.length];
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