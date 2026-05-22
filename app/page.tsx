import { Navbar } from "./_components/Navbar";
import { AboutUs } from "./AboutUs";
import { Contact } from "./Contact";
import { FAQ } from "./Faq";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export default function LandingPage() {
  return (
    <div>
      <header className="fixed w-screen bg-sugar-milk z-50">
        <Navbar />
      </header>
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
