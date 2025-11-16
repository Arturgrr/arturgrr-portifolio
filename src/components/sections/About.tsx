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
          <p className="whitespace-pre-line">
            {
              "Desenvolvedor Back-End com paixão por tecnologia e foco na criação de soluções eficientes e de fácil manutenção. Minha experiência principal inclui o desenvolvimento e a evolução de microsserviços com Node.js e NestJS, além da implementação de sistemas de mensageria para processamento assíncrono. Sou proficiente em Java (Spring Boot) e Go, e aplico consistentemente os princípios de DDD e Clean Code para garantir a qualidade do software. Busco uma posição onde eu possa aplicar meu conhecimento diversificado em linguagens e arquiteturas para resolver problemas complexos e impulsionar o crescimento técnico da equipe."
            }
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
