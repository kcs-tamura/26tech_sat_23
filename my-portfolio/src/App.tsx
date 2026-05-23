import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { Route, Routes } from "react-router-dom";

function HomePage() {
  return <></>;
}

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} onThemeToggle={toggle} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}
