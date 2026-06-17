import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Stats from "./sections/Stats";
import AboutMe from "./sections/AboutMe";
import Videos from "./sections/Videos";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <AboutMe />
    <Stats />
    <Videos />
    <Contact />
    <Footer />
    <BackToTop />
  </>
  );
}

export default App;