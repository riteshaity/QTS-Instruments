import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesSection from "../components/IndustriesSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "QTS Instruments | Calibration, Validation & Temperature Monitoring";
  }, []);

  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
