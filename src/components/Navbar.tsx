
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher, { Language, languages } from "./LanguageSwitcher";

interface NavbarProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Navbar({ currentLanguage, onLanguageChange }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: { ar: "الرئيسية", en: "Home", fr: "Accueil", es: "Inicio" }, path: "/" },
    { name: { ar: "الدورات", en: "Courses", fr: "Cours", es: "Cursos" }, path: "/courses" },
    { name: { ar: "التخطيط الاستراتيجي", en: "Strategic Planning", fr: "Planification Stratégique", es: "Planificación Estratégica" }, path: "/strategic-planning" },
    { name: { ar: "البرامج التقنية", en: "Technical Programs", fr: "Programmes Techniques", es: "Programas Técnicos" }, path: "/technical-programs" },
    { name: { ar: "تعليم اللغة العربية", en: "Arabic Language", fr: "Langue Arabe", es: "Idioma Árabe" }, path: "/arabic-language" },
    { name: { ar: "المكتبة", en: "Library", fr: "Bibliothèque", es: "Biblioteca" }, path: "/library" },
    { name: { ar: "التنمية البشرية", en: "Personal Development", fr: "Développement Personnel", es: "Desarrollo Personal" }, path: "/personal-development" },
    { name: { ar: "اتصل بنا", en: "Contact Us", fr: "Contactez-nous", es: "Contáctenos" }, path: "/contact" },
  ];

  const dir = currentLanguage.dir;

  return (
    <header className={`sticky top-0 z-50 w-full bg-white shadow-sm ${dir}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={dir === "rtl" ? "/lovable-uploads/f238d66a-7b78-42f1-8883-af859efa303c.png" : "/lovable-uploads/d6bfaf34-3f27-4da5-a8cf-948d267e7730.png"} 
              alt="Irada Academy" 
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-irada-blue hover:bg-gray-100 rounded-md transition-colors"
              >
                {link.name[currentLanguage.code as keyof typeof link.name]}
              </Link>
            ))}
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
            <Button className="btn-primary ml-2 rtl:mr-2 rtl:ml-0">
              {currentLanguage.code === "ar" ? "تسجيل الدخول" : 
               currentLanguage.code === "fr" ? "Se connecter" : 
               currentLanguage.code === "es" ? "Iniciar sesión" : "Login"}
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center lg:hidden">
            <LanguageSwitcher 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="ml-2 rtl:mr-2 rtl:ml-0"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden bg-white pb-4 shadow-md ${dir}`}>
          <nav className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-irada-blue hover:bg-gray-100 rounded-md transition-colors"
              >
                {link.name[currentLanguage.code as keyof typeof link.name]}
              </Link>
            ))}
            <Button className="btn-primary">
              {currentLanguage.code === "ar" ? "تسجيل الدخول" : 
               currentLanguage.code === "fr" ? "Se connecter" : 
               currentLanguage.code === "es" ? "Iniciar sesión" : "Login"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
