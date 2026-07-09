import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../shared/WhatsAppFloat";
import { ConversionBar } from "../shared/ConversionBar";
import { Analytics, trackPageView } from "../seo/Analytics";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.hash, document.title);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Analytics />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        تخطي إلى المحتوى
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pb-16 md:pb-0"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ConversionBar />
      <WhatsAppFloat />
    </div>
  );
}
