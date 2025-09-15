import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ConsultorSection from "./components/ConsultorSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-16 lg:pt-20">
        <HeroSection />
        <ContentSection />
        <ConsultorSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
