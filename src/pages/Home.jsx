import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesPreview from "../components/home/ServicesPreview";
import ProcessSection from "../components/home/ProcessSection";
import ClinicSection from "../components/home/ClinicSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <ProcessSection />
      <ClinicSection />
      <CTASection />
    </div>
  );
}