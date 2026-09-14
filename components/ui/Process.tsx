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
      className="border-y border-black/[0.08] bg-[#E7E2D5] px-6 py-24 lg:px-10 lg:py-28"
    >
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
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#657653]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Así trabajamos
            </p>

            <span className="h-px w-7 bg-[#657653]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Simple, cercano y transparente.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="relative"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-black/30">
                {step.number}
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
                {step.text}
              </p>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="absolute right-0 top-1 hidden text-black/20 md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}