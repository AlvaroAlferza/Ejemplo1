"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="productos"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#657653]" />

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#657653]">
              Productos
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
            Lo esencial de nuestra granja.
          </h2>

          <p className="mt-5 max-w-2xl text-[17px] leading-7 text-black/50">
            Productos seleccionados con cuidado para llevar lo mejor de nuestra
            granja directamente a tu mesa.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
              className="group overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

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
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium"
                >
                  Consultar

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}