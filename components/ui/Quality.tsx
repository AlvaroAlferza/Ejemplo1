"use client";

import { motion } from "motion/react";
import {
  HeartHandshake,
  Leaf,
  Sprout,
} from "lucide-react";

const qualities = [
  {
    icon: HeartHandshake,
    title: "Cuidado diario",
    text: "Cada día empieza con atención a nuestros animales y a las condiciones de la granja.",
  },
  {
    icon: Sprout,
    title: "Buenas prácticas",
    text: "Buscamos mantener procesos responsables y una alimentación cuidada.",
  },
  {
    icon: Leaf,
    title: "Origen cercano",
    text: "Conoces de dónde vienen tus productos y puedes coordinar directamente con nosotros.",
  },
];

export default function Quality() {
  return (
    <section
      id="calidad"
      className="bg-[#F3F0E7] px-6 py-24 lg:px-10 lg:py-32"
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
              Calidad
            </p>

            <span className="h-px w-7 bg-[#657653]" />
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
            Hecho con cuidado.
            <br />
            Entregado con confianza.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-black/50">
            Una forma sencilla y cercana de llevar productos de nuestra granja
            hasta tu mesa.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {qualities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="rounded-[28px] border border-black/[0.08] bg-white/45 p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#263B24] text-[#D9BD68]">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}