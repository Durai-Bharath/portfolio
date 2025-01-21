"use client";
import { useTheme } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="hover:scale-[1.15] active:scale-105 transition-all fixed bottom-5 right-5 bg-opacity-80 backdrop-blur-[0.2rem] bg-white w-[3rem] h-[3rem] rounded-full border border-opacity-40 shadow-2xl flex items-center justify-center dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
