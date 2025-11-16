/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ShimmerButton } from "../ui/shimmer-button";

type ActiveItem = "sobre" | "curriculo" | "projetos" | "blog";

interface NavBarProps {
  active?: ActiveItem;
}

export function NavBar({ active = "sobre" }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
      if (
        contactRef.current &&
        !contactRef.current.contains(e.target as Node)
      ) {
        setContactOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);
  return (
    <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div
        className="mx-auto grid w-[70vw] max-w-[980px] grid-cols-3 items-center rounded-full border border-white/40 bg-white/20 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        style={{
          WebkitBackdropFilter: "blur(18px)",
          backdropFilter: "blur(18px)",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div className="flex items-center justify-start gap-3">
          <Link
            href="/"
            className="flex items-center text-base font-semibold text-black md:text-lg"
          >
            <Image
              src="/icons/favicon.png"
              alt="Artur Guerra logo"
              width={28}
              height={28}
              className="mr-2"
              priority
            />
            <span>/arturgrr</span>
          </Link>
        </div>
        <nav className="hidden items-center justify-center gap-2 lg:flex">
          <Link
            href="/#sobre"
            aria-current={active === "sobre" ? "page" : undefined}
            className={`cursor-none rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "sobre"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Sobre mim
          </Link>
          <Link
            href="/projetos"
            aria-current={active === "projetos" ? "page" : undefined}
            className={`cursor-none rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "projetos"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Projetos
          </Link>
          <Link
            href="/blog"
            aria-current={active === "blog" ? "page" : undefined}
            className={`cursor-none rounded-full px-3 py-1.5 text-sm transition-colors whitespace-nowrap ${
              active === "blog"
                ? "bg-black/10 text-black"
                : "text-black/80 hover:bg-black/10"
            }`}
          >
            Blog
          </Link>
        </nav>
        <div className="col-start-3 flex items-center justify-end gap-2 justify-self-end">
          <div className="relative lg:hidden" ref={menuRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full px-3 py-1.5 text-sm text-black/90 transition-colors hover:bg-black/10"
            >
              Menu
            </button>
            {open ? (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-black/10 bg-white/90 p-1 text-sm shadow-xl backdrop-blur-md"
              >
                <Link
                  href="/#sobre"
                  className="block rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  Sobre mim
                </Link>
                <Link
                  href="/projetos"
                  className="block rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  Projetos
                </Link>
                <Link
                  href="/blog"
                  className="block rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
                <div className="my-1 h-px w-full bg-black/10" />
                <a
                  href="https://www.linkedin.com/in/arturgrr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/arturgrr"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                  />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:arturassisguerra@gmail.com"
                  className="mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg"
                    alt="Email"
                    width={16}
                    height={16}
                  />
                  <span className="whitespace-nowrap">Email</span>
                </a>
              </div>
            ) : null}
          </div>
          <div className="relative hidden lg:block" ref={contactRef}>
            <button
              type="button"
              onClick={() => setContactOpen((v) => !v)}
              className="rounded-full"
            >
              <ShimmerButton className="shadow-2xl">
                <span className="text-center text-sm font-medium leading-none tracking-tight text-white">
                  Entrar em contato
                </span>
              </ShimmerButton>
            </button>
            {contactOpen ? (
              <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-black/10 bg-white/90 p-2 text-sm shadow-xl backdrop-blur-md">
                <a
                  href="https://github.com/arturgrr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                    alt="GitHub"
                    width={18}
                    height={18}
                  />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/arturgrr"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                  />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:arturassisguerra@gmail.com"
                  className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-black/80 hover:bg-black/5"
                >
                  <Image
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg"
                    alt="Email"
                    width={18}
                    height={18}
                  />
                  <span className="whitespace-nowrap">Email</span>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
