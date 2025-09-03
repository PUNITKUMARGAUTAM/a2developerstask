import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductsGrid from "./components/ProductGrid";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import EnquiryForm from "./components/EnquiryForm";
import Testimonial from "./components/Testimonial";
import Timeline from "./components/Timeline";
import Values from "./components/Values";
import Footer from "./components/Footer";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div>
      {/* ✅ Navbar form trigger App se aayega */}
      <Navbar onOpenForm={() => setIsFormOpen(true)} /> 

      <section id="home">
        <Hero />
      </section>

      <section id="products">
        <ProductsGrid />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <HeroSection onOpenForm={() => setIsFormOpen(true)} />

      {/* ✅ Common Enquiry Form */}
      {isFormOpen && <EnquiryForm onClose={() => setIsFormOpen(false)} />}

      <Testimonial />
      <Timeline />
      <Values />

      <Footer onOpenForm={() => setIsFormOpen(true)} />
    </div>
  );
}

export default App;
