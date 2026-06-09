import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const Workshops = dynamic(() => import("@/components/Workshops"), {
  loading: SectionLoader,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: SectionLoader,
});
const WorkshopPhotos = dynamic(() => import("@/components/WorkshopPhotos"), {
  loading: SectionLoader,
});
const Curriculum = dynamic(() => import("@/components/Curriculum"), {
  loading: SectionLoader,
});
const ForWho = dynamic(() => import("@/components/ForWho"), {
  loading: SectionLoader,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: SectionLoader,
});
const FAQChat = dynamic(() => import("@/components/FAQChat"), {
  loading: SectionLoader,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: SectionLoader,
});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Workshops />
      <Gallery />
      <WorkshopPhotos />
      <Curriculum />
      <ForWho />
      <Testimonials />
      <FAQChat />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
