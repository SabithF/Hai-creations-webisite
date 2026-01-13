import React from "react";
import { motion, type Variants } from "framer-motion";
import BannerOne from "./Ourwork/Banner-1";
import BannerFive from "./Ourwork/Banner-2";

const textFadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
        }
    }
}

const fadeFromLeft: Variants = {
    hidden: { opacity: 0, x: -500 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 3, ease: [0.16, 1, 0.3, 1] },
    },
};

const fadeFromRight: Variants = {
    hidden: { opacity: 0, x: 500 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration:3, ease: [0.16, 1, 0.3, 1] },
    },
};


const Ourwork: React.FC = () => {
    return (
        <section className="relative">

            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img
                    src="/assets/banner/banner-1.jpg"
                    alt="graphic-banner"
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
                    italic text-xl text-white">

                    As a multi-diciplinary agency, we engineer creative using digital
                    and print media to deliver brand solutions that will grow your business.

                    <br /> <br />
                    We know how to draw the eye and hook customers in the first three seconds and create a lasting impression in our creative.

                </motion.p>


            </div>

            {/* Text mobile screen */}

            <div className="px-6 py-10 md:hidden">
                <motion.p
                    variants={textFadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="italic text-md font-arial text-black"
                >
                    As a multi-diciplinary agency, we engineer creative using digital
                    and print media to deliver brand solutions that will grow your business.

                    <br /> <br />
                    We know how to draw the eye and hook customers in the first three seconds and create a lasting impression in our creative.


                </motion.p>
            </div>


            {/* Our work heading  */}


            <motion.div className="mx-auto max-w-7xl text-center py-16 overflow-hidden">
                <motion.h2
                    variants={fadeFromLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-6xl text-slate-400 uppercase"
                >
                    Our
                </motion.h2>

                <motion.h1
                    variants={fadeFromRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    className="outline-red text-9xl md:text-[15rem] uppercase tracking-wider"
                >
                    WORK
                </motion.h1>
            </motion.div>

            {/* Logos */}

            <div className="px-6 pb-16 md:pb-32 mx-auto max-w-6xl flex">
                <img src="/assets/img/logo 1.png" alt="logo" 
                    />
            </div>

            {/* Banner one */}
            <BannerOne />
            <BannerFive />







        </section>
    )
}

export default Ourwork;