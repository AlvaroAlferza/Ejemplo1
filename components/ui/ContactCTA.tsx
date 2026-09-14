"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { site } from "@/data/site";

export default function ContactCTA() {
  const message = encodeURIComponent(
    "Hola, quisiera consultar por los productos disponibles de la granja."
  );

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${message}`;

  return (
    <section
      id="contacto"
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
        <div className="pointer-events-none absolute right-[-10%] top-[-50%] h-[600px] w-[600px] rounded-full bg-[#D9BD68]/10 blur-[100px]" />

        <div className="relative max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#D9BD68]/70" />

            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Pedidos y consultas
            </p>
          </div>

          <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-6xl">
            ¿Qué te gustaría llevar de nuestra granja?
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-7 text-white/55">
            Escríbenos para consultar disponibilidad, precios y coordinar tu
            pedido directamente con nosotros.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#D9BD68] px-6 py-3.5 text-sm font-semibold text-[#171814] transition-transform duration-300 hover:scale-[1.03]"
          >
            <MessageCircle size={17} />

            Escribir por WhatsApp

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}