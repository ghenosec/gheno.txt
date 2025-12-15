import React, { useEffect, useState } from "react";

const ProjectsPage: React.FC = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  const projects = [
    {
      title: "Todo List - PWA",
      projectType: "Solução Web e Mobile",
      description: `
        Minha mãe precisava de uma aplicação simples para gerenciar suas tarefas diárias, então decidi criar um Todo list para atender a essa necessidada, assim aproveitando e aprendendo sobre Progressive Web Apps (PWA).
      `,
      repositoryLink: "https://github.com/ghenosec/todo-pwa",
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "LocalStorage", link: "https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
        { name: "PWA", link: "https://web.dev/progressive-web-apps/" },
      ],
    },
    {
      title: "Coguemlo Filmes",
      projectType: "Landin Page",
      description: `
        Landing Page para a Cogumelo Filmes, empresa de produção audiovisual especializada em filmes publicitários, produções independentes e pós-produção.
      `,
      repositoryLink: "https://github.com/ghenosec/cogumelo-filmes",
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "IZcode",
      projectType: "Landin Page",
      description: `
        Landin-page da software house IZcode, que oferece serviços de desenvolvimento web.
      `,
      repositoryLink: "https://github.com/ghenosec/siteizcode",
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "GYM Strong",
      projectType: "Landin Page",
      description: `
        Landin-page de uma academia fictícia desenvolvida afins de prática e aprendizado de desenvolvimento web.
      `,
      repositoryLink: "https://github.com/ghenosec/gym-page",
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
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
        No projeto, é possível encontrar informações sobre mim, meus projetos e experiências. Nesse momento você está vizualizando o projeto.
      `,
      repositoryLink: "https://github.com/ghenosec/gheno.txt",
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "PostCSS", link: "https://postcss.org/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Go Opportunities",
      projectType: "API de Oportunidades de Emprego ",
      description: `
        Uma API moderna de oportunidades de emprego construída usando Golang. A API é desenvolvida por Go-Gin como roteador,
        GoORM para comunicação de banco de dados, SQLite como banco de dados e Swagger para documentação e teste de API.
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
        { name: "Reactjs", link: "https://react.dev/" },
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
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col gap-4 p-4 border rounded-lg shadow-md mb-6 transition-opacity duration-1000 ${
            isFadingIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <header>
            <h2 className="text-2xl font-bold">
              <a
                href={project.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-green-900 transition-colors duration-300"
              >
                {project.title}
              </a>
            </h2>
            <p className="text-sm text-gray-400">{project.projectType}</p>
          </header>
          <section>
            <h3 className="text-lg font-semibold">Descrição:</h3>
            <p>{project.description}</p>
          </section>

          {/* AQUI: Renderização condicional da seção "Versão" */}
          {project.version &&
            Array.isArray(project.version) &&
            project.version.length > 0 && (
              <section>
                <h3 className="text-lg font-semibold">Versão:</h3>
                <ul className="list-disc ml-5">
                  {project.version.map((outherVersion) => (
                    <li key={outherVersion.name}>
                      <a
                        href={outherVersion.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-700 transition-colors duration-300"
                      >
                        {outherVersion.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

          <section>
            <h3 className="text-lg font-semibold">Tecnologias Usadas:</h3>
            <ul className="list-disc ml-5">
              {project.technologies.map((tech) => (
                <li key={tech.name}>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700 transition-colors duration-300"
                  >
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;