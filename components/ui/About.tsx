"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/images/video.mp4" type="video/mp4" />
      </video>

      {/* CAPA OSCURA SOBRE EL VIDEO */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#11180F]/60" />

      {/* CAPA DEGRADADA */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#11180F]/35 via-[#11180F]/50 to-[#11180F]/70" />

      {/* GLOW */}
      <motion.div
        className="pointer-events-none absolute right-[-8%] top-[-15%] -z-10 h-[520px] w-[520px] rounded-full bg-[#D9BD68]/[0.08] blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-[#657653]/[0.10] blur-[130px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl">
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* LABEL */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#D9BD68]/70"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9BD68]/90">
              Nuestra granja
            </p>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#D9BD68]/70"
            />
          </div>

          {/* TITULO */}
          <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.055em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
            Cercanía que se nota
            <span className="text-white/55"> en cada producto.</span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-8 text-white/75 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
            Somos una granja familiar que combina experiencia, dedicación y
            cuidado diario para ofrecer productos de calidad y mantener una
            relación cercana con quienes nos eligen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}