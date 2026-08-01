// src/components/Header.tsx

import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

interface Props {
  theme: string;
  onThemeToggle: () => void;
}
// ここはエラー出てても大丈夫
export default function Header({ theme, onThemeToggle }: Props) {
  const navItems = [
    { label: "About", hash: "about" },
    { label: "Skills", hash: "skills" },
    { label: "Works", hash: "works" },
    { label: "Certs", hash: "certifications" },
    { label: "Contact", hash: "contact" },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
            {/* ロゴ表示部分 */}
            <Link to="/" className="header-logo">
            Portfolio Sites{/*表示物などは変更しても構いません。*/}
            </Link>
            <nav>
                <ul className="header-nav">
                    {navItems.map((item)=>
                    (
                        <li key={item.label}>
                            {/* /#about の形式でその表示要素へ移動出来るようにする */}
                            <Link to={`/#${item.hash}`}>
                            {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
            >
              {theme === 'dark' ? <FaSun/> : <FaMoon/> }
            </button>

        </div>
      </div>
    </header>
  );
}
