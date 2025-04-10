import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            lucas<span className="text-purple-800">.dev</span>
          </a>

          {/* Idiomas (visível em todos os tamanhos) */}
          <div className="flex items-center space-x-4 md:order-2">
            <button
              onClick={() => changeLanguage("pt")}
              className="text-white text-base hover:scale-110 transition cursor-pointer"
              aria-label="Mudar para português"
            >
              BR
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="text-white text-base hover:scale-110 transition cursor-pointer"
              aria-label="Switch to English"
            >
              US
            </button>

            {/* Menu hamburguer (mobile) */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden ml-2"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* Links (desktop) */}
          <div className="hidden md:flex items-center space-x-6 md:order-1">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.home")}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.about")}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.projects")}
            </a>
            <a
              href="#designs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.designs")}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {t("navbar.contact")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
