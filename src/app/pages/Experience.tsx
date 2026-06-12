import React, { useEffect, useState } from "react";

const ExperiencePage: React.FC = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  const experiences = [
    {
      title: "Folhastech (Startup Própria) ",
      start: "2022-10",
      end: "Presente",
      jobTitle: "Co-fundador e Desenvolvedor de Software",
      jobType: "Sob demanda",
      jobLocation: "Cascavel/PR - Remoto",
      companyDescription: `
        A Folhastech é uma Startup que eu e meus amigos fundamos em 2022.
        A empresa tem como objetivo desenvolver soluções de software e hardware
        para o setor do agro. O principal objetivo é ajudar os agricultores a
        aumentar sua produtividade e reduzir seus custos. A empresa ainda está
        no estágio inicial, com produtos sendo desevolvidos e testes em andamento.
      `,
      roleDescription: `
        Atuo no desenvolvimento e evolução de soluções digitais voltadas ao agronegócio,
        participando da construção de interfaces web com React, Next.js, Angular e TypeScript. 
        Sou responsável por testes, validação de funcionalidades e identificação de melhorias, contribuindo para a qualidade e usabilidade dos produtos. 
        Também participo do levantamento de requisitos, análise de feedbacks de usuários e colaboração com equipes multidisciplinares no desenvolvimento da plataforma Hidros.
        Além disso, participei de programas de inovação, hackathons, validações em campo e iniciativas de empreendedorismo tecnológico,
        incluindo projetos reconhecidos em competições e programas de aceleração.
      `,
      technologies: [
        { name: "React", link: "https://react.dev/" },
        { name: "Next.js", link: "https://nextjs.org/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Git", link: "https://git-scm.com/" },
        { name: "GitHub", link: "https://github.com/" },
        { name: "Postman", link: "https://www.postman.com/" },
        { name: "Figma", link: "https://www.figma.com/" },
        { name: "TailwindCSS", link: "https://tailwindcss.com/" },
        { name: "Docker", link: "https://www.docker.com/" },
      ],
    },
    {
      title: "Unimble",
      start: "2023-05",
      end: "2023-11",
      jobTitle: "Estagiário em Suporte Técnico e Produto",
      jobType: "Estágio",
      jobLocation: "Cascavel/PR - Híbrido",
      companyDescription: `
        A Unimble é uma empresa especializada em gestão estratégica, que ajuda empresas 
        a otimizar processos e aumentar a produtividade. Utilizando metodologias como OKRs, 
        oferece acompanhamento de resultados, serviços de planejamento e melhoria contínua de processos.
      `,
      roleDescription: `
        Responsável pela configuração de ambientes, fluxos e estruturas de dados em Coda.io, contribuindo para a otimização de processos internos de clientes. 
        Atuei na implantação de sistemas, suporte técnico e atendimento aos usuários, garantindo a resolução de problemas e a adoção eficiente das soluções. 
        Desenvolvi documentações e materiais de apoio para onboarding, além de participar do levantamento de requisitos e da proposição de melhorias com base no feedback dos usuários. 
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
        className={`flex flex-col gap-4 p-4 border rounded-lg shadow-md mb-6 transition-opacity duration-1000 ${
          isFadingIn ? "opacity-100" : "opacity-0"
        }`}
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

export default ExperiencePage;
