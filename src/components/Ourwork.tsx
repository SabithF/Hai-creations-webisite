import React from "react";
import {motion, type Variants  } from "framer-motion";

const textFadeUp: Variants ={
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
                    viewport={{once: true, amount: 0.4}}
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

        </section>
    )
}

export default Ourwork;