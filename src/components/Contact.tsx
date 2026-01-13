import { section } from "framer-motion/client";
import React from "react";


type RowProps = {
    label: string;
    value: string;
    href?: string;
    right?: React.ReactNode;
};

const Chevron = () => (
    <span aria-hidden className="text-slate-500 text-xl leading-none">
        ›
    </span>
);

const CardRow: React.FC<RowProps> = ({ label, value, href, right }) => {
    const Comp: any = href ? "a" : "div";

    return (
        <Comp
            href={href}
            className={[
                "w-full rounded-2xl bg-slate-100/80",
                "px-6 py-5",
                "flex items-center justify-between gap-4",
                "transition hover:bg-slate-100 active:scale-[0.99]",
                href ? "cursor-pointer" : "",
            ].join(" ")}
        >
            <div className="min-w-0">
                <p className="text-sm text-slate-600">{label}</p>
                <p className="mt-1 truncate text-2xl font-medium text-slate-900 sm:text-3xl">
                    {value}
                </p>
            </div>

            <div className="shrink-0">{right ?? <Chevron />}</div>
        </Comp>
    );
};

type ActionCardProps = {
    title: string;
    right?: React.ReactNode;
    onClick?: () => void;
};

const ActionCard: React.FC<ActionCardProps> = ({ title, right, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "w-full rounded-2xl bg-slate-100/80 px-6 py-5",
                "flex items-center justify-between gap-4",
                "transition hover:bg-slate-100 active:scale-[0.99]",
            ].join(" ")}
        >
            <span className="text-sm font-medium text-slate-900 sm:text-base">{title}</span>
            <span className="shrink-0 text-slate-700">{right}</span>
        </button>
    );
};




const Contact: React.FC = () => {



    return (
        <section className="py-20 md:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 items-start justify-center flex flex-row">
                {/* Lets create */}
                <div className="flex justify-start font-light w-full flex-col leading-[0.95]">
                    <h1 className="text-[8rem]   ">Let's</h1>
                    <h1 className="text-[8rem]  ">Create</h1>
                    <p className="pl-5 pt-5">We’re ready to speak when you are.
                    </p>
                </div>

                {/* Contact form */}
                <section className="flex justify-center w-full ">

                    <div className="mx-auto max-w-5xl  bg-gray-200/40 rounded-3xl px-4 py-7 sm:px-6 lg:px-8">
                        <div className="rounded-3xl bg-white p-4 sm:p-8">
                            <div className="space-y-6">
                                <CardRow
                                    label="Email"
                                    value="haicreation@gmail.com"
                                    href="mailto:haicreation@gmail.com"
                                    right={<Chevron />}
                                />

                                <CardRow
                                    label="Phone"
                                    value="07967799918"
                                    href="tel:07967799918"
                                    right={<Chevron />}
                                />

                                {/* Two buttons */}
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <ActionCard
                                        title="Chat to us now"
                                        right={
                                            <div className="flex items-center gap-3">
                                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                                {/* fake avatars */}
                                                <div className="-space-x-2 flex">
                                                    <div className="h-7 w-7 rounded-full bg-slate-300 ring-2 ring-white" />
                                                    <div className="h-7 w-7 rounded-full bg-slate-400 ring-2 ring-white" />
                                                    <div className="h-7 w-7 rounded-full bg-slate-500 ring-2 ring-white" />
                                                </div>
                                            </div>
                                        }
                                    />

                                    <ActionCard
                                        title="Book a call"
                                        right={<span className="text-xl">＋</span>}
                                    />
                                </div>
                                {/* Follow row */}
                                <div className="w-full rounded-2xl bg-slate-100/80 px-6 py-5 flex items-center justify-between">
                                    <p className="text-sm text-slate-900 sm:text-base">Follow us</p>

                                    <div className="flex items-center gap-5 text-slate-800">
                                        <a href="#" className="text-sm font-semibold hover:opacity-70" aria-label="Instagram">
                                            Insta
                                        </a>
                                        <a href="#" className="text-sm font-semibold hover:opacity-70" aria-label="LinkedIn">
                                            in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>




                </section>

            </div>


        </section>
    )
}

export default Contact;