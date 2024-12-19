"use client";

import { useState } from "react";
import BiosLoader from "../components/BiosLoader"; // Importando o componente BiosLoader

const Home = () => {
  const [showStartScreen, setShowStartScreen] = useState(false);

  // Função chamada após a conclusão da sequência de BIOS
  const handleBiosCompletion = () => {
    setShowStartScreen(true); // Mostra a tela de "start" após a BIOS carregar
  };

  if (showStartScreen) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <div className="border-4 border-white p-6 md:p-8 text-center w-11/12 max-w-md">
          <p className="mb-4 text-lg md:text-xl">Lucas Carmona Gheno 💻 Portfólio</p>
          <p className="mb-6 text-sm md:text-base">
            Click start to begin<span className="blinking-cursor">_</span>
          </p>
          <button
            className="border-4 border-white py-2 px-4 hover:bg-white hover:text-black transition"
            onClick={() => alert("Página carregada!")}
          >
            START
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <BiosLoader onComplete={handleBiosCompletion} />
    </div>
  );
};

export default Home;
