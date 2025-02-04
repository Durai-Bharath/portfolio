import React from "react";
import { FaRobot } from "react-icons/fa6";

export default function ChatBotSwitch() {
  return (
    <button className="hover:scale-[1.15] active:scale-105 transition-all fixed bottom-20 right-5 bg-opacity-80 backdrop-blur-[0.2rem] bg-white w-[3rem] h-[3rem] rounded-full border border-opacity-40 shadow-2xl flex items-center justify-center dark:bg-gray-950">
      <FaRobot />
    </button>
  );
}
