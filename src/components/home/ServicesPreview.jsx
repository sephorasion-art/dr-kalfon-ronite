import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple, Cigarette, Moon, Sparkles, Weight, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Apple,
    title: "Nutrition Clinique",
    description: "Programmes nutritionnels personnalisés fondés sur une analyse pharmaceutique précise de vos besoins.",
    note: "Prescription adaptée à votre profil biologique",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Weight,
    title: "Perte de Poids",
    description: "Réduction des compulsions alimentaires par luxopuncture et suivi diététique sur mesure.",
    note: "Stimulation des points réflexes endocriniens",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Cigarette,
    title: "Arrêt du Tabac",
    description: "Protocole de sevrage tabagique associant luxopuncture et accompagnement personnalisé.",
    note: "Action sur les récepteurs de dépendance",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Moon,
    title: "Sommeil & Relaxation",
    description: "Amélioration de la qualité du sommeil et gestion du stress par stimulation infrarouge.",
    note: "Régulation du cycle circadien",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Sparkles,
    title: "Rajeunissement Facial",
    description: "Stimulation naturelle de la production de collagène et d'élastine par la lumière.",
    note: "Activation cellulaire non invasive",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Addictions",
    description: "Prise en charge des comportements addictifs grâce à la luxopuncture et un suivi global.",
    note: "Rééquilibrage du système endocrinien",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function ServicesPreview() {
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
            Écosystème de soins
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vos Objectifs, Notre Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chaque traitement est conçu avec la rigueur d'un docteur en pharmacie 
            et la douceur d'une approche holistique.
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
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-start gap-2 pt-4 border-t border-border/50">
                  <div className="precision-dot mt-1.5 shrink-0" />
                  <p className="text-xs text-primary/80 font-medium italic">
                    {service.note}
                  </p>
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
              Voir tous les services
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}