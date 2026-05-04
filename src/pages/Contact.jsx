import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { base44 } from "@/api/base44Client";
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2, Video
} from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  { value: "nutrition", label: "Nutrition & Suivi Diététique" },
  { value: "luxopuncture_weight", label: "Luxopuncture — Perte de Poids" },
  { value: "luxopuncture_smoking", label: "Luxopuncture — Arrêt du Tabac" },
  { value: "luxopuncture_addiction", label: "Luxopuncture — Addictions" },
  { value: "luxopuncture_sleep", label: "Luxopuncture — Sommeil" },
  { value: "luxopuncture_relaxation", label: "Luxopuncture — Relaxation" },
  { value: "luxopuncture_rejuvenation", label: "Luxopuncture — Rajeunissement Facial" },
];

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    consultation_type: "presentiel",
    service: "",
    preferred_date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.Appointment.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Votre demande a été envoyée avec succès !");
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-widest mb-4">
              <div className="precision-dot" />
              Contact
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Prenez Rendez-vous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contactez-nous pour planifier votre première consultation ou pour toute question 
              sur nos services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl border border-border p-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Merci !</h3>
                  <p className="text-muted-foreground mb-6">
                    Votre demande de rendez-vous a bien été reçue. 
                    Nous vous contacterons dans les plus brefs délais.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ full_name: "", email: "", phone: "", consultation_type: "presentiel", service: "", preferred_date: "", message: "" });
                    }}
                    variant="outline"
                    className="rounded-full"
                  >
                    Nouveau rendez-vous
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8 space-y-6"
                >
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Formulaire de Rendez-vous
                  </h2>

                  {/* Consultation type selector */}
                  <div className="space-y-2">
                    <Label>Mode de consultation *</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          value: "presentiel",
                          label: "En Cabinet",
                          sub: "Tel Aviv",
                          icon: Building2,
                        },
                        {
                          value: "visio",
                          label: "En Visio",
                          sub: "Zoom / Teams",
                          icon: Video,
                        },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setForm({ ...form, consultation_type: opt.value })}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            form.consultation_type === opt.value
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/40 bg-card"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            form.consultation_type === opt.value ? "bg-primary/10" : "bg-secondary"
                          }`}>
                            <opt.icon className={`w-5 h-5 ${form.consultation_type === opt.value ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <div>
                            <div className={`text-sm font-semibold ${form.consultation_type === opt.value ? "text-primary" : "text-foreground"}`}>
                              {opt.label}
                            </div>
                            <div className="text-xs text-muted-foreground">{opt.sub}</div>
                          </div>
                          {form.consultation_type === opt.value && (
                            <CheckCircle2 className="w-4 h-4 text-primary ml-auto shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Nom complet *</Label>
                      <Input
                        required
                        value={form.full_name}
                        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Téléphone *</Label>
                      <Input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+972..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Date souhaitée</Label>
                      <Input
                        type="date"
                        value={form.preferred_date}
                        onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Service souhaité *</Label>
                    <Select
                      required
                      value={form.service}
                      onValueChange={(val) => setForm({ ...form, service: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Message</Label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez brièvement votre besoin..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 gap-2 text-base"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Envoi en cours..." : "Envoyer la Demande"}
                  </Button>
                </motion.form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-8"
              >
                <h3 className="font-semibold text-foreground mb-6">Informations</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Adresse</h4>
                      <p className="text-sm text-muted-foreground">Tel Aviv, Israël</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Téléphone</h4>
                      <p className="text-sm text-muted-foreground">+972 XX XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Email</h4>
                      <p className="text-sm text-muted-foreground">contact@drkalfon.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Horaires</h4>
                      <p className="text-sm text-muted-foreground">Dimanche – Jeudi</p>
                      <p className="text-sm text-muted-foreground">9h00 – 18h00</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
              >
                <h3 className="font-semibold text-foreground mb-3">Chat Direct</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Besoin d'une réponse rapide ? Utilisez notre chat en direct 
                  en cliquant sur l'icône en bas à droite de votre écran.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  Disponible maintenant
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}