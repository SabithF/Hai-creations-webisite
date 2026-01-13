
import React from 'react';

const Footer: React.FC = () => {
    return (


        <>
            <section className='py-20 md:py-24'>

            <div className="mx-auto max-w-6xl 
                    px-4 sm:px-6 lg:px-8 flex flex-row w-full ">

                <div className="w-full flex  justify-center ">

                    {/* Left Header */}
                    <div className="flex  flex-col pt-16 w-full ">

                        <h1 className='text-3xl pt-10 pr-10 pb-10'>Digital craftmanship sculpting you as an industry leader.</h1>
                        <div className="flex flex-row space-x-20 ">
                            <ul className='space-y-3'>
                                <li className='hover:text-gray-300 cursor-pointer'>Home</li>
                                <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
                                <li className='hover:text-gray-300 cursor-pointer'>Portfolio</li>
                            </ul>
                            <ul className='space-y-3'>
                                <li className='hover:text-gray-300 cursor-pointer'>Home</li>
                                <li className='hover:text-gray-300 cursor-pointer'>Contact</li>
                                <li className='hover:text-gray-300 cursor-pointer'>Portfolio</li>
                            </ul>
                        </div>

                    </div>


                    {/* Logo */}
                    <div className="flex justify-center  w-full ">
                        <img src="/assets/logo/hai-logo.png" alt="" /></div>
                </div>



            </div>

            

        </section>

        <section>
            <div className="bg-black/35 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-white/70">
                    <span>© {2026} Meezan Group. All rights reserved.</span>
                    <span className="hidden md:inline">•</span>
                    <span>
                        Website developed by{" "}
                        <a
                            href="#"
                            className="text-white hover:underline underline-offset-4"
                        >
                            Hai Creations
                        </a>
                    </span>
                </div>
            </div>
        </section>

        
        </>

    )
}

export default Footer;