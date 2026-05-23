import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// URLにハッシュタグがついている場合にそこの要素まで飛ばす処理
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // クエリにハッシュがついている場合は対象要素へスクロールする.
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      // ハッシュがない場合はページのトップへ遷移する.
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
