"use client";

import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";

// Importar os componentes das seções
import Home from '../pages/Home'
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

const Navigation = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => (
  <nav className="w-1/7 p-4 text-left border-r border-gray-300">
    <h1 className="font-bold text-2xl text-gray-800 mb-4">Lucas Gheno</h1>
    <h2 className="text-gray-700 mb-8">Portfólio Website</h2>
    <ul className="space-y-7">
      <li className="mt-64">
        <button
          onClick={() => setActiveSection("home")}
          className="text-blue-600 hover:underline"
        >
          ÍNICIO
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("about")}
          className="text-blue-600 hover:underline"
        >
          SOBRE
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("experience")}
          className="text-blue-600 hover:underline"
        >
          EXPERIÊNCIAS
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("projects")}
          className="text-blue-600 hover:underline"
        >
          PROJETOS
        </button>
      </li>
    </ul>
  </nav>
);

const OldSchoolLinuxStyle: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Função para renderizar a seção com base no estado
  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800 font-mono">
      <Navigation setActiveSection={setActiveSection} />
      <div className="flex-1 p-4">{renderSection()}</div>
    </div>
  );
};

export default OldSchoolLinuxStyle;
