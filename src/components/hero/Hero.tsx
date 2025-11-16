"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[66vh] w-full items-center justify-center overflow-hidden bg-background"
    >
      <InteractiveGridPattern
        preserveAspectRatio="none"
        squares={[48, 48]}
        className={cn(
          "absolute inset-x-[-10%] inset-y-[-25%] h-[160%] w-[120%] skew-y-12 border-gray-300/20",
        )}
        squaresClassName="stroke-gray-300/20"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 grid w-[80vw] max-w-[1100px] grid-cols-1 gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-2 lg:gap-10 lg:px-0 lg:[grid-template-columns:3fr_2fr]">
        <div className="flex flex-col items-center justify-center lg:items-start">
          <h1 className="text-center text-4xl leading-tight tracking-tight md:text-5xl lg:text-left lg:text-5xl">
            Olá 👋 eu sou Artur
          </h1>
          <p className="mt-3 text-center text-xl md:text-2xl lg:text-left">
            💻 Desenvolvedor{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
              Back-End
            </span>
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 opacity-80 lg:justify-start">
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg"
              alt="TypeScript"
              width={24}
              height={24}
            />
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/go.svg"
              alt="Go"
              width={32}
              height={32}
            />
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg"
              alt="Java"
              width={24}
              height={24}
            />
            <Image
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spring.svg"
              alt="Spring"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <div
            className={cn(
              "relative h-48 w-48 overflow-hidden rounded-2xl bg-white sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72",
              "border border-black/5 shadow-2xl",
              "[box-shadow:inset_0_0_40px_rgba(0,0,0,0.08)]",
              "[box-shadow:0_20px_60px_rgba(0,0,0,0.25)]",
            )}
          >
            <Image
              src="/fotos/Artur.png"
              alt="Foto de Artur Assis Guerra"
              fill
              priority
              className="rounded-2xl object-cover"
              sizes="(max-width: 1024px) 16rem, 18rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
