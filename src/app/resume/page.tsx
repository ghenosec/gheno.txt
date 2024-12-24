"use client";

import React, { useState } from "react";
import { JSX } from "react/jsx-runtime";

import Home from '../pages/Home'
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';

const Navigation = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => (
  <nav className="w-1/7 p-4 text-left border-r border-gray-300 sticky top-0 h-screen">
    <h1 className="font-bold text-2xl text-gray-800 mb-4 mt-4">Lucas Gheno</h1>
    <h2 className="text-gray-700 mb-8">Portfólio Website</h2>
    <ul className="space-y-7">
      <li className="mt-64">
        <button
          onClick={() => setActiveSection("home")}
          className="text-green-500 hover:text-green-700 font-semibold"
        >
          ÍNICIO
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("about")}
          className="text-green-500 hover:text-green-700 font-semibold"
        >
          SOBRE
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("experience")}
          className="text-green-500 hover:text-green-700 font-semibold"
        >
          EXPERIÊNCIAS
        </button>
      </li>
      <li>
        <button
          onClick={() => setActiveSection("projects")}
          className="text-green-500 hover:text-green-700 font-semibold"
        >
          PROJETOS
        </button>
      </li>
    </ul>
  </nav>
);

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
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

export default Sidebar;
