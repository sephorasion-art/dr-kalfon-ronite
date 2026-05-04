import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ShieldCheck, Clock, Sparkles, Heart, Brain, ChevronDown } from "lucide-react";

const hormones = [
  {
    name: "Endorphine",
    subtitle: "L'hormone du bien-être",
    color: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
    description:
      "Libérée lors de l'effort sportif, elle procure un sentiment de bien-être et de plénitude. Elle a également une action antalgique. En manquer peut générer de la nervosité et de l'irritabilité.",
  },
  {
    name: "Dopamine",
    subtitle: "L'hormone du plaisir",
    color: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
    description:
      "Un déficit de dopamine est associé au désintérêt de la vie, voire la dépression. Il augmenterait également l'envie irrépressible de consommer des aliments sucrés ou gras, de fumer…",
  },
  {
    name: "Sérotonine",
    subtitle: "L'hormone du bonheur",
    color: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
    description:
      "Elle a un effet anti-dépresseur et régule le sentiment de satiété. Un taux optimal évite l'attirance vers le sucre. En manquer favorise les grignotages compulsifs et une prise de poids.",
  },
  {
    name: "Mélatonine",
    subtitle: "L'hormone du sommeil",
    color: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
    description:
      "Synthétisée à partir de la sérotonine, elle régule notre horloge biologique. Quand elle est déficitaire, l'endormissement est difficile, le sommeil perturbé, avec un risque d'anxiété et de dépendances.",
  },
];

const benefits = [
  { icon: Zap, title: "Non Invasif", desc: "Aucune aiguille, aucune douleur. Un faisceau infrarouge indolore stimule les points réflexes." },
  { icon: ShieldCheck, title: "Sans Effets Secondaires", desc: "Technique naturelle, sans substances chimiques ni médicaments." },
  { icon: Clock, title: "Séances de 30 min", desc: "Une séance par semaine, une trentaine de points stimulés, des résultats progressifs et durables." },
  { icon: Sparkles, title: "Polyvalent", desc: "Addictions, poids, sommeil, stress, ménopause, rajeunissement — un seul protocole." },
  { icon: Heart, title: "Bien-être Global", desc: "Rééquilibre naturellement endorphines, dopamine, sérotonine et mélatonine." },
  { icon: Brain, title: "Fondé Scientifiquement", desc: "Basée sur la réflexothérapie et la stimulation du système nerveux végétatif (hypothalamus / hypophyse)." },
];

const indications = [
  "Perte de poids et réduction des compulsions alimentaires",
  "Arrêt du tabac et gestion des dépendances (tabac, alcool…)",
  "Relaxation profonde et gestion du stress chronique",
  "Amélioration de la qualité du sommeil",
  "Rajeunissement facial naturel (peau du visage, jambes légères)",
  "Troubles liés à la ménopause",
  "États anxieux et troubles de l'humeur",
  "Troubles du comportement alimentaire",
];

