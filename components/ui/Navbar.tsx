"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";

const navigation = [
  { label: "Productos", href: "#productos" },
  { label: "La granja", href: "#nosotros" },
  { label: "Calidad", href: "#calidad" },
  { label: "Proceso", href: "#proceso" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-[#171814]/75 px-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:px-7"
      >
        <a
          href="#"
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#D9BD68]">
            <span className="h-3 w-3 rounded-full bg-[#263B24]" />

            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[6px] rounded-full border border-[#263B24]/30"
            />
          </span>

          <span className="text-[16px] font-semibold tracking-[-0.04em]">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-[14px] text-white/65 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contacto"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#D9BD68] px-5 py-3 text-[13px] font-semibold text-[#171814] transition-transform duration-300 hover:scale-[1.03]"
          >
            Pedir productos
            <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              className="absolute left-0 right-0 top-[78px] overflow-hidden rounded-[28px] border border-white/10 bg-[#171814]/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#D9BD68] px-5 py-4 text-sm font-semibold text-[#171814]"
              >
                Pedir productos
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}