"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#171814] px-6 pb-14 pt-32 text-white lg:px-10 lg:pb-20">
      {/* Imagen */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(10,12,8,0.94) 0%, rgba(10,12,8,0.62) 45%, rgba(10,12,8,0.28) 100%), url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradiente inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e100c] via-transparent to-black/10" />

      {/* Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[10%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#D9BD68]/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#D9BD68]" />

            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/60">
              Granja familiar · Arequipa
            </p>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
            De nuestra granja
            <br />
            <span className="text-white/45">
              a tu mesa.
            </span>
          </h1>

          <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
            <p className="max-w-md text-[16px] leading-7 text-white/60">
              {site.description}
            </p>

            <a
              href="#productos"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#D9BD68] px-6 py-3.5 text-sm font-semibold text-[#171814] transition-transform duration-300 hover:scale-[1.03]"
            >
              Conocer productos

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#productos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-16 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40"
        >
          Explorar

          <ArrowDown
            size={14}
            className="animate-bounce"
          />
        </motion.a>
      </div>
    </section>
  );
}