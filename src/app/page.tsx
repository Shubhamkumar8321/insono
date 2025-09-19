"use client";
import { useState } from "react";
import BlogSection from "@/components/BlogSection";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import HearingaidType from "@/components/HearingaidType";
import Whychoose from "@/components/whychoose";
import Testomonial from "@/components/testomonial";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-[#eaf5ff] to-white flex flex-col items-center justify-center text-center">
        <HeroSection />
        <ProductSection />
      </section>

      <HearingaidType />
      <Whychoose />
      <Testomonial />

      <BlogSection />

      {/* FAQ Section */}

      <FAQ />
    </main>
  );
}
