// /app/components/BiosLoader.tsx

import { useState, useEffect, useRef } from "react";

const BiosLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [bootText, setBootText] = useState<string[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const bootSequenceText = [
    "Starting kernel...",
    "Loading essential modules...",
    "Configuring loopback interface...",
    "Starting virtual console setup...",
    "Setting up network interfaces...",
    "Loading thermal modules...",
    "Enabling power management...",
    "Detecting connected devices...",
    "Setting system clock...",
    "Mounting /resume...",
    "Scanning for new hardware...",
    "Starting local file systems...",
    "Loading Virtual File System...",
    "Checking battery status...",
    "Starting multi-user target...",
    "Generating kernel entropy pool...",
    "Loading saved state...",
    "Running initial boot scripts...",
    "Enabling swap space...",
    "Restoring previous session...",
    "Initializing USB subsystem...",
    "Loading input driver...",
    "Starting systemd-modules-load.service...",
    "Creating temporary files...",
    "Mounting kernel filesystems...",
    "Initializing random seed...",
    "Loading system profile...",
    "Bringing up loopback interface...",
    "Starting dhcpcd daemon...",
    "Updating package cache...",
    "Starting kernel crash dump...",
    "Configuring virtual memory...",
    "Starting process accounting...",
    "Mounting network filesystems...",
    "Checking for orphaned processes...",
    "Initializing virtual machine support...",
    "Running udev events...",
    "Preparing to load graphical environment...",
    "Loading graphical session...",
    "Configuring display resolution...",
    "Launching desktop icons...",
    "Checking disk quotas...",
    "Verifying hardware status...",
    "Performing final system checks...",
    "GH-OS is ready to use.",
  ];

  const bootDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bootSequenceText.forEach((text, index) => {
      setTimeout(() => {
        setBootText((prev) => [...prev, text]);
        if (bootDivRef.current) {
          bootDivRef.current.scrollTop = bootDivRef.current.scrollHeight; 
        }
        if (index === bootSequenceText.length - 1) {
          setTimeout(() => {
            setIsFadingOut(true); 
            setTimeout(() => {
              onComplete();
            }, 500); 
          }, 500); 
        }
      }, 150 * index); 
    });
  }, []);

  return (
    <div
      ref={bootDivRef}
      className={`w-screen h-screen absolute overflow-auto bg-[radial-gradient(circle,#070807,#000)] scrollbar-hide ${
        isFadingOut ? "opacity-0 transition-opacity duration-500" : ""
      }`}
    >
      <div
        id="text-container"
        className="items-start flex flex-col gap-2 text-sm p-10 text-white"
      >
        {bootText.map((line, index) => (
          <p key={index} className="leading-relaxed">
            <span className="text-white">[ </span>
            <span className="text-retroGreen">✓</span>
            <span className="text-white"> ] </span>
            {line.slice(0)} 
          </p>
        ))}
      </div>
    </div>
  );
};

export default BiosLoader;
