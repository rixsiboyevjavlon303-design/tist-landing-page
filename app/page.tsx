import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import PearsonSection from "@/components/PearsonSection";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <PearsonSection />
        <WhyUs />
        <Gallery />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}