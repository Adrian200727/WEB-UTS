import Features from "@/components/Feature/features";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/hero";
import HL from "@/components/HL/highlights";
import Navbar from "@/components/Navbar/navbar";
import TestimonialSection from "@/components/Testimoni/testimonial";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="scrollbar-hide">
      <Navbar />
      <Hero />
      <HL />
      <Features />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
