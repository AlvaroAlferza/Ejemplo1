"use client";

import { motion } from "motion/react";

const videos = [
  {
    src: "/images/gato.mp4",
    alt: "Vida cotidiana en la granja",
  },
  {
    src: "/images/gato.mp4",
    alt: "Animales de la granja",
  },
  {
    src: "/images/gato.mp4",
    alt: "Momentos de la granja",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-24"
    >
      {/* ================= FONDO ================= */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_55%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      />

      {/* CAPA SUAVE */}
      <div className="pointer-events-none absolute inset-0 bg-[#F3F0E7]/55" />

      {/* DETALLE DECORATIVO */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#657653]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* LABEL */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#657653]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Desde la granja
            </p>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#657653]"
            />
          </div>

          {/* TITULO */}
          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Conoce nuestro
            <span className="text-black/35"> día a día.</span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-black/50">
            Un vistazo a los espacios, animales y momentos que forman parte de
            nuestra vida en la granja.
          </p>
        </motion.div>

        {/* ================= GALERÍA ================= */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3 md:items-start">
          {videos.map((video, index) => (
            <motion.figure
              key={`${video.src}-${index}`}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative"
            >
              {/* VIDEO */}
              <div className="relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-black/5 shadow-[0_25px_70px_rgba(23,24,20,0.10)]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* NUMERO */}
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/15 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  0{index + 1}
                </div>

                {/* BORDE INTERIOR */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/10" />
              </div>

              {/* CAPTION */}
              <figcaption className="mt-3 flex items-center justify-between px-1">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                  0{index + 1}
                </span>

                <span className="text-sm text-black/45">
                  {video.alt}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* ================= DETALLE INFERIOR ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mx-auto mt-14 h-px max-w-5xl origin-center bg-gradient-to-r from-transparent via-black/10 to-transparent"
        />
      </div>
    </section>
  );
}