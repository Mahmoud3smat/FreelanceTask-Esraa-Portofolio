import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/hooks/useTheme";

const navItems = [
  { en: "About", ar: "عني", href: "#about" },
  { en: "Skills", ar: "المهارات", href: "#skills" },
  { en: "Projects", ar: "المشاريع", href: "#projects" },
  { en: "Education", ar: "التعليم", href: "#education" },
  { en: "Courses", ar: "الدورات", href: "#courses" },
  // { en: 'Testimonials', ar: 'آراء العملاء', href: '#testimonials' },
  { en: "Contact", ar: "تواصل", href: "#contact" },
];

const Navbar = () => {
  const { t, toggleLang, lang } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="text-xl font-bold text-primary">
          {t("Esraa Samy", "إسراء سامي")}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {t(item.en, item.ar)}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70 flex items-center gap-1 text-sm"
          >
            <Globe size={18} />
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLang}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground/70 text-sm"
          >
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground/70"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="flex flex-col p-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
              >
                {t(item.en, item.ar)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
