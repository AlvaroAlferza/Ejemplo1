"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Seleccionamos",
    text: "Revisamos los productos disponibles y cuidamos cada detalle.",
  },
  {
    number: "02",
    title: "Preparamos",
    text: "Organizamos tu pedido de acuerdo con lo que necesitas.",
  },
  {
    number: "03",
    title: "Coordinamos",
    text: "Confirmamos disponibilidad, precio y entrega directamente contigo.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-y border-white/[0.08] px-6 py-24 lg:px-10 lg:py-28"
    >
      {/* =====================================================
          IMAGEN DE FONDO
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/logo2.jpg')",
        }}
      />

      {/* =====================================================
          CAPA OSCURA
          Permite que el fondo negro se note
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* =====================================================
          GLOW MUY SUTIL
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-[#657653]/[0.08] blur-[130px]" />

      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================== */}

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
          className="mx-auto max-w-3xl text-center"
        >
          {/* LABEL */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 28,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-px bg-[#D9BD68]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9BD68]">
              Así trabajamos
            </p>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 28,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-px bg-[#D9BD68]"
            />
          </div>

          {/* TITULO */}

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Simple, cercano
            <span className="text-white/45"> y transparente.</span>
          </h2>
        </motion.div>

        {/* =================================================
            PASOS
        ================================================== */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
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
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                rounded-[24px]
                border
                border-white/[0.12]
                bg-black/35
                p-7
                shadow-[0_25px_70px_rgba(0,0,0,0.20)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#D9BD68]/30
                hover:bg-black/45
              "
            >
              {/* NUMERO */}

              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#D9BD68]">
                  {step.number}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D9BD68]"
                  />
                )}
              </div>

              {/* CONTENIDO */}

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                {step.text}
              </p>

              {/* LINEA */}

              <div className="mt-7 h-px w-8 bg-[#D9BD68]/40 transition-all duration-500 group-hover:w-14 group-hover:bg-[#D9BD68]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}