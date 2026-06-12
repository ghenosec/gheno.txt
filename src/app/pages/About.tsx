import { title } from "process";
import React, { useState, useEffect } from "react";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "TailwindCSS",
  "Node.js",
  "Angular",
  "NestJS",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Linux",
];

const certificates = [
  {
    title: "Engenheiro de Software",
    certificateType: "Engenharia de Software",
    description:
      "Certificado de conclusão do curso de Engenharia de Software, abrangendo conhecimentos e práticas essenciais para a construção de software de alta qualidade.",
    date: "Dezembro 2025",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1KbCA6gvbh0xEAw2W4glnfMmR34_NbiYO/view?usp=sharing",
  },
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
    title: "Analista de Sistemas",
    certificateType: "Análise de sistemas de software",
    description:
      "Certificado de conclusão das matérias de Análise de Sistemas de Software, abordando técnicas e práticas para análise e modelagem de sistemas de software.",
    date: "Fevereiro 2025",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1v0V-00f2YMW7q2pggRAkfOkzHt-J3Gyk/view?usp=sharing",
  },
  {
    title: "Desenvolvedor de Software",
    certificateType: "Desenvolvimento de Software",
    description:
      "Certificado de conclusão das matérias de Desenvolvimento de Software, abordando técnicas e conhecimentos para um bom software.",
    date: "Fevereiro 2024",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1hTc6-1uozZ5xfTJWoWWwW4HvsOWzaRJ_/view?usp=sharing",
  },
  {
    title: "Engenheiro de Software",
    certificateType: "Engenharia de Software",
    description:
      "Certificado de conclusão do curso de Engenharia de Software, abrangendo conhecimentos e práticas essenciais para a construção de software de alta qualidade.",
    date: "Dezembro 2025",
    issuer: "Centro Universitário FAG",
    link: "https://drive.google.com/file/d/1uyUXvV6rZQEUeA-7aacACHYeQjFxPy14/view?usp=sharing",
  },
];

type Certificate = (typeof certificates)[number];

const getEmbedLink = (link: string) => {
  return link.replace("/view?usp=sharing", "/preview");
};

const About = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Sobre Mim</h1>

      <div
        className={`${
          isFadingIn ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div className="flex flex-col md:flex-row gap-6 border rounded-lg shadow-md p-6">
        <div className="w-64 min-h-[300px]">
          <img
            src="me.png"
            alt="Minha foto"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="text-md leading-relaxed">
              <span className="font-semibold text-xl">
                LUCAS CARMONA GHENO
              </span>

              <div className="flex items-center gap-2 text-sm mt-4">
                <img
                  src="https://flagcdn.com/w40/br.png"
                  alt="Bandeira do Brasil"
                  className="w-6 h-4 rounded"
                />
                <span>Paraná, Brasil</span>
              </div>

              <p className="mt-6">
                Engenheiro de Software com interesse em desenvolvimento de software, produtos digitais e inovação tecnológica.
                Ao longo da minha trajetória participei do desenvolvimento de aplicações web, sistemas SaaS e projetos voltados ao agronegócio, atuando em diferentes etapas do ciclo de desenvolvimento.
                Atualmente sou cofundador da Folhastech, startup de tecnologia para o agronegócio, onde participo da evolução de soluções de monitoramento inteligente para hidroponias. Minha atuação envolve testes, validação de funcionalidades, identificação e correção de problemas, documentação, melhoria contínua do produto e desenvolvimento de novas funcionalidades em colaboração com a equipe.
                Também participei de hackathons, programas de inovação e iniciativas de empreendedorismo tecnológico, experiências que fortaleceram minhas habilidades em resolução de problemas, trabalho em equipe e desenvolvimento de produtos.
                Tenho experiência com React, Next.js, Angular, Node.js, TypeScript e tecnologias modernas para desenvolvimento web.
              </p>
            </div>

            <div className="absolute top-0 right-0 flex gap-5 p-4 items-center">
              <button
                onClick={() => setShowResume(true)}
                className="bg-green-500 text-lg px-3 py-1 rounded-lg text-white hover:bg-green-700 transition-colors duration-300"
              >
                Currículo
              </button>

              <a
                href="https://www.linkedin.com/in/lucascarmonagheno/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>

              <a
                href="https://github.com/ghenosec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                <img src="/github.png" alt="GitHub" className="w-8 h-8" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold mt-8">Skills:</h2>

              <div className="flex flex-row flex-wrap gap-3 text-sm">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-green-500 px-3 py-1 rounded-lg text-white"
                  >
                    {skill}
                  </div>
                ))}
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
                <p className="text-sm text-gray-400">
                  {certificate.certificateType}
                </p>
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
                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="text-green-500 hover:text-green-800 transition-colors duration-300 cursor-pointer font-medium"
                >
                  Ver Certificado
                </button>
              </section>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="bg-white rounded-lg w-11/12 max-w-4xl h-[80vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="text-xl font-bold">
                  {selectedCertificate.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {selectedCertificate.certificateType}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none p-2"
              >
                ✕
              </button>
            </div>

            <iframe
              src={getEmbedLink(selectedCertificate.link)}
              className="flex-1 w-full rounded-b-lg"
              allow="autoplay"
              title={selectedCertificate.title}
            />
          </div>
        </div>
      )}

      {showResume && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowResume(false)}
        >
          <div
            className="bg-white rounded-lg w-11/12 max-w-5xl h-[85vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">Currículo</h3>

              <button
                onClick={() => setShowResume(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl leading-none p-2"
              >
                ✕
              </button>
            </div>

            <iframe
              src="https://drive.google.com/file/d/16Dk9aCP-_1QsTRGA9xLqZa9te1pQqlMM/preview"
              className="flex-1 w-full rounded-b-lg"
              allow="autoplay"
              title="Currículo"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
