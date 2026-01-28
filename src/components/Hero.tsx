import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <header>
      <section className="relative min-h-screen w-full overflow-hidden pb-32 md:pb-72">
        {/* MENU BUTTON */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            absolute right-10 md:right-20 top-12 z-50
            inline-flex h-11 w-11 items-center justify-center
            rounded-full hover:bg-red-100/50
            focus:outline-none focus:ring-1 focus:ring-red-500/50 focus:ring-offset-2
          "
        >
          <span className="relative block h-5 w-6">
            <span className="absolute left-0 top-0 h-0.5 w-full rounded bg-slate-500" />
            <span className="absolute left-0 top-2 h-0.5 w-4/5 rounded bg-slate-500" />
            <span className="absolute left-0 top-4 h-0.5 w-3/5 rounded bg-slate-500" />
          </span>
        </button>

        {/* CENTER CONTENT */}
        <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center">
          {/* Logo video animation */}
          <motion.video
            src="/assets/vdo/logo-vdo.mp4"
            autoPlay
            muted
            playsInline
            className="z-20 w-[90%] md:w-[25%] lg:w-[35%] xl:w-[38%] 2xl:w-[40%]"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

            
          <motion.div
            className="z-20 self-center md:self-start ml-0 md:ml-8 w-[50%] md:w-[35%] lg:w-[10%] xl:w-[10%]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <DotLottieReact
                src="https://lottie.host/14f76db7-6b1c-40de-8c96-9b9e9ec85494/HztkAhBgy0.lottie"
                loop
                autoplay
              />
            </motion.div>
          </motion.div>
        </div>

        {/* PENCIL IMAGE animation */}
        <motion.img
          src="/assets/img/pencil.jpg"
          alt="pencil"
          className="
            pointer-events-none
            absolute z-10
            top-[70%] md:top-[35%]
            right-[-50px] w-[800px]
            md:right-[-80px] md:w-[1000px]
            lg:right-[-100px] lg:w-[1200px]
            xl:right-[-150px] xl:w-[1500px]
            2xl:right-[-200px] 2xl:w-[95%]
          "
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
        />
      </section>
    </header>
  );
};

export default Hero;
