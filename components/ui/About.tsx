"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#20291D] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[#D9BD68]/[0.06] blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#D9BD68]/70" />

            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
              Nuestra granja
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          }}
        >
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
            Cercanía que se nota
            <span className="text-white/35"> en cada producto.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-[17px] leading-8 text-white/55">
            Somos una granja familiar que combina experiencia, dedicación y
            cuidado diario para ofrecer productos de calidad y mantener una
            relación cercana con quienes nos eligen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}