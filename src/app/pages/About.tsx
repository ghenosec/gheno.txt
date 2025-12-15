import React, { useState, useEffect } from "react";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "TailwindCSS",
  "Node.js",
  "Go",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
];

const certificates = [
  {
    title: "Analista de Requisitos",
    certificateType: "Análise de requisitos de software",
    description:
      "Certificado de conclusão das matérias de Análise de Requisitos de Software, abordando técnicas e práticas para levantamento e documentação de requisitos.",
    date: "Fevereiro 2024",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1v0V-00f2YMW7q2pggRAkfOkzHt-J3Gyk/view?usp=sharing",
  },
  {
    title: "Desenvolvedor de Software",
    certificateType: "Desenvolvimento de Software ",
    description:
      "Certificado de conclusão das matérias de Desenvolvimento de Software, abordando técnicas e conhecimentos para um bom software.",
    date: "Fevereiro 2024",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1hTc6-1uozZ5xfTJWoWWwW4HvsOWzaRJ_/view?usp=sharing",
  },
];

const About = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>
        <div
        className={`${
          isFadingIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
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
                Sou um desenvolvedor de software formado em Engenharia de Software,
                pelo Centro Universitário Assis Gurgacz (FAG), 2022-2025.
                Tenho contato e formações com Tecnologias desde meus 7 anos,
                idade que tive meu primeiro computador, diante de 5 anos para cá,
                venho me aprofundando em desenvolvimento de software,
                durante esse período, tive a oportunidade de trabalhar em
                uma gama de projetos que me ajudaram a desenvolver e aprimorar
                minhas habilidades e conhecimentos. Estou sempre em busca de novos
                desafios e oportunidades para aprender e crescer profissionalmente.
              </p>
            </div>

            <div className="absolute top-0 right-0 flex gap-5 p-4">
             <h2 className="text-green-500 text-lg font-semibold hover:text-green-800 transition-colors duration-300">
             <a 
                href="https://docs.google.com/document/d/1Y5NPQsPobCl_MWy7M_c2tzNPZRs6O0PF/edit?usp=sharing&ouid=113984803807960972628&rtpof=true&sd=true"
                target="_blank"
                className="bg-green-500 text-lg p-3 py-1 rounded-lg text-white hover:bg-green-700 transition-colors duration-300" 
                >
                  Currículo
                </a>
             </h2>
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

        <h2 className="text-3xl font-bold mb-6 mt-12">Meus Certificados</h2>

        <div className="flex flex-col gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={`flex flex-col gap-4 p-6 border rounded-lg shadow-md transition-opacity duration-1000 ${
                isFadingIn ? "opacity-100" : "opacity-0"
              }`}
            >
              <header>
                <h3 className="text-2xl font-bold">{certificate.title}</h3>
                <p className="text-sm text-gray-400">{certificate.certificateType}</p>
              </header>
              <section>
                <h4 className="text-lg font-semibold">Descrição:</h4>
                <p>{certificate.description}</p>
              </section>
              <section>
                <h4 className="text-lg font-semibold">Data:</h4>
                <p>{certificate.date}</p>
              </section>
              <section>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-800 transition-colors duration-300"
                >
                  Ver Certificado
                </a>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
