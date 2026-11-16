import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              {t.contact.label}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl border border-border p-8"
          >
            <h2 className="font-semibold text-foreground mb-6">{t.contact.infoTitle}</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{t.contact.address}</h4>
                  <p className="text-sm text-muted-foreground">{t.contact.addressVal}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{t.contact.phone}</h4>
                  <p className="text-sm text-muted-foreground">054-996-3354</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{t.contact.email}</h4>
                  <p className="text-sm text-muted-foreground">drronitkalfon@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{t.contact.hours}</h4>
                  <p className="text-sm text-muted-foreground">{t.contact.hoursVal1}</p>
                  <p className="text-sm text-muted-foreground">{t.contact.hoursVal2}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}