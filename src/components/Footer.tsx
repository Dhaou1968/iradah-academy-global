import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface FooterProps {
  currentLanguage: Language;
}

export default function Footer({ currentLanguage }: FooterProps) {
  const dir = currentLanguage.dir;
  
  const footerSections = {
    ar: {
      about: "عن الإرادة",
      aboutText: "منصة الإرادة التعليمية هي منصة متكاملة للتعليم وتطوير المهارات، تقدم دورات متخصصة في مجالات متنوعة تشمل التخطيط الاستراتيجي، البرامج التقنية، تعليم اللغة العربية، وتطوير الذات.",
      menu: "القائمة الرئيسية",
      contact: "تواصل معنا",
      address: "11 Rue bel air 69800 Saint Priest, Lyon, France",
      rights: "جميع الحقوق محفوظة © 2025 منصة الإرادة التعليمية"
    },
    en: {
      about: "About Irada",
      aboutText: "Irada Educational Platform is a comprehensive platform for education and skills development, offering specialized courses in various fields including strategic planning, technical programs, Arabic language teaching, and personal development.",
      menu: "Main Menu",
      contact: "Contact Us",
      address: "11 Rue bel air 69800 Saint Priest, Lyon, France",
      rights: "All Rights Reserved © 2025 Irada Educational Platform"
    },
    fr: {
      about: "À propos d'Irada",
      aboutText: "La Plateforme Éducative Irada est une plateforme complète pour l'éducation et le développement des compétences, offrant des cours spécialisés dans divers domaines, notamment la planification stratégique, les programmes techniques, l'enseignement de la langue arabe et le développement personnel.",
      menu: "Menu Principal",
      contact: "Contactez-nous",
      address: "11 Rue bel air 69800 Saint Priest, Lyon, France",
      rights: "Tous Droits Réservés © 2025 Plateforme Éducative Irada"
    },
    es: {
      about: "Acerca de Irada",
      aboutText: "La Plataforma Educativa Irada es una plataforma integral para la educación y el desarrollo de habilidades, que ofrece cursos especializados en diversos campos, incluida la planificación estratégica, programas técnicos, enseñanza del idioma árabe y desarrollo personal.",
      menu: "Menú Principal",
      contact: "Contáctenos",
      address: "11 Rue bel air 69800 Saint Priest, Lyon, France",
      rights: "Todos los Derechos Reservados © 2025 Plataforma Educativa Irada"
    }
  };

  const content = footerSections[currentLanguage.code as keyof typeof footerSections];
  
  const navLinks = [
    { name: { ar: "الرئيسية", en: "Home", fr: "Accueil", es: "Inicio" }, path: "/" },
    { name: { ar: "التخطيط الاستراتيجي", en: "Strategic Planning", fr: "Planification Stratégique", es: "Planificación Estratégica" }, path: "/strategic-planning" },
    { name: { ar: "البرامج التقنية", en: "Technical Programs", fr: "Programmes Techniques", es: "Programas Técnicos" }, path: "/technical-programs" },
    { name: { ar: "تعليم اللغة العربية", en: "Arabic Language", fr: "Langue Arabe", es: "Idioma Árabe" }, path: "/arabic-language" },
    { name: { ar: "المكتبة", en: "Library", fr: "Bibliothèque", es: "Biblioteca" }, path: "/library" },
    { name: { ar: "التنمية البشرية", en: "Personal Development", fr: "Développement Personnel", es: "Desarrollo Personal" }, path: "/personal-development" },
    { name: { ar: "اتصل بنا", en: "Contact Us", fr: "Contactez-nous", es: "Contáctenos" }, path: "/contact" },
  ];

  return (
    <footer className={`bg-irada-blue text-white ${dir}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content.about}</h3>
            <img 
              src={dir === "rtl" ? "/lovable-uploads/f238d66a-7b78-42f1-8883-af859efa303c.png" : "/lovable-uploads/d6bfaf34-3f27-4da5-a8cf-948d267e7730.png"} 
              alt="Irada Academy" 
              className="h-12 mb-4"
            />
            <p className="text-gray-200 text-sm">{content.aboutText}</p>
            <div className="flex mt-4 space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=61557147951710" target="_blank" rel="noopener noreferrer" className="text-white hover:text-irada-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-irada-yellow">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-irada-yellow">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-irada-yellow">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content.menu}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-200 hover:text-irada-yellow transition-colors"
                  >
                    {link.name[currentLanguage.code as keyof typeof link.name]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{content.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-irada-yellow mt-0.5" />
                <span className="text-gray-200">{content.address}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-irada-yellow" />
                <a href="tel:+33751455969" className="text-gray-200 hover:text-irada-yellow">+33 7 5145 5969</a>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-irada-yellow" />
                <a href="mailto:contact@iradah-training.com" className="text-gray-200 hover:text-irada-yellow">contact@iradah-training.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300">
          <p>{content.rights}</p>
        </div>
      </div>
    </footer>
  );
}
