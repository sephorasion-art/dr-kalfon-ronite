import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
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

export default function Contact() {
  const { t, lang, isRTL } = useLang();
  const serviceOptions = t.contact.serviceOptions;
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
    toast.success(t.contact.success);
  };

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
                  <h3 className="text-2xl font-bold text-foreground mb-3">{t.contact.successTitle}</h3>
                  <p className="text-muted-foreground mb-6">
                    {t.contact.success}
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ full_name: "", email: "", phone: "", consultation_type: "presentiel", service: "", preferred_date: "", message: "" });
                    }}
                    variant="outline"
                    className="rounded-full"
                  >
                    {t.contact.newRdv}
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
                    {t.contact.formTitle}
                  </h2>

                  {/* Consultation type selector */}
                  <div className="space-y-2">
                    <Label>{t.contact.mode}</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          value: "presentiel",
                          label: t.contact.presentiel,
                          sub: t.contact.presentielSub,
                          icon: Building2,
                        },
                        {
                          value: "visio",
                          label: t.contact.visio,
                          sub: t.contact.visioSub,
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
                      <Label>{t.contact.name} *</Label>
                      <Input
                        required
                        value={form.full_name}
                        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{t.contact.email} *</Label>
                      <Input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>{t.contact.phone} *</Label>
                      <Input
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+972..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>{t.contact.date}</Label>
                      <Input
                        type="date"
                        lang={lang}
                        value={form.preferred_date}
                        onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>{t.contact.service} *</Label>
                    <Select
                      required
                      value={form.service}
                      onValueChange={(val) => setForm({ ...form, service: val })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.contact.serviceSelect} />
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
                    <Label>{t.contact.message}</Label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 gap-2 text-base"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? t.contact.sending : t.contact.send}
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
                <h3 className="font-semibold text-foreground mb-6">{t.contact.infoTitle}</h3>
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
                      <p className="text-sm text-muted-foreground">contact@drkalfon.com</p>
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
              >
                <h3 className="font-semibold text-foreground mb-3">{t.contact.chatTitle}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.contact.chatDesc}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {t.contact.chatAvailable}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}