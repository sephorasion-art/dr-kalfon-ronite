import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLang();
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-lg font-semibold text-white">Dr. Ronit Kalfon</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              {t.footer.bio}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/drronitkalfon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563215403146"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t.footer.servicesTitle}
            </h4>
            <div className="space-y-3">
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">{t.footer.s1}</Link>
              <Link to="/luxopuncture" className="block text-sm hover:text-primary transition-colors">{t.footer.s2}</Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">{t.footer.s3}</Link>
              <Link to="/services" className="block text-sm hover:text-primary transition-colors">{t.footer.s4}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t.footer.navTitle}
            </h4>
            <div className="space-y-3">
              <Link to="/" className="block text-sm hover:text-primary transition-colors">{t.nav.home}</Link>
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">{t.nav.about}</Link>
              <Link to="/contact" className="block text-sm hover:text-primary transition-colors">{t.nav.contact}</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t.nav.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm">{t.contact.addressVal}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">054-996-3354</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">drronitkalfon@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-primary shrink-0" />
                <span className="text-sm">{t.contact.hoursVal1}: {t.contact.hoursVal2}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t border-white/10 text-xs text-white/40 ${isRTL ? "text-right" : "text-center"}`}>
          © {new Date().getFullYear()} Dr. Ronit Kalfon. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}