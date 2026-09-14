import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import { site } from "@/data/site";

const navigation = [
  { label: "Inicio", href: "#" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${site.whatsapp}`;

  return (
    <footer className="relative overflow-hidden border-t border-black/[0.08] bg-[#F3F0E7] px-6 pt-12 lg:px-10 lg:pt-14">
      {/* IMAGEN DE FONDO */}
<div
  className="pointer-events-none absolute inset-0 bg-cover bg-[center_75%] bg-no-repeat opacity-100"
  style={{
    backgroundImage: "url('/images/fondo.jpg')",
  }}
/>

{/* CAPA SUAVE PARA LEGIBILIDAD */}
<div className="pointer-events-none absolute inset-0 bg-[#F3F0E7]/25" />

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* GRID PRINCIPAL */}
        <div className="grid gap-10 border-b border-black/[0.10] pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* MARCA */}
          <div>
            <a
              href="#"
              className="inline-block text-xl font-semibold tracking-[-0.045em]"
            >
              {site.name}
            </a>

            <p className="mt-3 max-w-xs text-sm leading-6 text-black/50">
              {site.tagline}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-black/40">
              <MapPin size={14} />
              {site.location}
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              Explorar
            </p>

            <nav className="mt-4 flex flex-col gap-2.5">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-1 text-sm text-black/60 transition-colors hover:text-black"
                >
                  {item.label}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* CONTACTO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              Contacto
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
              >
                <Mail size={15} />
                {site.email}
              </a>

              <a
                href={site.instagram}
                className="flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
              >
                <FaInstagram size={15} />
                Instagram
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              ¿Tienes una consulta?
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-black/50">
              Escríbenos para consultar productos, disponibilidad y pedidos.
            </p>

            <a
              href="#contacto"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Contáctanos
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-black/40 transition-colors hover:text-black"
            >
              Privacidad
            </a>

            <a
              href="#"
              className="text-xs text-black/40 transition-colors hover:text-black"
            >
              Términos
            </a>

            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-black/15 bg-white/30 transition-all duration-300 hover:bg-black hover:text-white"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}