"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="productos"
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

      {/* GLOW DECORATIVO */}
      <div className="pointer-events-none absolute left-[-10%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#657653]/[0.07] blur-[120px]" />

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
              Productos
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

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Lo esencial de nuestra granja.
          </h2>

          {/* DESCRIPCIÓN */}

          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-7 text-black/50">
            Productos seleccionados con cuidado para llevar lo mejor de nuestra
            granja directamente a tu mesa.
          </p>
        </motion.div>

        {/* =================================================
            PRODUCTOS
        ================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-black/[0.09]
                bg-[#F3F0E7]/90
                shadow-[0_25px_70px_rgba(23,24,20,0.08)]
                backdrop-blur-md
              "
            >
              {/* =================================================
                  IMAGEN
              ================================================== */}

              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* NUMERO */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/15
                    text-[10px]
                    font-medium
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  0{index + 1}
                </div>
              </div>

              {/* =================================================
                  CONTENIDO
              ================================================== */}

              <div className="p-6 lg:p-7">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/35">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/50">
                  {product.description}
                </p>

                <a
                  href="#contacto"
                  className="
                    group/link
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                  "
                >
                  Consultar

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover/link:-translate-y-0.5
                      group-hover/link:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </motion.article>
          ))}
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