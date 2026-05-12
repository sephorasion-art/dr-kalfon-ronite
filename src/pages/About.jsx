import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, GraduationCap, Stethoscope, Award, Users } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t, isRTL } = useLang();
  const milestones = [
    { year: t.about.m1year, title: t.about.m1title, desc: t.about.m1desc },
    { year: t.about.m2year, title: t.about.m2title, desc: t.about.m2desc },
    { year: t.about.m3year, title: t.about.m3title, desc: t.about.m3desc },
    { year: t.about.m4year, title: t.about.m4title, desc: t.about.m4desc },
  ];
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
                {t.about.label}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {t.about.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {t.about.subtitle}
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.bio1}</p>
                <p>{t.about.bio2}</p>
                <p>{t.about.bio3}</p>
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
              { icon: GraduationCap, label: t.about.stat1, value: "PhD" },
              { icon: Stethoscope, label: t.about.stat2, value: "15+" },
              { icon: Users, label: t.about.stat3, value: "2000+" },
              { icon: Award, label: t.about.stat4, value: "3" },
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
            <h2 className="text-3xl font-bold text-foreground mb-4">{t.about.journeyTitle}</h2>
            <p className="text-muted-foreground">{t.about.journeySubtitle}</p>
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
              <h2 className="text-3xl font-bold text-foreground mb-6">{t.about.approachTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">{t.about.approach1title}</strong>{" "}
                  {t.about.approach1}
                </p>
                <p>
                  <strong className="text-foreground">{t.about.approach2title}</strong>{" "}
                  {t.about.approach2}
                </p>
                <p>
                  <strong className="text-foreground">{t.about.approach3title}</strong>{" "}
                  {t.about.approach3}
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 gap-2">
                  {t.about.contactBtn}
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}