import React from "react";

const ProjectsPage: React.FC = () => {
  const projects = [
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
      projectType: "Portfólio pessoal e currículo", 
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
      projectType: "API de oportunidades de emprego ",
      description: `
        Uma API moderna de oportunidades de emprego construída usando Golang. A API é desenvolvida por Go-Gin como roteador,
        GoORM para comunicação de banco de dados, SQLite como banco de dados e Swagger para documentação e teste de API. 
        O projeto segue uma estrutura de pacotes moderna para manter a base de código organizada e de fácil manutenção.
      `,
      repositoryLink: "https://github.com/ghenosec/gopportunities",
      technologies: [
        { name: "GoLang", link: "https://go.dev/" },
        { name: "Go-Gin", link: "https://gin-gonic.com/" },
        { name: "GoORM", link: "https://gorm.io/" },
        { name: "SQLite", link: "https://www.sqlite.org/index.html" },
        { name: "Swagger", link: "https://swagger.io/" },
        { name: "Docker", link: "https://docs.docker.com/" },
        { name: "Docker Compose", link: "https://docs.docker.com/compose/" },
      ],
    },
    {
      title: "Data Structure GO",
      projectType: "Documentação e exemplos da estrutura de dados e algoritmos em GO",
      description: `
        Esse projeto contém exemplos, explicações e documentos sobre a estrutura de dados e algoritmos em GoLang, 
        deixando o estudo para o leitor mais abrangente e fácil. 
        O projeto consiste explicações escritas, imagens e exemplos em códigos.
      `,
      repositoryLink: "https://github.com/ghenosec/dataStructureGO",
      technologies: [
        { name: "GoLang", link: "https://go.dev/" },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Meus Projetos</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-4 border rounded-lg shadow-md mb-6"
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
