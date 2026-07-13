import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import useDarkMode from "./hooks/useDarkMode";
import useScrollProgress from "./hooks/useScrollProgress";

export default function App() {
  const [isDark, setIsDark] = useDarkMode();
  const progress = useScrollProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen show={loading} />
      <ScrollProgress progress={progress} />
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseMe />
        <Benefits />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <BackToTop visible={progress > 15} />
    </>
  );
}
