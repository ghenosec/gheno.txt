"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BiosLoader from "../components/BiosLoader";

const Start = () => {
  const [showStartScreen, setShowStartScreen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); 
  const router = useRouter();

  const handleBiosCompletion = () => {
    setShowStartScreen(true);
  };

  const handleStartClick = () => {
    setIsFadingOut(true); 
    setTimeout(() => {
      router.push("/resume"); 
    }, 600); 
  };

  if (showStartScreen) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-screen bg-black text-white transition-opacity duration-1000 ${
          isFadingOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="border-4 border-white p-6 md:p-8 text-center w-11/12 max-w-md">
          <p className="mb-4 text-lg md:text-xl">Lucas Carmona Gheno 💻 Portfólio</p>
          <p className="mb-6 text-sm md:text-base">
            Click start to begin<span className="blinking-cursor">_</span>
          </p>
          <button
            onClick={handleStartClick}
            className="border-4 border-white py-2 px-4 hover:bg-white hover:text-black transition"
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

export default Start;
