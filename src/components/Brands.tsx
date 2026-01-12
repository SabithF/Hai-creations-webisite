import React from "react";


const Brands: React.FC = () => {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 
              lg:px-8 ">
                <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-full max-w-[220px] bg-slate-200" />
                    <h2 className="text-sm md:text-xl  font-medium tracking-[0.2em] text-slate-500 uppercase">
                       Brands we created</h2>
                    <div className="h-px w-full max-w-[220px] bg-slate-200" />

                </div>

                {/* Logos */}

                <div className="mt-10 md:mt-14">
                    <img src="/assets/img/logo 1.png" alt="Logos"
                    loading="lazy"
                    className="w-auto opacity-70 grayscale transition
                    hover:opacity-100 hover:grayscale-0" />
                </div>



            </div>
        </section>
    )
}

export default Brands;