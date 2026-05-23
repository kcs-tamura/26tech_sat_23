import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

interface Props {
  theme: string;
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: Props) {
  const navItems = [{ label: "About", hash: "about" }];
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          {/* ロゴ：常にホームへ戻るようにする*/}
          <Link to="/" className="header-logo">
            {profile.nameEn.split(" ")[1]}
            <span>.</span>
          </Link>
          <nav>
            <ul className="header-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link to={`/#${item.hash}`}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={
              theme === "dark"
                ? "ライトモードに切り替え"
                : "ダークモードに切り替え"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
