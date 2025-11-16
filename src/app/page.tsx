import { Hero } from "@/components/hero/Hero";
import { NavBar } from "@/components/hero/NavBar";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Volunteering } from "@/components/sections/Volunteering";
import { BlurFade } from "@/components/ui/blur-fade";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  const experienceItems = [
    {
      company: "Codarte Soluções",
      role: "Estágio em desenvolvimento Back-End",
      period: "Out. 2025 — O momento",
      description:
        "Atuação no backend da ConversaAI, CRM para WhatsApp com agente de IA. Desenvolvimento de funcionalidades e microsserviços com Node.js (NestJS) e TypeScript. Implementação de mensageria e filas para processamento assíncrono. Aplicação de DDD e Clean Code.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
    },
    {
      company: "Real Esporte Clube · João Monlevade, MG",
      role: "Estágio Técnico Administrativo",
      period: "Mai. 2025 — Out. 2025",
      description:
        "Organização de torneios e logística de aulas. Desenvolvimento de aplicação Full-Stack para gestão esportiva (cadastro, horários, frequência e mensalidades) com Node.js, React, TypeScript e PostgreSQL.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg",
    },
    {
      company: "Grupo A2G · Timóteo, MG",
      role: "Gestor de T.I.",
      period: "Jan. 2023 — Mai. 2025",
      description:
        "Desenvolvimento de materiais visuais, manutenção de sites e suporte a sistemas internos, unindo programação (JavaScript) e design (Figma, Photoshop).",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg",
    },
  ];

  const educationItems = [
    {
      institution: "UFOP — Universidade Federal de Ouro Preto",
      degree: "Bacharelado em Sistemas de Informação",
      period: "Mai. 2023 — O momento",
      description:
        "Base em estruturas de dados, redes, sistemas distribuídos e desenvolvimento de software.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graduationcap.svg",
    },
    {
      institution: "Colégio Universitário Padre de Man",
      degree: "Ensino Médio",
      period: "2020 — 2022",
      description:
        "Formação com foco em exatas e participação ativa em projetos estudantis.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/school.svg",
    },
  ];

  const volunteeringItems = [
    {
      organization: "Ordem DeMolay",
      role: "Lideranças diversas",
      period: "2021 — Presente",
      description:
        "Desenvolvimento de liderança, oratória e gestão de equipes em atividades filantrópicas. Cargos: Mestre Conselheiro Regional, Mestre Conselheiro, Tesoureiro, Escrivão, Secretário de Marketing, Coordenador de E-sports e Corretor de Campanha.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/teamspeak.svg",
    },
    {
      organization: "Escoteiros do Brasil",
      role: "Sub-monitor (vice-líder) de patrulha",
      period: "2016 — 2018",
      description:
        "Participação em acampamentos e atividades de grupo, com foco em trabalho em equipe e responsabilidade.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/scout.svg",
    },
  ];

  const certificationItems = [
    {
      issuer: "Rocketseat",
      name: "Formação GO",
      period: "2025 · 60h",
      description:
        "Go do básico ao avançado: concorrência (goroutines/channels), generics, APIs REST (go-chi), SQLite/MySQL/PostgreSQL (SQLc, SQLx, Squirrel), HTTP/WebSockets, testes (Testify), Docker/AWS/GitHub Actions e MVC.",
      logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/go.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação ReactJS 2022",
      period: "2025 · 50h",
      description:
        "React (fundamentos, SPA, consumo de APIs, performance), Next.js, Design System/Storybook e app Full-Stack com Next.js.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação Java",
      period: "2025 · 100h",
      description:
        "Java (básico/intermediário), Spring Boot, API REST, JPA, JWT, Swagger, testes (JUnit/Mockito), deploy/monitoramento (Prometheus/Grafana), Thymeleaf, patterns e DDD.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spring.svg",
    },
    {
      issuer: "Bradesco + DIO",
      name: "Bootcamp Bradesco Java Cloud Native",
      period: "2025 · 90h",
      description:
        "Java/Spring, SQL/NoSQL, microsserviços em nuvem (Azure/OpenShift), Azure OpenAI, IA em cloud, projetos práticos e portfólio.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação Node.js",
      period: "2024 · 50h",
      description:
        "Node.js, Streams, TypeScript, Clean Architecture, DDD, Docker, testes (Vitest), Fastify/Knex/Prisma, SOLID, JWT e NestJS.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
    },
    {
      issuer: "DIO",
      name: "Formação Kotlin Experience",
      period: "2022 · 40h",
      description:
        "Kotlin para back-end/mobile, boas práticas, desafios, agilidade e projetos reais.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/kotlin.svg",
    },
  ];

  return (
    <>
      <BlurFade delay={0.2} inView>
        <NavBar active="sobre" />
        <Hero />
      </BlurFade>
      <About />
      <Experience items={experienceItems} />
      <Education items={educationItems} />
      <Volunteering items={volunteeringItems} />
      <Certifications items={certificationItems} />
      <SmoothCursor />
    </>
  );
}
