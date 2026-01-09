import { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';





const Hero: React.FC = () => {

    return (
        <header>
            <section className='relative min-h-screen  w-full overflow-x-hidden'>
                <button
                    type="button"
                    aria-label="Open menu"
                    className="absolute right-10 md:20 top-12 z-50 inline-flex h-11 w-11 
                     justify-center items-center rounded-full hover:bg-red-100/50 
                     focus:outline-none focus:ring-1 focus:ring-red-500/50 focus:ring-offset-2"
                >
                    <span className="relative block h-5 w-6">
                        <span className="absolute left-0 top-0 h-0.5 w-full rounded bg-slate-500" />
                        <span className="absolute left-0 top-2 h-0.5 w-4/5 rounded bg-slate-500" />
                        <span className="absolute left-0 top-4 h-0.5 w-3/5 rounded bg-slate-500" />
                    </span>
                </button>

                <div className="mx-auto flex flex-col min-h-screen items-center justify-center w-full">
                    <video src="/assets/vdo/logo-vdo.mp4"
                        autoPlay
                        muted
                        playsInline
                        className="z-20
                            autoplay 
                            w-[90%]
                            md:w-[25%]
                            lg:w-[35%]
                            xl:w-[38%]
                            2xl:w-[40%]
                            flex items-center justify-center 
                            "/>
                    <DotLottieReact
                        src="https://lottie.host/14f76db7-6b1c-40de-8c96-9b9e9ec85494/HztkAhBgy0.lottie"
                        loop
                        autoplay
                        className=" 
                                    self-center
                                    md:self-start
                                    w-[50%]
                                    md:w-[35%]
                                    lg:w-[10%]
                                    xl:w-[10%]
                                    z-20
                                    ml-0
                                    md:ml-8
                                "
                    />

                </div>




                {/* Pencil */}
                <img src="/assets/img/pencil.jpg" alt="pencil"
                    className="pointer-events-`none 
                    absolute 
                    top-[70%]
                    md:top-[50%]
                    z-10 

                    right-[-50px]
                    w-[800px]

                    md:right-[-80px]
                    md:w-[1000px]

                    lg:right-[-100px]
                    lg:w-[1200px]

                    xl:right-[-150px]
                    xl:w-[1500px]

                    2xl:right-[-200px]
                    2xl:w-[95%]
                    " />
            </section>
        </header>
    );

};

export default Hero;