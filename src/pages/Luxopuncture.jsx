import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck, Clock, Sparkles, Heart, Brain } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Non Invasif", desc: "Aucune aiguille, aucune douleur. La lumière infrarouge agit en douceur." },
  { icon: ShieldCheck, title: "Sans Effets Secondaires", desc: "Une technique naturelle, sans substances chimiques ni médicaments." },
  { icon: Clock, title: "Résultats Rapides", desc: "Des effets perceptibles dès les premières séances." },
  { icon: Sparkles, title: "Polyvalent", desc: "Addictions, poids, sommeil, stress, rajeunissement — un seul appareil." },
  { icon: Heart, title: "Bien-être Global", desc: "Stimule la production d'endorphines et de sérotonine." },
  { icon: Brain, title: "Scientifiquement Fondé", desc: "Basée sur les principes de la médecine traditionnelle et la technologie moderne." },
];

const indications = [
  "Perte de poids et réduction des compulsions alimentaires",
  "Arrêt du tabac et gestion des addictions",
  "Relaxation profonde et gestion du stress",
  "Amélioration de la qualité du sommeil",
  "Rajeunissement facial naturel",
  "Ménopause et troubles hormonaux",
  "Troubles digestifs fonctionnels",
];

export default function Luxopuncture() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/543c22812_generated_652e5d3b.png"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <div className="w-2 h-2 rounded-full bg-accent glow-amber" />
              Technologie de Lumière
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              La Luxopuncture
              <br />
              <span className="text-primary">L'Innovation par la Lumière</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La luxopuncture utilise un faisceau infrarouge pour stimuler les points réflexes 
              du corps, sans aiguille et sans douleur. Cette technique rééquilibre le système 
              endocrinien et favorise la production naturelle d'hormones du bien-être.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
                  alt="Technique de luxopuncture par lumière infrarouge"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
                <div className="precision-dot" />
                Comment ça marche
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Le Principe de la Luxopuncture
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  La luxopuncture est une technique réflexe qui utilise un rayonnement 
                  infrarouge (non laser) pour stimuler les points réflexes du corps — 
                  les mêmes utilisés en acupuncture traditionnelle, mais <strong className="text-foreground">sans aiguille</strong>.
                </p>
                <p>
                  Cette stimulation douce permet de rééquilibrer la production de quatre 
                  hormones essentielles au bien-être : <strong className="text-foreground">endorphines, sérotonine, mélatonine et dopamine</strong>.
                </p>
                <p>
                  L'expertise de Dr. Kalfon en pharmacologie lui permet de cibler avec 
                  une précision unique les points les plus pertinents pour chaque pathologie.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pourquoi Choisir la Luxopuncture ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Indications</h2>
            <p className="text-muted-foreground">
              La luxopuncture est particulièrement efficace pour les problématiques suivantes :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {indications.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50">
                <div className="precision-dot mt-2 shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Essayez la Luxopuncture
          </h2>
          <p className="text-muted-foreground mb-8">
            Prenez rendez-vous pour votre première séance et découvrez les bienfaits 
            de cette technique innovante.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 gap-2 h-14 text-base">
              Réserver une Séance
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}