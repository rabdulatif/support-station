import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import About from "./components/About";
import Gallery from "./components/Gallery";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <About />
        <Gallery />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
