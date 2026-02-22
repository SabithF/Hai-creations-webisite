import React, { useEffect } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

type NavScreenProps = {
  open: boolean;
  onClose: () => void;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

const panel: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: easeOut } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.45, ease: easeOut } },
};

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: easeOut } },
};

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Brands", id: "brands" },
  { label: "Our Services", id: "services" },
  { label: "Our Work", id: "work" },
  { label: "Our Process", id: "process" },
  { label: "Contact Us", id: "contact" },
] as const;

const NavScreen: React.FC<NavScreenProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const goTo = (id: string) => {
    onClose();
    // wait a bit so the close animation starts, then scroll
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          variants={panel}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[999] bg-white text-black"
          onClick={onClose}
        >
          {/* subtle modern background grain / gradient */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-44 -left-44 h-[520px] w-[520px] rounded-full bg-black/5 blur-3xl" />
          </div>

          <div
            className="relative mx-auto flex h-full max-w-6xl flex-col px-6 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-red-600" />
                <div className="text-xs tracking-[0.35em] uppercase text-black/60">
                  Menu
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  inline-flex h-11 items-center justify-center rounded-full px-5
                  bg-white
                  ring-1 ring-black/10 hover:ring-red-500
                  hover:text-red-600
                  transition
                "
                aria-label="Close menu"
              >
                <span className="text-lg leading-none mr-2">×</span>
                <span className="text-xs tracking-[0.25em] uppercase">Close</span>
              </button>
            </div>

            {/* Center */}
            <div className="flex flex-1 items-center">
              <div className="w-full">
                <div className="mb-7">
                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Navigate
                    <span className="text-red-600">.</span>
                  </h2>
                  <p className="mt-2 max-w-xl text-black/60">
                    A digital agency crafting modern brands, websites, and experiences.
                  </p>
                </div>

                <motion.ul
                  variants={list}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="grid gap-3 sm:gap-4"
                >
                  {NAV_ITEMS.map((it) => (
                    <motion.li key={it.id} variants={item}>
                      <button
                        type="button"
                        onClick={() => goTo(it.id)}
                        className="
                          group w-full rounded-2xl bg-white px-6 py-2 text-left
                          ring-1 ring-black/10
                          hover:ring-2 hover:ring-red-500
                          transition
                        "
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-2xl sm:text-xl font-semibold text-black group-hover:text-red-600 transition">
                            {it.label}
                          </span>

                          <span className="inline-flex items-center gap-2 text-black/40 group-hover:text-red-600 transition">
                            <span className="text-xs tracking-[0.25em] uppercase hidden sm:inline">
                              Open
                            </span>
                            <span className="text-xl">→</span>
                          </span>
                        </div>

                        <div className="mt-2 h-px w-full bg-black/5 group-hover:bg-red-500/25 transition" />
                      </button>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Footer row */}
                <div className="mt-8 flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] uppercase">
                  <span className="text-black/50">Design</span>
                  <span className="text-black/20">•</span>
                  <span className="text-black/50">Development</span>
                  <span className="text-black/20">•</span>
                  <span className="text-black/50">Branding</span>
                  <span className="text-black/20">•</span>
                  <span className="text-black/50">Marketing</span>
                </div>
              </div>
            </div>

            {/* Bottom hint */}
            <div className="pt-4 text-xs text-black/45">
              Tip: Press <span className="font-semibold text-black/70">ESC</span> to close.
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default NavScreen;