"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { site } from "@/data/site";

export default function About() {
  const message = encodeURIComponent(
    "Hola, quisiera consultar por los productos disponibles de la granja."
  );

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${message}`;

  return (
    <section
      id="nosotros"
      className="bg-[#F3F0E7] px-6 pb-24 pt-8 lg:px-10 lg:pb-32"
    >
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
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#263B24] px-7 py-14 text-white sm:px-12 lg:px-16 lg:py-20"
      >
        {/* GLOW */}
        <motion.div
          className="pointer-events-none absolute right-[-10%] top-[-50%] h-[600px] w-[600px] rounded-full bg-[#D9BD68]/10 blur-[100px]"
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

        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* LABEL */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 30,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-px bg-[#D9BD68]/70"
            />

            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Nuestra granja
            </p>

            <motion.span
              initial={{
                width: 0,
              }}
              whileInView={{
                width: 30,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="h-px bg-[#D9BD68]/70"
            />
          </div>

          {/* TITULO */}
          <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">
            Cercanía que se nota
            <span className="text-white/40"> en cada producto.</span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-7 text-white/55">
            Somos una granja familiar que combina experiencia, dedicación y
            cuidado diario para ofrecer productos de calidad y mantener una
            relación cercana con quienes nos eligen.
          </p>

          {/* BOTÓN WHATSAPP */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D9BD68] px-6 py-3.5 text-sm font-semibold text-[#171814] transition-transform duration-300"
          >
            <MessageCircle size={17} />

            Escribir por WhatsApp

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}