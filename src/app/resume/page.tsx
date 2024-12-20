// pages/resume.tsx

import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black p-6">
      <div className="border-4 border-black p-8 text-center w-11/12 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Lucas Carmona Gheno</h1>
        <h2 className="text-xl mb-4">Desenvolvedor Front-End</h2>
        <p className="text-lg mb-6">
          Sou um desenvolvedor apaixonado por tecnologia, com foco em criar interfaces web dinâmicas e responsivas. Com experiência em{" "}
          <strong>React</strong>, <strong>TypeScript</strong> e <strong>Next.js</strong>, busco sempre aprimorar minhas habilidades em frameworks modernos e boas práticas de desenvolvimento. Tenho uma forte base em{" "}
          <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>  
        </p>
        <p className="text-lg">
          Estou sempre em busca de novos desafios para expandir meus conhecimentos e contribuir para a criação de soluções inovadoras.
        </p>
      </div>
    </div>
  );
};

export default Resume;
