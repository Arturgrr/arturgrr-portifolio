"use client";

import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section
      id="sobre"
      className="mx-auto w-[80vw] max-w-[1100px] py-12 md:py-16"
    >
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-5xl">
          Conheça mais sobre mim
        </h2>
      </BlurFade>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-black/80 md:mt-6 md:text-lg">
        <BlurFade delay={0.2} inView>
          <p>
            Desenvolvedor Back-End com foco em Java, Spring, Go e Node.js. Atuo
            na criação de APIs, microsserviços e integrações, sempre aplicando
            boas práticas como DDD e Clean Code para construir soluções
            escaláveis e de fácil manutenção. Tenho experiência prática em
            mensageria e filas para processamento assíncrono, garantindo
            resiliência e performance.
          </p>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p>
            Comecei no desenvolvimento Back-End aos 14 anos, quando decidi criar
            plugins para o meu servidor de Minecraft. Desde então, sigo
            aprofundando conhecimentos e transformando ideias em produtos que
            geram impacto real.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
