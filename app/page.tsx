import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Quality from "@/components/Quality";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

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