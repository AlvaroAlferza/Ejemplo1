import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Products from "@/components/ui/Products";
import About from "@/components/ui/About";
import Quality from "@/components/ui/Quality";
import Process from "@/components/ui/Process";
import Gallery from "@/components/ui/Gallery";
import ContactCTA from "@/components/ui/ContactCTA";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F3F0E7] text-[#171814]">
      <Navbar />

      <Hero />

      <Products />

      <About />

      <Quality />

      <Process />

      <Gallery />

      <ContactCTA />

      <Footer />
    </main>
  );
}