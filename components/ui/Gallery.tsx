"use client";

import { motion } from "motion/react";

const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Vida cotidiana en la granja",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Animales de la granja",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Productos de la granja",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#F3F0E7] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#657653]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Desde la granja
            </p>
          </div>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Conoce nuestro día a día.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: index === 1 ? 4 : -4,
              }}
              className={`group overflow-hidden rounded-[30px] ${
                index === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}