"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TracingBeam } from "@/components/ui/tracing-beam";

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
      <TracingBeam className="px-0">
        <div className="mt-4 space-y-4 text-base leading-relaxed text-black/80 md:mt-6 md:text-lg">
          <BlurFade delay={0.2} inView>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies, nunc at placerat efficitur, urna orci malesuada justo,
              a porttitor lacus sapien ac orci. Integer maximus, neque at
              iaculis bibendum, nibh dui tristique nibh, id interdum felis sem
              non arcu. Integer ac accumsan orci. Sed vulputate, orci at
              elementum ullamcorper, enim turpis sodales nunc, in pulvinar augue
              velit id lacus.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p>
              Quisque nec magna id magna viverra luctus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Aenean rhoncus, ex vitae luctus tempor, metus orci ultrices
              lectus, eget volutpat odio arcu sed lectus. Cras semper, risus in
              pulvinar faucibus, eros neque feugiat dolor, ac tempor est quam
              non risus.
            </p>
          </BlurFade>
        </div>
      </TracingBeam>
    </section>
  );
}
