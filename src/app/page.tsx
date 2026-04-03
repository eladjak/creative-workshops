import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Workshops = dynamic(() => import("@/components/Workshops"));
const Gallery = dynamic(() => import("@/components/Gallery"));
const Curriculum = dynamic(() => import("@/components/Curriculum"));
const ForWho = dynamic(() => import("@/components/ForWho"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Workshops />
      <Gallery />
      <Curriculum />
      <ForWho />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
