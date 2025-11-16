"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export interface CertificationItemProps {
  issuer: string;
  name: string;
  period: string;
  description: string;
  logoUrl: string;
}

export function CertificationItem({
  issuer,
  name,
  period,
  description,
  logoUrl,
}: CertificationItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white">
        <Image src={logoUrl} alt={issuer} width={32} height={32} />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-black">{name}</h3>
          <span className="text-sm text-black/60">{period}</span>
        </div>
        <p className="text-sm font-medium text-black/80">{issuer}</p>
        <p className="mt-2 text-sm leading-relaxed text-black/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export interface CertificationsProps {
  title?: string;
  items?: CertificationItemProps[];
}

export function Certifications({
  title = "Cursos e certificações",
  items = [],
}: CertificationsProps) {
  return (
    <section
      id="certificacoes"
      className="mx-auto w-[80vw] max-w-[1100px] py-12 md:py-16"
    >
      <BlurFade delay={0.1} inView>
        <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </BlurFade>
      <div className="mt-6 space-y-8">
        {items.map((item, i) => {
          const delay = 0.15 + i * 0.1;
          return (
            <BlurFade
              key={`${item.issuer}-${item.name}-${i}`}
              delay={delay}
              inView
            >
              <CertificationItem {...item} />
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
