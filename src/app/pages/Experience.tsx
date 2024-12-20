import React from "react";

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: "Folhastech",
      start: "2022-10",
      end: "atual",
      jobTitle: "Desenvolvedor Front end, Tester e Co-Fundador",
      jobType: "Sob demanda",
      jobLocation: "Cascavel/PR - Remote",
      companyDescription: `
        A Folhastech é uma Startup que eu e meus amigos fundamos em 2022.
        A empresa tem como objetivo desenvolver soluções de software e hardware
        para o setor agrícola. O principal objetivo é ajudar os agricultores a 
        aumentar sua produtividade e reduzir seus custos. A empresa ainda está
        no estágio inicial, com produtos em desenvolvimento.
      `,
      roleDescription: `
        Como um dos confundadores da empresa, eu sou responsável por algumas
        tarefas de desenvolvimento de software, testes e criação de mídia.
        Também sou responsável pela gestão da empresa e por tomadas de decisões
        junto com meus amigos e co-fundadores.
      `,
      technologies: [
        { name: "Reactjs", link: "https://react.dev/" },
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "Git", link: "https://git-scm.com/" },
        { name: "Axios", link: "https://axios-http.com/docs/intro" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Docker", link: "https://www.docker.com/" },
        { name: "GO", link: "https://go.dev/" },
      ],
    },
    {
      title: "Unimble",
      start: "2023-05",
      end: "2023-11",
      jobTitle: "Estagiário em Desenvolvimento de Produto",
      jobType: "Estágio",
      jobLocation: "Cascavel/PR - Híbrido",
      companyDescription: `
        A Unimble é uma empresa especializada em gestão estratégica, que ajuda empresas 
        a otimizar processos e aumentar a produtividade. Utilizando metodologias como OKRs, 
        oferece acompanhamento de resultados, serviços de planejamento e melhoria contínua de processos.
      `,
      roleDescription: `
        Como estagiário, eu desenvolvia produtos centrados no usuário, unindo design, prototipagem e documentação técnica. 
        Prestava suporte técnicos aos usuários, realizava testes de usabilidade, preparava o ambiente e a garantia de qualidade. 
      `,
      technologies: [
        { name: "Javascript", link: "https://www.javascript.com/" },
        { name: "HTML", link: "https://html.com/" },
        { name: "Css", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS" },
      ],
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Minhas Experiências</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 p-4 border rounded-lg shadow-md mb-6"
        >
          <header>
            <h2 className="text-2xl font-bold">{experience.title}</h2>
            <p className="text-sm text-gray-500">
              {`${experience.start} - ${experience.end}`}
            </p>
            <p className="text-md">{experience.jobTitle}</p>
            <p className="text-sm text-gray-400">
              {`${experience.jobType} | ${experience.jobLocation}`}
            </p>
          </header>

          <section>
            <h3 className="text-lg font-semibold">Empresa:</h3>
            <p>{experience.companyDescription}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Meu Objetivo</h3>
            <p>{experience.roleDescription}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Tecnologias Usadas:</h3>
            <ul className="list-disc ml-5">
              {experience.technologies.map((tech) => (
                <li key={tech.name}>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
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

export default ExperiencePage;
