import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE, whatsappLink } from "../../data/site";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" as ScrollBehavior : "auto" });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border/70 bg-background/90 py-2.5 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-gradient shadow-emerald transition-transform group-hover:scale-105",
              !solid && "ring-1 ring-white/25"
            )}
          >
            <span className="font-display text-lg font-bold text-gold-light">ج</span>
            <span className="absolute -bottom-0.5 -left-0.5 h-2.5 w-2.5 rounded-full bg-gold shadow-gold" />
          </div>
          <div className="leading-tight">
            <div
              className={cn(
                "text-sm font-extrabold tracking-wide sm:text-base transition-colors",
                solid ? "text-foreground" : "text-white"
              )}
            >
              {SITE.name}
            </div>
            <div
              className={cn(
                "text-[11px] font-medium transition-colors",
                solid ? "text-gold" : "text-gold-light/90"
              )}
            >
              طنجة · العمرة · الحج · السياحة
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "nav-link rounded-full px-2.5 py-2 text-[12.5px] font-semibold transition-colors 2xl:px-3 2xl:text-[13px]",
                  solid
                    ? isActive
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-primary"
                    : isActive
                      ? "text-gold-light active"
                      : "text-white/90 hover:text-white"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-2xl border transition-all",
              solid
                ? "border-border bg-card text-foreground"
                : "border-white/25 bg-white/10 text-white backdrop-blur-md"
            )}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button variant="whatsapp" size="sm" className="!px-3.5">
              <MessageCircle className="h-4 w-4" />
              احجز الآن
            </Button>
          </a>

          <button
            type="button"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-2xl border transition-all xl:hidden",
              solid
                ? "border-border bg-card text-foreground"
                : "border-white/25 bg-white/10 text-white backdrop-blur-md"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full border-t border-border bg-background/95 px-4 py-5 shadow-luxury backdrop-blur-xl xl:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl px-4 py-3 text-right text-base font-semibold transition-colors",
                      isActive
                        ? "bg-secondary text-secondary-foreground"
                        : "text-foreground hover:bg-muted"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                <Button variant="whatsapp" className="w-full">
                  <MessageCircle className="h-4 w-4" />
                  تواصل عبر واتساب
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
