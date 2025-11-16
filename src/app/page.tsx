import { Hero } from "@/components/hero/Hero";
import { NavBar } from "@/components/hero/NavBar";

export default function Home() {
  return (
    <>
      <NavBar active="sobre" />
      <Hero />
    </>
  );
}
