import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import WorkDetail from "./pages/WorkDetail";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
    </>
  );
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
          <Route path="/works/:id" element={<WorkDetail />} />
        </Routes>
      </main>
    </>
  );
}
