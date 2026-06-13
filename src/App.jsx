import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.startsWith("/ia/")) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <ScrollManager />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Browse />} />
          <Route path="/ia/:id" element={<Detail />} />
          <Route path="/favoris" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
