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
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/a03931d14_generated_image.png"
                alt="Intérieur de la clinique du Dr. Kalfon à Tel Aviv"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-24 rounded-2xl bg-white shadow-lg border border-border/30 flex items-center justify-center p-4 hidden md:flex">
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/8d92117a9_Logo-Luxomed-byHolicare-cmjn.svg"
                alt="Logo Luxomed by Holicare"
                className="w-full h-full object-contain"
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
              Un Cabinet Médical au Cœur de Tel Aviv
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dans un cadre calme et confidentiel, le Dr. Kalfon reçoit ses patients 
              sur rendez-vous pour des consultations approfondies. Chaque prise en charge 
              est individualisée, dans le respect du secret médical et du confort du patient.
            </p>

            <div className="space-y-6">
              {[
                { icon: Shield, title: "Suivi Médical Individualisé", desc: "Chaque consultation est adaptée à votre profil, vos antécédents et vos objectifs" },
                { icon: MapPin, title: "Cabinet sur Rendez-vous", desc: "Situé au cœur de Tel Aviv, accessible et confidentiel" },
                { icon: Leaf, title: "Environnement Apaisant", desc: "Un espace pensé pour la sérénité et la qualité de la prise en charge" },
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