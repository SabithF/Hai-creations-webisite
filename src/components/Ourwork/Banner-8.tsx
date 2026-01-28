import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const galleryReveal = {
  hidden: { height: 0, opacity: 0 },
  show: { height: "auto", opacity: 1, transition: { duration: 0.5, ease: easeOut } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.35, ease: easeOut } },
};

const thumbVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.03, ease: easeOut },
  }),
};

const BannerEight: React.FC = () => {
  const [viewMore, setViewMore] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const images = useMemo(
    () => Array.from({ length: 4 }, (_, i) => `/assets/img/branding/${i + 1}.png`),
    []
  );

  const FEATURED_COUNT = 4;
  const featured = useMemo(
    () => images.slice(0, Math.min(FEATURED_COUNT, images.length)),
    [images]
  );

  const more = useMemo(() => images.slice(FEATURED_COUNT), [images]);

  const hasMore = more.length > 0;

  const onToggle = () => {
    setViewMore((prev) => {
      const next = !prev;

      if (next) {
        requestAnimationFrame(() => {
          galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }

      return next;
    });
  };

  return (
    <section className="relative">
      {/* Banner */}
      <img src="/assets/banner/outdoor-banner.jpg" alt="Banner 8" className="w-full h-auto" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* FEATURED */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {featured.map((src, index) => (
            <motion.div
              key={src}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] xl:h-[680px]">
                <img
                  src={src}
                  alt={`Work ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON (only if extra images exist) */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onToggle}
              className="mt-14 inline-flex items-center justify-center rounded-full px-7 py-3 bg-red-500 text-white hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-400/60 focus:ring-offset-2"
            >
              {viewMore ? "View less" : "View more"}
            </button>
          </div>
        )}

        {/* EXPANDABLE GALLERY (only if extra images exist) */}
        {hasMore && (
          <div ref={galleryRef} className="mt-12">
            <AnimatePresence initial={false}>
              {viewMore && (
                <motion.div
                  key="more-gallery"
                  variants={galleryReveal}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
                    {more.map((src, index) => (
                      <motion.div
                        key={src}
                        custom={index}
                        variants={thumbVariants}
                        initial="hidden"
                        animate="show"
                        className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-square">
                          <img
                            src={src}
                            alt={`Work ${FEATURED_COUNT + index + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerEight;
