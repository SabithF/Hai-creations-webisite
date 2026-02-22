import React, { useState } from "react";
import Hero from "./Hero";
import NavScreen from "../components/Nav";

const HomePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Hero onOpenMenu={() => setMenuOpen(true)} />

      <NavScreen
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Add your other sections below Hero if you have */}
      {/* <About /> */}
      {/* <Services /> */}
    </>
  );
};

export default HomePage;