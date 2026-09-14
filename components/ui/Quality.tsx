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
      className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-24"
    >
      {/* =====================================================
          FONDO
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[center_55%] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      />

      {/* CAPA SUAVE */}
      <div className="pointer-events-none absolute inset-0 bg-[#F3F0E7]/55" />

      {/* DETALLE DECORATIVO */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#657653]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            ENCABEZADO
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
              className="h-px bg-[#657653]"
            />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Calidad
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
              className="h-px bg-[#657653]"
            />
          </div>

          {/* TITULO */}

          <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
            Hecho con cuidado.
            <br />
            <span className="text-black/35">
              Entregado con confianza.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-7 text-black/50">
            Una forma sencilla y cercana de llevar productos de nuestra granja
            hasta tu mesa.
          </p>
        </motion.div>

        {/* =================================================
            CUALIDADES
        ================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {qualities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  delay: index * 0.12,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  rounded-[28px]
                  border
                  border-black/[0.08]
                  bg-[#F3F0E7]/75
                  p-7
                  shadow-[0_25px_70px_rgba(23,24,20,0.07)]
                  backdrop-blur-md
                  transition-colors
                  duration-500
                  hover:bg-[#F3F0E7]/90
                "
              >
                {/* ICONO */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#263B24] text-[#D9BD68]"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.7}
                  />
                </motion.div>

                {/* TITULO */}

                <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em]">
                  {item.title}
                </h3>

                {/* TEXTO */}

                <p className="mt-3 text-sm leading-6 text-black/50">
                  {item.text}
                </p>

                {/* LINEA DECORATIVA */}

                <div className="mt-6 h-px w-8 bg-[#657653]/40 transition-all duration-500 group-hover:w-14" />
              </motion.div>
            );
          })}
        </div>

        {/* DETALLE INFERIOR */}

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