"use client";

import { ThemeState } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = ThemeState();

  console.log("this is current theme:", theme);
  return (
    <div>
      <button onClick={toggle}>toggle me</button>
    </div>
  );
};
export default ThemeToggle;
