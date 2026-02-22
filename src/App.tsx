import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ourprocess from "./components/Ourprocess";
import Ourwork from "./components/Ourwork";
import Services from "./components/Services";
import NavScreen from "./components/Nav";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <NavScreen open={menuOpen} onClose={() => setMenuOpen(false)} />

      <Hero onOpenMenu={() => setMenuOpen(true)} />

      <About />
      <Brands />
      <Services />
      <Ourwork />
      <Ourprocess />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;