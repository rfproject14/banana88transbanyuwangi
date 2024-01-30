import React from "react";
import AboutSection from "@/components/AboutSection";
import Carousel from "@/components/Carousel";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";


export default function Home() {
  return (
    <>
      <Header />
      <ProductSection />
      <Carousel />
      <AboutSection />
      <ContactSection />
    </>
  );
}