const faqs = [
  {
    q: "Quelle différence avec l'acupuncture et la digitopuncture ?",
    a: "Les 3 techniques sont basées sur la stimulation de points réflexes et d'auriculothérapie. La Luxopuncture® utilise un faisceau infrarouge indolore. L'acupuncture est un geste médical avec des aiguilles. La digitopuncture utilise la pression mécanique du doigt ou d'un stylet.",
  },
  {
    q: "Les effets tiennent-ils dans le temps ?",
    a: "Oui, les effets tiennent très bien dans le temps. Si besoin, des séances d'entretien peuvent être effectuées après la cure initiale.",
  },
  {
    q: "À partir de quel âge peut-on pratiquer la Luxopuncture® ?",
    a: "Les soins peuvent être pratiqués sur les enfants et les adolescents. Pour l'amincissement des jeunes en phase de croissance, le suivi alimentaire doit se faire sous contrôle médical.",
  },
  {
    q: "Peut-on interrompre une cure pendant les vacances ?",
    a: "Les cures d'amincissement, relaxation et visage peuvent être interrompues. Pour le sevrage tabagique (cure sur 3 à 5 jours consécutifs), il vaut mieux éviter toute interruption.",
  },
  {
    q: "Y a-t-il des contre-indications ?",
    a: "Par principe de précaution, les cures sont déconseillées aux femmes enceintes, aux personnes atteintes de maladies graves ou de troubles épileptiques. L'amincissement chez les enfants en croissance nécessite une surveillance médicale.",
  },
  {
    q: "Existe-t-il des études scientifiques sur la Luxopuncture® ?",
    a: "Oui. Des études cliniques ont été menées, notamment une évaluation clinique indépendante (Dr Vaillant) et une étude sur les symptômes de la pré-ménopause. Ces travaux démontrent l'efficacité et la tolérance de la technique.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Luxopuncture() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/__generating__/img_356de0a2bb9c.png"
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
              <div className="w-2 h-2 rounded-full bg-accent" />
              Technologie Réflexe Infrarouge
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              La Luxopuncture®
              <br />
              <span className="text-primary">L'Innovation par la Lumière</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technologie réflexe par rayonnement infrarouge, non invasive et indolore, 
              qui s'inscrit dans la lignée des techniques énergétiques ancestrales. 
              Elle rétablit l'équilibre fonctionnel de l'organisme en agissant sur les 
              systèmes hormonal, digestif et lymphatique.
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
              <div className="rounded-3xl overflow-hidden bg-white shadow-xl flex items-center justify-center p-8">
                <img
                  src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/b21167ef3_BELUXO-FOND-BLANC-copie.jpg"
                  alt="Appareil Beluxo de Luxopuncture®"
                  className="w-full max-h-[380px] object-contain drop-shadow-xl"
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
                Mode d'action
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Comment fonctionne la Luxopuncture® ?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L'énergie du rayonnement infrarouge est transférée aux terminaisons nerveuses 
                  qui constituent le point réflexe. Cette stimulation agit sur le <strong className="text-foreground">système nerveux végétatif</strong>, 
                  visant à rétablir l'équilibre fonctionnel du système hormonal.
                </p>
                <p>
                  Deux organes clés sont ciblés : <strong className="text-foreground">l'hypothalamus et l'hypophyse</strong>, 
                  situés dans le cerveau, qui régulent le système nerveux autonome, la sécrétion 
                  de neurohormones et les fonctions comportementales (alimentation, dépendances, 
                  stress, cycles veille-sommeil…).
                </p>
                <p>
                  Les soins se déroulent à raison d'<strong className="text-foreground">une séance de 30 minutes par semaine</strong>, 
                  pendant laquelle une trentaine de points sont stimulés. La technique est 
                  douce, indolore, non invasive et sans risque.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Hormones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              Mécanisme hormonal
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              4 Hormones Essentielles Rééquilibrées
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ces quatre hormones jouent un rôle essentiel dans nos ressentis, nos variations 
              d'humeur et de comportements. La Luxopuncture® contribue naturellement à leur rééquilibrage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {hormones.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-6 ${h.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${h.dot}`} />
                  <div>
                    <span className="font-bold text-lg">{h.name}</span>
                    <span className="text-sm opacity-70 ml-2">— {h.subtitle}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pourquoi Choisir la Luxopuncture® ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Indications</h2>
            <p className="text-muted-foreground">
              La Luxopuncture® est particulièrement efficace pour rééquilibrer l'organisme et :
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {indications.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border/50">
                <div className="precision-dot mt-2 shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              Questions fréquentes
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              Tout savoir sur la Luxopuncture®
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Essayez la Luxopuncture®
          </h2>
          <p className="text-muted-foreground mb-8">
            Prenez rendez-vous pour votre première séance et découvrez les bienfaits 
            de cette technique innovante, guidée par l'expertise de Dr. Ronit Kalfon.
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