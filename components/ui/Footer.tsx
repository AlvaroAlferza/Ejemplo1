import { ArrowUp, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-[#F3F0E7] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#"
            className="text-lg font-semibold tracking-[-0.04em]"
          >
            {site.name}
          </a>

          <p className="mt-1 text-sm text-black/40">
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
            aria-label="Volver arriba"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-black/[0.08] pt-5">
        <p className="text-xs text-black/30">
          © {new Date().getFullYear()} {site.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}