// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // ハッシュがある場合は対象箇所まで移動する.
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      // ハッシュがない場合はTopへ.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
