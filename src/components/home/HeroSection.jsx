import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              Docteur en Pharmacie
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              Retrouvez Équilibre
              <br />
              <span className="text-primary">& Bien-être au Naturel</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Nutrition clinique, suivi diététique personnalisé et luxopuncture.
              Une approche unique fondée sur l'expertise pharmaceutique, 
              au cœur de Tel Aviv.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2 text-base h-14">
                  Prendre Rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base h-14 border-border/60">
                  Découvrir les Services
                </Button>
              </Link>
            </div>

            {/* Luxomed logo */}
            <div className="flex items-center gap-3 mt-10">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Praticienne certifiée</span>
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/e02a88b0e_Logo-Luxomed-byHolicare-cmjn.svg"
                alt="Logo Luxomed by Holicare"
                className="h-8 object-contain"
              />
            </div>

            {/* Credentials */}
            <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Ans d'expérience</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">Tel Aviv</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Clinique privée</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">Formée</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">En France</div>
              </div>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://media.base44.com/images/public/69f8a347ad8a1d3127f83b88/b20127226_WhatsApp-Image-2025-03-21-at-164200.jpg"
                alt="Dr. Ronit Kalfon dans sa clinique à Tel Aviv"
                className="w-full h-[600px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-8 bottom-12 glass-panel rounded-2xl p-5 shadow-xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-accent glow-amber" />
                <span className="text-sm font-semibold text-foreground">Luxopuncture</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Technique de lumière infrarouge non invasive pour le bien-être global
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}