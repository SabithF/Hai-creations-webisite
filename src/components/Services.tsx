import React, { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";

const ServicesList = [
    "Graphic & UI/UX Design",
    "Logo Design & Branding",
    "Design, Print & Packaging Solutions",
    "Corporate Stationery and Promotional Material Design",
    "Newspaper & Magazine Advertisements",
    "Company & Product Portfolio",
    "Website Design & Development",
    "Social Media Design & Management",
    "Events & Exhibition",
    "Outdoor Advertising & Branding",
    "Editorial Cartoons & Brand Mascots",
    "2D Animations"

];

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.16, 1, 0.3, 1],
        },
    }),
};

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const labelY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section ref={sectionRef} className="py-20 ">

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


                <div className="flex gap-10 lg:gap-12">
                    {/* LEFT LABEL */}
                    {/* <div className="relative hidden md:flex w-36 lg:w-44 flex-col items-center">
                        <div className="sticky top-24 flex flex-col items-center">
                            <motion.div style={{ y: labelY }} className="will-change-transform">
                                
                                <motion.div style={{ rotate: -90 }} className="origin-center select-none">
                                    <div className="flex flex-col items-center leading-none whitespace-nowrap">
                                        <span className="text-5xl font-light text-slate-900">Services</span>
                                        <span className="mt-4 text-5xl font-bold text-slate-400">Our</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            
                            <span className="mt-8 h-16 w-[3px] bg-slate-300" />
                        </div>
                    </div> */}


                    <motion.div
                        style={{ y: labelY }}
                        className="relative hidden md:flex w-36 items-start justify-center"
                    >
                        
                        <motion.div className="sticky top-40 mt-10 flex flex-col gap-20 items-center">
                          
                            <div className="-rotate-90 text-5xl font-light whitespace-nowrap">
                                <h1>
                                    <span className="text-slate-400 font-bold">Our</span> Services
                                </h1>
                            </div>

                            
                            <div className="mt-10 h-16 w-[2px] bg-slate-300" />
                        </motion.div>
                    </motion.div>




                    {/* RIGHT LIST */}
                    <div className="flex-1">
                        {/* Mobile heading */}
                        <div className="mb-10 md:hidden">
                            <h2 className="text-3xl font-light text-slate-900">
                                <span className="font-bold text-slate-400">Our</span> Services
                            </h2>
                            <div className="mt-6 h-[2px] w-16 bg-slate-300" />
                        </div>

                        <ul className="space-y-12">
                            {ServicesList.map((service, index) => (
                                <motion.li
                                    key={`${service}-${index}`}
                                    custom={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.35 }}
                                    className="group"
                                >
                                    <motion.p
                                        className="text-2xl md:text-3xl font-normal text-slate-900"
                                        whileHover={{ x: 6 }}
                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        {service}
                                    </motion.p>

                                    <div className="relative mt-10 h-px w-full bg-slate-200 overflow-hidden">
                                        <motion.div
                                            className="absolute left-0 top-0 h-full w-full bg-slate-900"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ transformOrigin: "left" }}
                                        />
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
