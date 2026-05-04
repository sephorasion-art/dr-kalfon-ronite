import React from "react";
import { motion } from "framer-motion";
import { MapPin, Shield, Leaf } from "lucide-react";

export default function ClinicSection() {
  return (
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/9d8558fa6_generated_398aef9c.png"
                alt="Intérieur de la clinique du Dr. Kalfon à Tel Aviv"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-lg border-4 border-background hidden md:block">
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/71d0c3c8c_generated_5b4d0f78.png"
                alt="Technique de luxopuncture - lumière infrarouge"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              Notre espace
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Un Sanctuaire Clinique au Cœur de Tel Aviv
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Notre clinique allie technologie de pointe et atmosphère apaisante.
              Chaque détail est pensé pour votre confort et votre bien-être, dans un 
              environnement qui favorise la guérison et la transformation.
            </p>

            <div className="space-y-6">
              {[
                { icon: Shield, title: "Équipement Certifié", desc: "Appareils de luxopuncture de dernière génération, conformes aux normes médicales" },
                { icon: MapPin, title: "Localisation Premium", desc: "Facilement accessible au cœur de Tel Aviv, parking disponible" },
                { icon: Leaf, title: "Ambiance Thérapeutique", desc: "Un espace conçu pour la détente, baigné de lumière naturelle" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}