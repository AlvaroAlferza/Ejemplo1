"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

const leftPhotos = [
  {
    src: "/images/cuy.jpg",
    alt: "Gallinas de la granja",
    delay: 0.15,
    y: -70,
    rotate: -1.5,
  },
  {
    src: "/images/gallina.jpg",
    alt: "Huevos frescos de la granja",
    delay: 0.4,
    y: 70,
    rotate: 1.5,
  },
];

const rightPhotos = [
  {
    src: "/images/pavo.jpg",
    alt: "Pavo de la granja",
    delay: 0.65,
    y: -70,
    rotate: 1.5,
  },
  {
    src: "/images/pavo.jpg",
    alt: "Cuy de la granja",
    delay: 0.9,
    y: 70,
    rotate: -1.5,
  },
];

function GalleryFrame({
  src,
  alt,
  delay,
  y,
  rotate,
}: {
  src: string;
  alt: string;
  delay: number;
  y: number;
  rotate: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        scale: 0.97,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        delay,
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="shrink-0"
      style={{
        rotate,
      }}
    >
      <div
        className="
          relative
          h-[300px]
          w-[108px]
          overflow-hidden
          rounded-[14px]
          border
          border-[#D9BD68]/55
          bg-[#111]
          p-[3px]
          shadow-[0_25px_70px_rgba(0,0,0,0.55)]
          md:h-[350px]
          md:w-[125px]
          lg:h-[390px]
          lg:w-[138px]
          xl:h-[430px]
          xl:w-[150px]
        "
      >
        <div className="relative h-full w-full overflow-hidden rounded-[10px]">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/25" />
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[14px] ring-1 ring-inset ring-white/[0.08]" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">

      {/* Glow central */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D9BD68]/[0.035]
          blur-[150px]
        "
      />

      {/* Línea central */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.025]" />

      {/* =====================================================
          CONTENIDO COMPLETO
      ===================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1500px]
          items-center
          justify-center
          px-6
          pt-24
          pb-20
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div className="flex w-full items-center justify-between gap-8 lg:gap-12 xl:gap-16">

          {/* =================================================
              GALERÍA IZQUIERDA
          ================================================= */}
          <div className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4 xl:gap-5">
            {leftPhotos.map((photo) => (
              <GalleryFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                delay={photo.delay}
                y={photo.y}
                rotate={photo.rotate}
              />
            ))}
          </div>

          {/* =================================================
              HERO CENTRAL
          ================================================= */}
          <div className="relative z-20 flex min-w-0 flex-1 justify-center">
            <div className="flex w-full max-w-[620px] flex-col items-center text-center">

              {/* Eyebrow */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-7 flex items-center gap-3"
              >
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 30 }}
                  transition={{
                    delay: 1.35,
                    duration: 0.6,
                  }}
                  className="h-px bg-[#D9BD68]"
                />

                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45 sm:text-xs">
                  Granja familiar · Arequipa
                </span>

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 30 }}
                  transition={{
                    delay: 1.35,
                    duration: 0.6,
                  }}
                  className="h-px bg-[#D9BD68]"
                />
              </motion.div>

              {/* Título */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 28,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 1.3,
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[48px]
                  font-semibold
                  leading-[0.92]
                  tracking-[-0.065em]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[72px]
                  xl:text-[80px]
                "
              >
                De nuestra granja
                <br />
                <span className="text-white/35">
                  a tu mesa.
                </span>
              </motion.h1>

              {/* Descripción */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.55,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-7
                  max-w-md
                  text-[15px]
                  leading-7
                  text-white/45
                  sm:text-[16px]
                "
              >
                {site.description}
              </motion.p>

              {/* CTA */}
              <motion.a
                href="#productos"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.75,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#D9BD68]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#171814]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:bg-[#E4CB78]
                "
              >
                Conocer productos

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              {/* Línea */}
              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 90,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.95,
                  duration: 0.8,
                }}
                className="mt-12 h-px bg-white/10"
              />
            </div>
          </div>

          {/* =================================================
              GALERÍA DERECHA
          ================================================= */}
          <div className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4 xl:gap-5">
            {rightPhotos.map((photo) => (
              <GalleryFrame
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                delay={photo.delay}
                y={photo.y}
                rotate={photo.rotate}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          EXPLORAR
      ===================================================== */}
      <motion.a
        href="#productos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/25
          md:flex
        "
      >
        <span>Explorar</span>

        <span className="relative flex h-7 w-px overflow-hidden bg-white/10">
          <motion.span
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-0 h-1/2 w-full bg-[#D9BD68]"
          />
        </span>

        <ArrowDown size={12} className="text-white/20" />
      </motion.a>

      {/* =====================================================
          MOBILE
      ===================================================== */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 md:hidden">
        <motion.a
          href="#productos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-white/25"
        >
          <span>Explorar</span>

          <span className="relative flex h-7 w-px overflow-hidden bg-white/10">
            <motion.span
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-1/2 w-full bg-[#D9BD68]"
            />
          </span>

          <ArrowDown size={12} className="text-white/20" />
        </motion.a>
      </div>
    </section>
  );
}