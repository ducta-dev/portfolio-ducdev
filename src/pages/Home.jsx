import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}