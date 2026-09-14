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
      className="relative overflow-hidden border-y border-black/[0.08] px-6 py-24 lg:px-10 lg:py-28"
    >
      {/* IMAGEN DE FONDO */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      />

      {/* CAPA SUAVE */}
      <div className="pointer-events-none absolute inset-0 bg-[#E7E2D5]/45" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
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
          <div className="mb-5 flex items-center justify-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#657653]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Así trabajamos
            </p>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-[#657653]"
            />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Simple, cercano
            <span className="text-black/35"> y transparente.</span>
          </h2>
        </motion.div>

        {/* PASOS */}
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
                y: -5,
              }}
              className="group relative rounded-[24px] border border-black/[0.08] bg-[#F3F0E7]/55 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-[#F3F0E7]/75"
            >
              {/* NUMERO */}
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#657653]">
                  {step.number}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="text-black/20 transition-transform duration-300 group-hover:translate-x-1 md:block"
                  />
                )}
              </div>

              {/* CONTENIDO */}
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}