import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";
import Gallery from "@/components/Gallery";
import Curriculum from "@/components/Curriculum";
import ForWho from "@/components/ForWho";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
