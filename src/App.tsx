import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onDone={handleDone} />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
