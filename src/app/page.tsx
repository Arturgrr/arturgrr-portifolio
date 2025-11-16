import { Hero } from "@/components/hero/Hero";
import { NavBar } from "@/components/hero/NavBar";
import { About } from "@/components/sections/About";
import { BlurFade } from "@/components/ui/blur-fade";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <>
      <BlurFade delay={0.2} inView>
        <NavBar active="sobre" />
        <Hero />
      </BlurFade>
      <About />
      <SmoothCursor />
    </>
  );
}
