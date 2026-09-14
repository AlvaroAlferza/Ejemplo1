import { ArrowUp, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative min-h-[420px] overflow-hidden border-t border-black/[0.08] px-6 py-14 lg:min-h-[500px] lg:px-10 lg:py-16">
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/fondo.jpg')",
        }}
      />

      {/* DEGRADADO MUY SUTIL */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F3F0E7]/70 via-[#F3F0E7]/20 to-transparent" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex min-h-[380px] flex-col justify-between lg:min-h-[450px]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#"
              className="text-lg font-semibold tracking-[-0.04em]"
            >
              {site.name}
            </a>

            <p className="mt-1 text-sm text-black/50">
              {site.tagline}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              Contactar
              <ArrowUpRight size={15} />
            </a>

            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/20 backdrop-blur-sm transition hover:bg-black hover:text-white"
              aria-label="Volver arriba"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl border-t border-black/[0.10] pt-5">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}