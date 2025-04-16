
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Detect language based on URL or browser settings
  const getLanguage = () => {
    const path = location.pathname;
    if (path.includes("/ar/") || path.includes("/ar")) return "ar";
    if (path.includes("/fr/") || path.includes("/fr")) return "fr";
    if (path.includes("/es/") || path.includes("/es")) return "es";
    return "en";
  };

  const lang = getLanguage();
  const isRtl = lang === "ar";
  const dir = isRtl ? "rtl" : "ltr";
  
  const content = {
    ar: {
      title: "404",
      subtitle: "عذراً، لم يتم العثور على الصفحة",
      description: "الصفحة التي تبحث عنها غير موجودة أو تمت إزالتها.",
      button: "العودة إلى الصفحة الرئيسية"
    },
    en: {
      title: "404",
      subtitle: "Oops! Page Not Found",
      description: "The page you are looking for doesn't exist or has been removed.",
      button: "Return to Home"
    },
    fr: {
      title: "404",
      subtitle: "Oops! Page Non Trouvée",
      description: "La page que vous recherchez n'existe pas ou a été supprimée.",
      button: "Retour à l'Accueil"
    },
    es: {
      title: "404",
      subtitle: "¡Ups! Página No Encontrada",
      description: "La página que está buscando no existe o ha sido eliminada.",
      button: "Volver al Inicio"
    }
  };
  
  const text = content[lang as keyof typeof content];
  const ArrowIcon = isRtl ? "ml-2" : "mr-2";

  return (
    <div className={`min-h-screen flex items-center justify-center bg-irada-gray ${dir}`}>
      <div className="text-center p-8 max-w-md">
        <h1 className="text-8xl font-bold text-irada-blue mb-4">{text.title}</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{text.subtitle}</h2>
        <p className="text-gray-600 mb-8">{text.description}</p>
        <Link to="/" className="inline-block">
          <Button className="btn-primary">
            <ArrowLeft className={ArrowIcon} size={16} />
            {text.button}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
