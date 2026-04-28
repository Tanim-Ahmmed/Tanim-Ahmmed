import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import CursorAura from "./components/CursorAura";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./pages/shared/Footer";
import Navbar from "./pages/shared/Navbar";

const Root = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.95,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-shell">
      <ScrollProgress />
      <CursorAura />
      <div className="relative mx-auto max-w-7xl">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
