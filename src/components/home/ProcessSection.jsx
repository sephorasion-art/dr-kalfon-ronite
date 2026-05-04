import React from "react";
import { motion } from "framer-motion";
import { Search, FlaskConical, Sun, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyse Approfondie",
    description: "Bilan complet intégrant votre historique médical, vos habitudes alimentaires et vos objectifs personnels.",
    detail: "Explorations biologiques et anamnèse pharmaceutique"
  },
  {
    icon: FlaskConical,
    title: "Équilibre Moléculaire",
    description: "Élaboration d'un protocole nutritionnel précis, enrichi par l'expertise en pharmacologie clinique.",
    detail: "Micro et macronutriments dosés au plus juste"
  },
  {
    icon: Sun,
    title: "Luxopuncture®",
    description: "Séances de luxopuncture ciblées pour stimuler les points réflexes et rééquilibrer le système endocrinien.",
    detail: "Infrarouge non invasif sur les méridiens"
  },
  {
    icon: HeartPulse,
    title: "Vitalité Durable",
    description: "Suivi continu et ajustements pour garantir des résultats pérennes et un bien-être au quotidien.",
    detail: "Consultations de suivi et réévaluation"
  },
];

export default function ProcessSection() {
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
            Protocole de soin
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment se déroule un suivi ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement personnalisé, étape par étape, pour vous aider à atteindre vos objectifs durablement.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
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
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="text-xs font-bold text-primary/50 uppercase tracking-widest">
                      Étape {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  <div className={`flex items-center gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    <div className="precision-dot" />
                    <span className="text-xs text-primary/80 font-medium italic">{step.detail}</span>
                  </div>
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}