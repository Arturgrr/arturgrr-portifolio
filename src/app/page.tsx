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
        "Atuação no desenvolvimento e evolução do backend da ConversaAI, uma plataforma de CRM para WhatsApp com agente de IA integrado para automação de atendimento. Desenvolvimento de novas funcionalidades e manutenção de microsserviços com Node.js e o framework NestJS, utilizando TypeScript para garantir a robustez e a qualidade do código. Implementação de sistemas de mensageria e filas (queues) para o processamento assíncrono de tarefas, garantindo a resiliência e a escalabilidade do sistema. Aplicação de princípios de Domain-Driven Design (DDD) e Clean Code para projetar soluções coesas, escaláveis e de fácil manutenção.",
      logoUrl: "/work/codarte.jpeg",
    },
    {
      company: "Real Esporte Clube · João Monlevade, MG",
      role: "Estágio Técnico Administrativo",
      period: "Mai. 2025 — Out. 2025",
      description:
        "Atuação estratégica no setor de esportes, incluindo organização de torneios de diversas modalidades (futebol, futsal, vôlei, jiu-jitsu) e coordenação de logística de aulas, professores e alunos. Gestão administrativa e operacional com uso avançado de Excel para organização de dados, controle de matrículas, processos de cobrança e agendamento. Desenvolvimento de Aplicação Full-Stack para Gestão Esportiva: ○ Concebi, desenvolvi e implementei do zero uma solução completa em produção para otimizar a gestão da escola de esportes. ○ Funcionalidades: Cadastro e gestão de aulas, horários, alunos e professores; controle de frequência automatizado e gerenciamento de mensalidades. ○ Tecnologias: Node.js, React, TypeScript, PostgreSQL e deploy em ambiente de nuvem.",
      logoUrl: "/work/REAL.png",
    },
    {
      company: "Grupo A2G · Timóteo, MG",
      role: "Gestor de T.I.",
      period: "Jan. 2023 — Mai. 2025",
      description:
        " Responsável pelo desenvolvimento de materiais visuais, manutenção de sites institucionais e suporte técnico no uso de programas internos. Aliei habilidades técnicas de programação (JavaScript) e design (Figma, Photoshop) para entregar soluções alinhadas às necessidades do ambiente empresarial.",
      logoUrl: "/work/a2g.png",
    },
  ];

  const educationItems = [
    {
      institution: "UFOP — Universidade Federal de Ouro Preto",
      degree: "Bacharelado em Sistemas de Informação",
      period: "Mai. 2023 — O momento",
      description: "",
      logoUrl: "/estudos/ufop-logo.jpg",
    },
    {
      institution: "Colégio Universitário Padre de Man",
      degree: "Ensino Médio",
      period: "2020 — 2022",
      description: "",
      logoUrl: "/estudos/COLEGIO-CATOLICA-PADRE-DE-MAN.webp",
    },
  ];

  const volunteeringItems = [
    {
      organization: "Ordem DeMolay",
      role: "(2021 - Presente)",
      period: "",
      description:
        " Desenvolvimento de liderança, oratória, gestão de equipes e responsabilidade cívica através de atividades filantrópicas e de desenvolvimento pessoal. Cargos de Liderança Exercidos: Mestre Conselheiro Regional, Mestre Conselheiro (Presidente de Capítulo), Tesoureiro, Escrivão, Secretário de Marketing, Coordenador de E-sports e Corretor de Campanha (CNIE/CRN-GE).",
      logoUrl: "/voluntarios/demolay.jpeg",
    },
    {
      organization: "Escoteiros do Brasil",
      role: "(2016 — 2018)",
      period: "",
      description:
        " Desenvolvimento de liderança prática, trabalho em equipe e responsabilidade em atividades de grupo. Participei ativamente de acampamentos e atividades de grupo, ocupando a posição de sub-monitor (vice-líder) da patrulha, onde desenvolvi liderança prática, trabalho em equipe e responsabilidade.",
      logoUrl: "/voluntarios/escoteiro.png",
    },
  ];

  const certificationItems = [
    {
      issuer: "Rocketseat",
      name: "Formação GO",
      period: "2025 · 60h",
      description:
        "Domínio completo da linguagem Go, incluindo fundamentos e conceitos avançados como concorrência com goroutines e channels, uso de generics, desenvolvimento de APIs REST com bibliotecas como go-chi, integração com bancos de dados SQLite, MySQL, PostgreSQL utilizando ferramentas como SQLc, SQLx e Squirrel. Manipulação avançada de HTTP, WebSockets, testes automatizados com Testify, deploy e orquestração de aplicações usando Docker, Docker Compose e AWS, além da automação de pipelines CI/CD com GitHub Actions. Aplicação do padrão arquitetural MVC para construção de projetos modulares, escaláveis e de alta performance.",
      logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/go.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação ReactJS 2022",
      period: "2025 · 50h",
      description:
        "Fundamentos do ReactJS, Criação de SPAs com ReactJS, Consumo de API e performance no ReactJS, Fundamentos do Next.js, Design System e Storybook e Criação de aplicação FullStack com NextJS.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação Java",
      period: "2025 · 100h",
      description:
        "Fundamentos de Java (Sintaxe e Semântica, Tipos Primitivos, Operadores, Controladores de Fluxo, Orientação a Objetos, Java Time, Java N-IO, Exceções e Expressões), Java Intermediário (Collections, Maven, JDBC), Spring Boot, API REST, JPA, Autenticação com JWT, Documentação com Swagger, Testes com Junit e Mockito, Implantação e Monitoramento com Prometheus e Grafana, Thymeleaf, Design patterns e DDD.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/spring.svg",
    },
    {
      issuer: "Bradesco + DIO",
      name: "Bootcamp Bradesco Java Cloud Native",
      period: "2025 · 90h",
      description:
        "Fundamentos de Java e Programação Orientada a Objetos, Sintaxe e Estrutura de Aplicações, Desenvolvimento de APIs com Spring Boot, Integração com Banco de Dados SQL e NoSQL (MongoDB), Deploy de Microsserviços em Nuvem com Azure e Red Hat OpenShift, Implementação de Soluções com Azure OpenAI, Aplicações Práticas de Inteligência Artificial em Serviços Cloud, Projetos Práticos, Mentorias, Desafios de Código e Portfólio Profissional.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg",
    },
    {
      issuer: "Rocketseat",
      name: "Formação Node.js",
      period: "2024 · 50h",
      description:
        "Fundamentos do Node.js, Streams, TypeScript, Clean Architecture, Domain-driven Design (DDD), Docker, Pirâmide de Testes, Vitest, Criação de API Rest com Fastify e Knex, Criação de API utilizando Fastify, Prisma, SOLID e autenticação com JWT, Fundamentos do NestJS, além de outros Design Patterns, como repository e factory pattern.",
      logoUrl:
        "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
    },
    {
      issuer: "DIO",
      name: "Formação Kotlin Experience",
      period: "2022 · 40h",
      description:
        "Fundamentos da Linguagem de Programação Kotlin, Sintaxe e Estrutura de Código, Boas Práticas no Desenvolvimento Back-end e Mobile, Resolução de Desafios com Kotlin, Princípios de Agilidade no Desenvolvimento de Software, Fortalecimento de Perfil Profissional, Projetos Práticos e Aplicações Reais voltadas ao Mercado.",
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
