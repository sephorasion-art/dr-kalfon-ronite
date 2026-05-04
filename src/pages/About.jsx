import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Stethoscope, Award, Users } from "lucide-react";

const milestones = [
  { year: "Doctorat", title: "Docteur en Pharmacie", desc: "Formation approfondie en pharmacologie, biochimie et sciences du médicament." },
  { year: "Spécialisation", title: "Nutrition Clinique", desc: "Expertise en micronutrition et suivi diététique personnalisé." },
  { year: "Innovation", title: "Luxopuncture", desc: "Formation et certification en techniques de luminothérapie réflexe." },
  { year: "Aujourd'hui", title: "Clinique Tel Aviv", desc: "Cabinet dédié au bien-être global, au cœur de Tel Aviv." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
                <div className="precision-dot" />
                À propos
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Dr. Ronit Kalfon
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Docteur en Pharmacie · Nutrition · Luxopuncture
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Docteur en pharmacie de formation, Dr. Ronit Kalfon a consacré sa carrière 
                  à l'intersection de la science pharmaceutique et du bien-être holistique.
                </p>
                <p>
                  Son expertise unique en pharmacologie lui permet d'offrir des prescriptions 
                  nutritionnelles d'une précision exceptionnelle, tenant compte de chaque 
                  interaction et de chaque besoin biologique de ses patients.
                </p>
                <p>
                  Installée au cœur de Tel Aviv, elle accompagne ses patients avec une 
                  approche globale mêlant nutrition clinique, suivi diététique personnalisé 
                  et luxopuncture — une combinaison rare et particulièrement efficace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/95c2e45d4_generated_47a784df.png"
                  alt="Dr. Ronit Kalfon"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, label: "Docteur en Pharmacie", value: "PhD" },
              { icon: Stethoscope, label: "Ans d'Expérience", value: "15+" },
              { icon: Users, label: "Patients Accompagnés", value: "2000+" },
              { icon: Award, label: "Spécialisations", value: "3" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Parcours Professionnel</h2>
            <p className="text-muted-foreground">
              Un cheminement guidé par la rigueur scientifique et la passion du soin.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-24 text-right">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="precision-dot absolute -left-[5px] top-2" />
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[-2px] top-4 bottom-[-32px] w-px bg-border" />
                  )}
                </div>
                <div className="pb-2 pl-4">
                  <h3 className="font-semibold text-foreground mb-1">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/9d8558fa6_generated_398aef9c.png"
                alt="Clinique Dr. Kalfon Tel Aviv"
                className="w-full h-[350px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Mon Approche</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">La précision pharmaceutique au service de la nutrition.</strong>{" "}
                  Mon parcours de docteur en pharmacie me confère une compréhension approfondie 
                  des mécanismes biologiques. Chaque prescription nutritionnelle est élaborée 
                  avec la même rigueur qu'une prescription médicamenteuse.
                </p>
                <p>
                  <strong className="text-foreground">La luxopuncture comme catalyseur.</strong>{" "}
                  En complément du suivi nutritionnel, la luxopuncture permet d'agir 
                  directement sur le système endocrinien, accélérant et pérennisant les résultats.
                </p>
                <p>
                  <strong className="text-foreground">Un accompagnement humain.</strong>{" "}
                  Au-delà de la science, chaque patient est unique. J'accorde une importance 
                  fondamentale à l'écoute et à l'adaptation de chaque protocole.
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
                  Me Contacter
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}