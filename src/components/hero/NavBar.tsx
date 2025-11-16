/* eslint-disable @next/next/no-img-element */
"use client";

import { ShimmerButton } from "../ui/shimmer-button";

type ActiveItem = "sobre" | "curriculo" | "projetos" | "blog";

interface NavBarProps {
  active?: ActiveItem;
}

export function NavBar({ active = "sobre" }: NavBarProps) {
  return (
    <div className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div
        className="pointer-events-auto mx-auto grid w-[70vw] max-w-[980px] grid-cols-3 items-center rounded-full border border-white/40 bg-white/20 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        style={{
          WebkitBackdropFilter: "blur(18px)",
          backdropFilter: "blur(18px)",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div className="flex items-center justify-start gap-3">
          <span className="text-base font-semibold text-black md:text-lg">
            /arturgrr
          </span>
        </div>
        <nav className="flex items-center justify-center gap-2">
          <button
            type="button"
            aria-current={active === "sobre" ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "sobre"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Sobre mim
          </button>
          <button
            type="button"
            aria-current={active === "projetos" ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "projetos"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Projetos
          </button>
          <button
            type="button"
            aria-current={active === "blog" ? "page" : undefined}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "blog"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Blog
          </button>
        </nav>
        <div className="flex items-center justify-end">
          <ShimmerButton className="shadow-2xl">
            <span className="text-center text-sm font-medium leading-none tracking-tight text-white">
              Entrar em contato
            </span>
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
}
