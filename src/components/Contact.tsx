import React from "react";
import { motion, type Variants } from "framer-motion";

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

// --- Animations (ONLY) ---
const easeOut = [0.16, 1, 0.3, 1] as const;

const sectionStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const CardRow: React.FC<RowProps> = ({ label, value, href, right }) => {
  const Comp: any = href ? motion.a : motion.div;

  return (
    <Comp
      href={href}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={[
        "w-full rounded-2xl bg-slate-100/80",
        "px-4 sm:px-6 py-5",
        "flex items-center justify-between gap-4",
        "transition hover:bg-slate-100 active:scale-[0.99]",
        href ? "cursor-pointer" : "",
      ].join(" ")}
    >
      <div className="min-w-0">
        <p className="text-sm text-slate-600">{label}</p>
        <p className="mt-1 truncate text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900">
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
    <motion.button
      type="button"
      onClick={onClick}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={[
        "w-full rounded-2xl bg-slate-100/80 px-4 sm:px-6 py-5",
        "flex items-center justify-between gap-4",
        "transition hover:bg-slate-100 active:scale-[0.99]",
      ].join(" ")}
    >
      <span className="text-sm font-medium text-slate-900 sm:text-base">
        {title}
      </span>
      <span className="shrink-0 text-slate-700">{right}</span>
    </motion.button>
  );
};

const Contact: React.FC = () => {
  return (
    <motion.section
      className="py-16 sm:py-20 md:py-24"
      variants={sectionStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "-80px" }}
    >
      <div
        className={[
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
          "flex flex-col lg:flex-row",
          "items-stretch lg:items-start",
          "gap-10 lg:gap-12",
        ].join(" ")}
      >
        {/* Left: headline */}
        <motion.div
          className={[
            "w-full lg:w-[45%]",
            "flex flex-col justify-start",
            "font-light leading-[0.95]",
          ].join(" ")}
          variants={sectionStagger}
        >
          {/* Clamp prevents overflow on small screens */}
          <motion.h1
            variants={fadeUp}
            className="tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Let's
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Create
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="pt-4 sm:pt-5 pl-0 sm:pl-1 text-slate-700"
          >
            We’re ready to speak when you are.
          </motion.p>
        </motion.div>

        {/* Right: contact card */}
        <section className="w-full lg:w-[55%] flex justify-center lg:justify-end">
          <motion.div
            className={[
              "w-full max-w-xl", // keeps it nice on desktop
              "bg-gray-200/40 rounded-3xl",
              "p-3 sm:p-4 lg:p-6",
            ].join(" ")}
            variants={cardIn}
          >
            <div className="rounded-3xl bg-white p-4 sm:p-8">
              <motion.div className="space-y-6" variants={sectionStagger}>
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
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2"
                >
                  <ActionCard
                    title="Chat to us now"
                    right={
                      <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
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
                </motion.div>

                {/* Follow row */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="w-full rounded-2xl bg-slate-100/80 px-4 sm:px-6 py-5 flex items-center justify-between"
                >
                  <p className="text-sm text-slate-900 sm:text-base">Follow us</p>

                  <div className="flex items-center gap-5 text-slate-800">
                    <a
                      href="#"
                      className="text-sm font-semibold hover:opacity-70"
                      aria-label="Instagram"
                    >
                      Insta
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold hover:opacity-70"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.section>
  );
};

export default Contact;
