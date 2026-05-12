import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Apple, Weight, Cigarette, Moon, Sparkles, Brain, ArrowRight, ArrowLeft, CheckCircle2
} from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const services = [
  {
    id: "nutrition",
    icon: Apple,
    title: "Nutrition Clinique & Suivi Diététique",
    subtitle: "Un programme sur mesure, guidé par la science",
    description: "Grâce à son doctorat en pharmacie, Dr. Kalfon élabore des programmes nutritionnels d'une précision inégalée. Chaque prescription tient compte de votre profil biologique complet, de vos interactions médicamenteuses et de vos besoins physiologiques spécifiques.",
    benefits: [
      "Bilan nutritionnel approfondi et personnalisé",
      "Plans alimentaires adaptés à votre profil médical",
      "Suivi régulier et ajustements dynamiques",
      "Complémentation nutritionnelle ciblée",
      "Prise en compte des interactions médicamenteuses"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/47c7a5246_generated_71578a0c.png"
  },
  {
    id: "weight",
    icon: Weight,
    title: "Perte de Poids",
    subtitle: "Libérez-vous des compulsions alimentaires",
    description: "La luxopuncture agit sur les points réflexes du système endocrinien pour réduire les compulsions alimentaires de manière naturelle. Associée à un suivi diététique rigoureux, cette approche offre des résultats durables.",
    benefits: [
      "Réduction naturelle de l'appétit",
      "Diminution des compulsions alimentaires",
      "Rééquilibrage hormonal endocrinien",
      "Programme alimentaire personnalisé",
      "Suivi sur la durée pour des résultats pérennes"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
  },
  {
    id: "tabac",
    icon: Cigarette,
    title: "Arrêt du Tabac",
    subtitle: "Protocole de sevrage en douceur",
    description: "La luxopuncture stimule la production d'endorphines naturelles, réduisant significativement les symptômes de sevrage et les envies. Un accompagnement complet pour une libération définitive.",
    benefits: [
      "Réduction rapide des envies de fumer",
      "Atténuation des symptômes de sevrage",
      "Stimulation naturelle des endorphines",
      "Gestion du stress post-arrêt",
      "Prévention de la prise de poids associée"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
  },
  {
    id: "sommeil",
    icon: Moon,
    title: "Sommeil & Relaxation",
    subtitle: "Retrouvez un sommeil réparateur",
    description: "En agissant sur les méridiens liés au cycle circadien, la luxopuncture aide à réguler naturellement le sommeil et à réduire le stress chronique, sans recours aux médicaments.",
    benefits: [
      "Régulation du cycle circadien",
      "Réduction du stress et de l'anxiété",
      "Amélioration de la qualité du sommeil",
      "Détente profonde dès la première séance",
      "Alternative naturelle aux somnifères"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
  },
  {
    id: "rajeunissement",
    icon: Sparkles,
    title: "Rajeunissement Facial",
    subtitle: "Éclat naturel, sans injection",
    description: "La stimulation par lumière infrarouge active naturellement la production de collagène et d'élastine. Un soin non invasif qui révèle l'éclat de votre peau.",
    benefits: [
      "Stimulation naturelle du collagène",
      "Amélioration du teint et de l'éclat",
      "Réduction des ridules",
      "Raffermissement cutané visible",
      "Zéro injection, zéro douleur"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
  },
  {
    id: "addictions",
    icon: Brain,
    title: "Gestion des Addictions",
    subtitle: "Rééquilibrage profond du système nerveux",
    description: "La luxopuncture offre un soutien précieux dans la prise en charge des comportements addictifs en rééquilibrant le système endocrinien et en favorisant la production naturelle de neurotransmetteurs.",
    benefits: [
      "Rééquilibrage du système endocrinien",
      "Soutien au sevrage comportemental",
      "Stimulation des neurotransmetteurs du bien-être",
      "Accompagnement global et personnalisé",
      "Approche non médicamenteuse"
    ],
    image: "https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
  },
];

export default function Services() {
  const { t, isRTL } = useLang();
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
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
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
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
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
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
    </div>
  );
}