import { Navbar } from "../_components/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { FAQ } from "./components/Faq";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main className="pt-32">
        <Hero />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
