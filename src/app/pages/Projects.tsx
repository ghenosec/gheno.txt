import { title } from "process";
import React, { useEffect, useState } from "react";

type Technology = {
  name: string;
  link: string;
};

type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
};

type Project = {
  title: string;
  projectType: string;
  description: string;
  repositoryLink: string;
  liveLink?: string;
  media?: ProjectMedia;
  technologies: Technology[];
  version?: Technology[];
};

const renderProjectMedia = (media?: ProjectMedia) => {
  if (!media) {
    return null;
  }

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        className="h-full w-full rounded-lg object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        Seu navegador não suporta vídeo HTML5.
      </video>
    );
  }

  return (
    <img
      src={media.src}
      alt={media.alt}
      className="h-full w-full rounded-lg object-cover"
    />
  );
};

const ProjectsPage: React.FC = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: "cvPERFEITO",
      projectType:
        "SaaS Web com Inteligência Artificial para Análise e Otimização de Currículos",
      description: `
        O cvPERFEITO é uma plataforma web desenvolvida para auxiliar profissionais a criarem currículos mais estratégicos, modernos e otimizados para processos seletivos automatizados (ATS). O sistema utiliza inteligência artificial para analisar currículos enviados pelos usuários, identificar pontos de melhoria e sugerir otimizações relacionadas à estrutura, clareza, palavras-chave, organização e boas práticas do mercado.
        A plataforma foi criada com foco em aumentar as chances dos candidatos em recrutamentos, oferecendo análises inteligentes, correções automáticas e sugestões profissionais personalizadas para diferentes áreas e níveis de experiência. Além disso, o sistema busca transformar currículos comuns em versões mais atrativas e compatíveis com os filtros utilizados por empresas e recrutadores.
        O projeto conta com uma arquitetura moderna e escalável, utilizando tecnologias atuais no frontend e backend, proporcionando uma experiência rápida, responsiva e intuitiva para o usuário.
      `,
      repositoryLink: "https://github.com/ghenosec/cvPERFEITO",
      liveLink: "https://cv-perfeito.vercel.app/",
      technologies: [
        { name: "Angular", link: "https://angular.dev/" },
        { name: "NestJS", link: "https://nestjs.com/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Prisma ORM", link: "https://www.prisma.io/" },
        { name: "PostgreSQL", link: "https://www.postgresql.org/" },
        { name: "Neon", link: "https://neon.tech/" },
        { name: "OpenAI API", link: "https://platform.openai.com/" },
        { name: "JWT", link: "https://jwt.io/" },
        { name: "Zod", link: "https://zod.dev/" },
        { name: "Render", link: "https://render.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Landing Page cvPERFEITO",
      projectType:
        "Landing Page Institucional para Plataforma SaaS com Inteligência Artificial",
      description: `
        A Landing Page do cvPERFEITO foi desenvolvida com foco em conversão, apresentação do produto e fortalecimento da identidade visual da plataforma. O objetivo principal é demonstrar de forma clara e moderna como a inteligência artificial do sistema auxilia usuários na criação de currículos mais profissionais, otimizados para ATS e alinhados às melhores práticas do mercado.
        O projeto foi pensado para oferecer uma experiência visual moderna, responsiva e intuitiva, utilizando uma interface limpa e estratégica para destacar os benefícios da plataforma, funcionalidades principais, diferenciais competitivos e chamadas para ação. A página também possui foco em performance, SEO e adaptação para diferentes dispositivos, garantindo acessibilidade e carregamento rápido.
        Além da apresentação institucional do SaaS, a landing page foi construída para maximizar conversões de usuários interessados, utilizando seções estratégicas como apresentação de funcionalidades, benefícios, planos, depoimentos e integração visual com a identidade do produto.
      `,
      repositoryLink: "https://github.com/ghenosec/cvperfeito-landing",
      liveLink: "https://cvperfeito-page.vercel.app/",
      technologies: [
        { name: "Next.js", link: "https://nextjs.org/" },
        { name: "React", link: "https://react.dev/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Framer Motion", link: "https://www.framer.com/motion/" },
        { name: "Shadcn/UI", link: "https://ui.shadcn.com/" },
        { name: "Lucide React", link: "https://lucide.dev/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "GestorTrip",
      projectType: "Solução Executável para Desktop sem uso de Internet",
      description: `
        O GestorTrip é um software de gerenciamento de viagens desenvolvido através da demanda de uma cliente. Ela tinha como objetivo sair do Excel e desejava uma solução para atender às necessidades da sua agência de viagens. O aplicativo é uma solução abrangente para a gestão de viagens, oferecendo recursos como cadastro de clientes, controle financeiro e geração de relatórios. O software é projetado para ser fácil de usar, mesmo para aqueles sem experiência técnica, e é acessível offline, permitindo que os usuários acessem suas informações a qualquer momento, mesmo sem conexão com a internet.
      `,
      repositoryLink: "https://github.com/ghenosec/gestortrip",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Radix UI", link: "https://www.radix-ui.com/" },
        { name: "Zod", link: "https://zod.dev/" },
        { name: "Recharts", link: "https://recharts.org/" },
        { name: "React-hook-form", link: "https://react-hook-form.com/" },
        { name: "Date-fns", link: "https://date-fns.org/" },
        { name: "SQLite", link: "https://www.sqlite.org/index.html" },
        { name: "Electronjs", link: "https://www.electronjs.org/" },
      ],
    },
    {
      title: "Landing Page - GestorTrip",
      projectType: "Landing Page",
      description: `
        Landing Page do software GestorTrip, que é um software de gerenciamento de viagens desenvolvido para atender às necessidades de uma agência de viagens. A landing page tem como objetivo apresentar o software, suas funcionalidades e benefícios para potenciais clientes, incentivando-os a conhecer mais sobre o produto e a entrar em contato para adquirir ou solicitar uma demonstração.
      `,
      repositoryLink: "https://github.com/ghenosec/gestortrip-landing",
      liveLink: "https://gestortrip.app/",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Scuba Cat",
      projectType: "Visão Computacional",
      description: `
        Aplicação em Python que utiliza visão computacional para detectar um gesto específico com as mãos e o rosto. Quando o gesto é reconhecido, um GIF é exibido na tela em tempo real.`,
      repositoryLink: "https://github.com/ghenosec/scuba_cat",
      technologies: [
        { name: "Python", link: "https://www.python.org/" },
        { name: "OpenCV", link: "https://opencv.org/" },
        { name: "MediaPipe", link: "https://developers.google.com/mediapipe" },
        { name: "NumPy", link: "https://numpy.org/" },
        { name: "Pillow", link: "https://python-pillow.org/" },
      ],
    },
    {
      title: "Me lemraai - Solução PWA para Gerenciamento de Lembretes",
      projectType: "Solução PWA para Web e Mobile",
      description: `
       Sistema PWA com objetivo em salvar e lembrar lembretes, apertou -> falou -> lembrete criado em 2 segundos em qualquer lugar.
      `,
      repositoryLink: "https://github.com/ghenosec/melembraai",
      liveLink: "https://melembraai.netlify.app/",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Groq", link: "https://groq.com/" },
        { name: "Netlify", link: "https://www.netlify.com/" },
      ],
    },
    {
      title: "Todo List - PWA",
      projectType: "Solução Web e Mobile",
      description: `
        Minha mãe precisava de uma aplicação simples para gerenciar suas tarefas diárias, então decidi criar um Todo list para atender a essa necessidade, aproveitando também para aprender sobre Progressive Web Apps (PWA).
      `,
      repositoryLink: "https://github.com/ghenosec/todo-pwa",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        {
          name: "LocalStorage",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage",
        },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
        { name: "PWA", link: "https://web.dev/progressive-web-apps/" },
      ],
    },
    {
      title: "Cogumelo Filmes",
      projectType: "Landing Page",
      description: `
        Landing Page para a Cogumelo Filmes, empresa de produção audiovisual especializada em filmes publicitários, produções independentes e pós-produção.
      `,
      repositoryLink: "https://github.com/ghenosec/cogumelo-filmes",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "IZcode",
      projectType: "Landing Page",
      description: `
        Landing page da software house IZcode, que oferece serviços de desenvolvimento web.
      `,
      repositoryLink: "https://github.com/ghenosec/siteizcode",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "GYM Strong",
      projectType: "Landing Page",
      description: `
        Landing page de uma academia fictícia desenvolvida para prática e aprendizado de desenvolvimento web.
      `,
      repositoryLink: "https://github.com/ghenosec/gym-page",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Gheno.txt",
      projectType: "Portfólio Pessoal e Currículo",
      description: `
        Meu portfólio pessoal e currículo, inspirado em sistemas operacionais antigos.
        No projeto, é possível encontrar informações sobre mim, meus projetos e experiências. Nesse momento você está visualizando o projeto.
      `,
      repositoryLink: "https://github.com/ghenosec/gheno.txt",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "PostCSS", link: "https://postcss.org/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Go Opportunities",
      projectType: "API de Oportunidades de Emprego",
      description: `
        Uma API moderna de oportunidades de emprego construída usando Golang. A API é desenvolvida por Go-Gin como roteador, GoORM para comunicação de banco de dados, SQLite como banco de dados e Swagger para documentação e teste de API.
        O projeto segue uma estrutura de pacotes moderna para manter a base de código organizada e de fácil manutenção.
      `,
      repositoryLink: "https://github.com/ghenosec/gopportunities",
      technologies: [
        { name: "GoLang", link: "https://go.dev/" },
        { name: "SQLite", link: "https://www.sqlite.org/index.html" },
        { name: "Swagger", link: "https://swagger.io/" },
        { name: "Docker", link: "https://docs.docker.com/" },
        { name: "Docker Compose", link: "https://docs.docker.com/compose/" },
      ],
    },
    {
      title: "Toca Secreta",
      projectType: "Checkout de Vendas",
      description: `
        Checkout de vendas de uma loja de info produto, demonstrando mais detalhes e chamando a atenção do usuário.
      `,
      repositoryLink: "https://github.com/ghenosec/toca-secreta",
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "GhenoTweaks",
      projectType: "Ferramenta para otimização do sistema OS Windows",
      description: `
        Uma ferramenta projetada para otimizar o desempenho e a eficiência do sistema operacional Windows.
      `,
      repositoryLink: "https://github.com/ghenosec/ghenotweaks",
      technologies: [{ name: "Python", link: "https://www.python.org/" }],
      version: [
        { name: "Linux", link: "https://github.com/ghenosec/ghenotweaks-ubuntu" },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Meus Projetos</h1>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            role="button"
            tabIndex={0}
            aria-label={`Abrir projeto ${project.title}`}
            onClick={() => setSelectedProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(project);
              }
            }}
            className={`group flex cursor-pointer flex-col gap-4 rounded-lg border p-4 shadow-md transition-all duration-300 hover:border-green-500 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 ${
              isFadingIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold transition-colors duration-300 group-hover:text-green-800">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-400">{project.projectType}</p>
              </div>

              <span className="text-sm font-semibold text-green-500 transition-colors duration-300 group-hover:text-green-700">
                Ver detalhes
              </span>
            </header>

            <section>
              <h3 className="text-lg font-semibold">Descrição:</h3>
              <p className="whitespace-pre-line leading-relaxed">
                {project.description.trim()}
              </p>
            </section>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="flex max-h-[88vh] w-11/12 max-w-5xl flex-col overflow-hidden rounded-lg bg-white text-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b p-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {selectedProject.projectType}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar projeto"
                className="p-2 text-2xl leading-none text-gray-500 transition-colors duration-300 hover:text-gray-800"
              >
                x
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {selectedProject.media && (
                <section className="mb-6 aspect-video max-h-[420px] overflow-hidden rounded-lg bg-gray-100">
                  {renderProjectMedia(selectedProject.media)}
                </section>
              )}

              <section className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Descrição:</h4>
                <p className="whitespace-pre-line leading-relaxed">
                  {selectedProject.description.trim()}
                </p>
              </section>

              {selectedProject.version &&
                Array.isArray(selectedProject.version) &&
                selectedProject.version.length > 0 && (
                  <section className="mb-6">
                    <h4 className="mb-2 text-lg font-semibold">Versão:</h4>
                    <ul className="list-disc space-y-1 pl-5">
                      {selectedProject.version.map((otherVersion) => (
                        <li key={otherVersion.name}>
                          <a
                            href={otherVersion.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 transition-colors duration-300 hover:text-green-700"
                          >
                            {otherVersion.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              <section>
                <h4 className="mb-3 text-lg font-semibold">
                  Tecnologias usadas:
                </h4>
                <ul className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <li key={tech.name}>
                      <a
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-lg bg-green-500 px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-green-700"
                      >
                        {tech.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="flex flex-col gap-3 border-t p-4 sm:flex-row sm:justify-end">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-green-500 px-4 py-2 text-center font-semibold text-white transition-colors duration-300 hover:bg-green-700"
                >
                  Acessar site
                </a>
              )}

              <a
                href={selectedProject.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-green-500 px-4 py-2 text-center font-semibold text-green-600 transition-colors duration-300 hover:bg-green-50 hover:text-green-800"
              >
                Acessar código fonte
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
