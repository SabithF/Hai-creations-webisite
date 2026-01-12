import React from "react";
import { motion, type Variants  } from "framer-motion";

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const About: React.FC = () => {
  return (
    <section className="relative">
      {/* Banner */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="/assets/banner/about-banner.jpg"
          alt="about-us-banner"
          className="w-full h-auto object-cover"
        />

        {/* Desktop text */}
        <motion.p
          variants={textFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="
            absolute hidden md:block
            right-[300px]
            w-[30%]
            italic text-xl font-arial text-white
          "
        >
          Hai Creations (Pvt) Ltd is a smart mix of talented professionals, who
          are dedicated to moving mountains to deliver a masterpiece beyond
          expectations to benefit our clientele.
          <br /><br />
          We enjoy a successful reputation both locally and internationally and
          are fortunate to have clients who trust and empower us to do what we
          think is right & mutually beneficial.
          <br /><br />
          We believe that our work should speak for itself.
        </motion.p>
      </div>

      {/* Mobile text */}
      <div className="px-6 py-10 md:hidden">
        <motion.p
          variants={textFadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="italic text-md font-arial text-black"
        >
          Hai Creations (Pvt) Ltd is a smart mix of talented professionals, who
          are dedicated to moving mountains to deliver a masterpiece beyond
          expectations to benefit our clientele.
          <br /><br />
          We enjoy a successful reputation both locally and internationally and
          are fortunate to have clients who trust and empower us to do what we
          think is right & mutually beneficial.
          <br /><br />
          We believe that our work should speak for itself.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
