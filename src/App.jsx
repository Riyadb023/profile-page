import About from "./components/About";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Work from "./components/Work";

export default function App() {
  return (
    <>
      <div className="glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Services />
        <Approach />
        <About />
        <Tools />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
