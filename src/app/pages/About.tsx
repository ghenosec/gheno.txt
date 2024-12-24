import React from "react";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "TailwindCSS",
  "Node.js",
  "Go",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
]

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>
      <div className="flex flex-col md:flex-row gap-6 items-start border rounded-lg shadow-md p-6 relative">
        <div className="flex-shrink-0 w-64">
          <img
            src="me.jpeg"
            alt="Minha foto"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-md leading-relaxed">
            <span className="font-semibold text-xl">LUCAS CARMONA GHENO</span>
            <div className="flex items-center gap-2 text-sm mt-4">
              <img
                src="https://flagcdn.com/w40/br.png"
                alt="Bandeira do Brasil"
                className="w-6 h-4 rounded"
              />
              <span>Paraná, Brasil</span>
            </div>
            <p className="mt-6">
              Sou um desenvolvedor de software e estou atualmente cursando
              Engenharia de Software, com data de formação prevista para 2025.
              Tenho contato e formações com Tecnologias desde meus 7 anos,
              idade que tive meu primeiro computador, diante de 3 anos para cá,
              venho me aprofundando em desenvolvimento de
              software, durante esse período, tive a oportunidade de trabalhar em
              uma gama de projetos que me ajudaram a desenvolver e aprimorar
              minhas habilidades e conhecimentos. Estou sempre em busca de novos
              desafios e oportunidades para aprender e crescer profissionalmente.
            </p>
          </div>

          <div className="absolute top-0 right-0 flex gap-5 p-4">
            <a
              href="https://www.linkedin.com/in/lucascarmonagheno/"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/ghenosec"
              target="_blank"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              <img src="/github.png" alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="mailto:lcghenocontato@gmail.com"
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              <img src="/email.png" alt="E-mail" className="w-8 h-8" />
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold gap-2 mt-8">Skills:</h2>
            <div className="flex flex-row flex-wrap gap-3 text-sm">
              {skills.map((skill) => {
                return (
                  <div
                    key={skill}
                    className="bg-green-500 p-3 py-1 rounded-lg text-white"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;