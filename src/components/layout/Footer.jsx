import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-lg font-semibold text-white">
                Dr. Ronit Kalfon
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Docteur en Pharmacie, spécialisée en nutrition, suivi diététique 
              et luxopuncture. Une approche scientifique et personnalisée au cœur de Tel Aviv.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <div className="space-y-3">
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">Nutrition & Diététique</Link>
              <Link to="/luxopuncture" className="block text-sm hover:text-primary transition-colors">Luxopuncture</Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">Arrêt du Tabac</Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">Gestion du Poids</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm hover:text-primary transition-colors">Accueil</Link>
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">À Propos</Link>
              <Link to="/contact" className="block text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm">Tel Aviv, Israël</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">+972 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">contact@drkalfon.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm">Dim - Jeu: 9h - 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Dr. Ronit Kalfon. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}