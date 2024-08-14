'use client'

import ThemeToggle from "@/components/ThemeToggle";
import { ThemeState } from "@/context/ThemeContext";
import React from "react";

export default function page() {
    const {theme} = ThemeState()
  return (
    <div 
    className={`${theme === 'light' ? 'bg-orange-100' : 'bg-orange-900'}`}
    >
      <p>this is navi</p>
      <ThemeToggle />
    </div>
  );
}
