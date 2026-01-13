
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import React, { useRef } from "react";


const easeOut = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        }
    }
}

const makeItem = (fromX: number): Variants => ({
    hidden: { opacity: 0, y: 16, x: fromX },
    show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.8, ease: easeOut },
    }
})

const badge: Variants = {
    hidden: { opacity: 0, y: 0.85 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.45, ease: easeOut },
    }
}

const Ourprocess: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const labelY = useTransform(scrollYProgress, [0, 1], [40, -40]);


    return (
        <section ref={sectionRef} className="py-20">

            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 
            lg:px-8">

                <div className="flex gap-10 lg:gap-12">
                    {/* LEFT Lable */}
                    <motion.div
                        style={{ y: labelY }}
                        className="relative hidden md:flex w-36 items-start justify-center"
                    >

                        <motion.div className="sticky top-40 mt-10 flex flex-col gap-20 items-center">

                            <div className="-rotate-90 text-5xl font-light whitespace-nowrap">
                                <h1>
                                    <span className="text-slate-400 font-bold">Our</span> Process
                                </h1>
                            </div>


                            <div className="mt-10 h-16 w-[2px] bg-slate-300" />
                        </motion.div>
                    </motion.div>

                    {/* Right list */}
                    <motion.div
                        className="mx-auto max-w-2xl flex flex-col gap-10"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >

                        {/* Step 1 */}
                        <motion.div
                            className="flex items-center gap-10"
                            variants={makeItem(-60)}
                        >
                            <div className="w-[25%]">
                                <motion.div
                                    variants={badge}
                                    className="h-16 w-16 flex items-center justify-center
          text-white font-bold text-2xl rounded-full bg-slate-800 shrink-0"
                                >
                                    01
                                </motion.div>
                            </div>

                            <div className="gap-6">
                                <h1 className="text-2xl pb-4 md:text-3xl font-light">Strategy</h1>
                                <p className="w-[65%] text-sm">
                                    We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            className="flex items-center gap-10"
                            variants={makeItem(60)}
                        >
                            <div className="w-[25%]" />

                            <div className="gap-6 flex flex-col items-end">
                                <h1 className="text-2xl md:text-3xl font-light">Design</h1>
                                <p className="w-[65%] text-sm text-right">
                                    We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.
                                </p>
                            </div>

                            <div className="w-[25%]">
                                <motion.div
                                    variants={badge}
                                    className="h-16 w-16 flex items-center justify-center
          text-white font-bold text-2xl rounded-full bg-slate-600 shrink-0"
                                >
                                    02
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            className="flex items-center gap-10"
                            variants={makeItem(-60)}
                        >
                            <div className="w-[25%]">
                                <motion.div
                                    variants={badge}
                                    className="h-16 w-16 flex items-center justify-center
          text-white font-bold text-2xl rounded-full bg-slate-800 shrink-0"
                                >
                                    03
                                </motion.div>
                            </div>

                            <div className="gap-6">
                                <h1 className="text-2xl pb-4 md:text-3xl font-light">Development</h1>
                                <p className="w-[65%] text-sm">
                                    We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 4 */}
                        <motion.div
                            className="flex items-center gap-10"
                            variants={makeItem(60)}
                        >
                            <div className="w-[25%]" />

                            <div className="gap-6 flex flex-col items-end">
                                <h1 className="text-2xl md:text-3xl font-light">Quality Check</h1>
                                <p className="w-[65%] text-sm text-right">
                                    We are a leading creative agency providing bespoke branding services to elevate your online presence. Specializing in unique and memorable visuals, we create branding that captures your tone of voice and resonates with your customers.
                                </p>
                            </div>

                            <div className="w-[25%]">
                                <motion.div
                                    variants={badge}
                                    className="h-16 w-16 flex items-center justify-center
          text-white font-bold text-2xl rounded-full bg-slate-600 shrink-0"
                                >
                                    04
                                </motion.div>
                            </div>
                        </motion.div>

                    </motion.div>



                </div>

            </div>
        </section>
    )
}

export default Ourprocess;