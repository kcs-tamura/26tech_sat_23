// src/hooks/useTheme.ts

import { useState, useEffect } from "react";

// テーマ切り替え処理.
export function useTheme(): { theme: string; toggle: () => void } {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") ?? "light",
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}