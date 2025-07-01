import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  BrainCircuit, 
  Cpu, 
  GraduationCap, 
  Languages, 
  LineChart,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import YouTubeVideo from "@/components/YouTubeVideo";
import { Language } from "@/components/LanguageSwitcher";

interface HomeProps {
  language: Language;
}

export default function Home({ language }: HomeProps) {
  const navigate = useNavigate();
  const dir = language.dir;
  
  const content = {
    ar: {
      heroCta: "منصة الإرادة التعليمية",
      heroSubtitle: "نافذتك لعالم المعرفة والتطوير المهني",
      heroButton: "استكشف الدورات",
      featuresTitle: "مجالاتنا التعليمية",
      featuresSubtitle: "اكتشف مجموعة متنوعة من المجالات التي نقدمها",
      coursesTitle: "دوراتنا المميزة",
      coursesSubtitle: "اكتشف أحدث دوراتنا المتميزة",
      viewAll: "عرض الكل",
      testimonialsTitle: "آراء طلابنا",
      testimonialsSubtitle: "ماذا يقول طلابنا عن تجربتهم معنا",
      ctaTitle: "هل أنت مستعد للبدء في رحلة التعلم معنا؟",
      ctaSubtitle: "سجل الآن وانضم إلى آلاف المتعلمين الذين غيرت الإرادة حياتهم",
      ctaButton: "ابدأ الآن",
      strategicPlanning: "التخطيط الاستراتيجي",
      technicalPrograms: "البرامج التقنية",
      arabicLanguage: "تعليم اللغة العربية",
      library: "المكتبة",
      personalDevelopment: "التنمية البشرية",
      advisorTitle: "المستشار التقني",
      advisorName: "ضو التريكي", // Updated Arabic name
      advisorRole: "تقني تكنولوجيا المعلومات بجامعة ليون",
      advisorPosition: "رئيس مجلس إدارة مؤسسة سفراء السلام العالمية"
    },
    en: {
      heroCta: "Irada Educational Platform",
      heroSubtitle: "Your Gateway to Knowledge and Professional Development",
      heroButton: "Explore Courses",
      featuresTitle: "Our Educational Fields",
      featuresSubtitle: "Discover the variety of fields we offer",
      coursesTitle: "Featured Courses",
      coursesSubtitle: "Discover our latest featured courses",
      viewAll: "View All",
      testimonialsTitle: "Student Testimonials",
      testimonialsSubtitle: "What our students say about their experience with us",
      ctaTitle: "Are you ready to start your learning journey with us?",
      ctaSubtitle: "Register now and join thousands of learners whose lives have been changed by Irada",
      ctaButton: "Get Started",
      strategicPlanning: "Strategic Planning",
      technicalPrograms: "Technical Programs",
      arabicLanguage: "Arabic Language",
      library: "Library",
      personalDevelopment: "Personal Development",
      advisorTitle: "Technical Advisor",
      advisorName: "Dhaou Triki", // Updated English name
      advisorRole: "IT Technician at University of Lyon",
      advisorPosition: "Chairman of the Global Peace Ambassadors Foundation"
    },
    fr: {
      heroCta: "Plateforme Éducative Irada",
      heroSubtitle: "Votre Porte d'Entrée vers la Connaissance et le Développement Professionnel",
      heroButton: "Explorer les Cours",
      featuresTitle: "Nos Domaines Éducatifs",
      featuresSubtitle: "Découvrez la variété des domaines que nous proposons",
      coursesTitle: "Cours en Vedette",
      coursesSubtitle: "Découvrez nos derniers cours en vedette",
      viewAll: "Voir Tout",
      testimonialsTitle: "Témoignages d'Étudiants",
      testimonialsSubtitle: "Ce que nos étudiants disent de leur expérience avec nous",
      ctaTitle: "Êtes-vous prêt à commencer votre parcours d'apprentissage avec nous?",
      ctaSubtitle: "Inscrivez-vous maintenant et rejoignez des milliers d'apprenants dont la vie a été changée par Irada",
      ctaButton: "Commencer",
      strategicPlanning: "Planification Stratégique",
      technicalPrograms: "Programmes Techniques",
      arabicLanguage: "Langue Arabe",
      library: "Bibliothèque",
      personalDevelopment: "Développement Personnel",
      advisorTitle: "Conseiller Technique",
      advisorName: "Dhaou Triki", // Updated French name
      advisorRole: "Technicien Informatique à l'Université de Lyon",
      advisorPosition: "Président du Conseil d'Administration de la Fondation Mondiale des Ambassadeurs de la Paix"
    },
    es: {
      heroCta: "Plataforma Educativa Irada",
      heroSubtitle: "Tu Puerta de Entrada al Conocimiento y Desarrollo Profesional",
      heroButton: "Explorar Cursos",
      featuresTitle: "Nuestros Campos Educativos",
      featuresSubtitle: "Descubre la variedad de campos que ofrecemos",
      coursesTitle: "Cursos Destacados",
      coursesSubtitle: "Descubre nuestros últimos cursos destacados",
      viewAll: "Ver Todo",
      testimonialsTitle: "Testimonios de Estudiantes",
      testimonialsSubtitle: "Lo que nuestros estudiantes dicen sobre su experiencia con nosotros",
      ctaTitle: "¿Estás listo para comenzar tu viaje de aprendizaje con nosotros?",
      ctaSubtitle: "Regístrate ahora y únete a miles de estudiantes cuyas vidas han sido cambiadas por Irada",
      ctaButton: "Comenzar",
      strategicPlanning: "Planificación Estratégica",
      technicalPrograms: "Programas Técnicos",
      arabicLanguage: "Idioma Árabe",
      library: "Biblioteca",
      personalDevelopment: "Desarrollo Personal",
      advisorTitle: "Asesor Técnico",
      advisorName: "Dhaou Triki", // Updated Spanish name
      advisorRole: "Técnico en TI en la Universidad de Lyon",
      advisorPosition: "Presidente del Consejo de la Fundación Mundial de Embajadores de la Paz"
    }
  };
  
  const text = content[language.code as keyof typeof content];
  
  const featuredCourses = [
    {
      id: "course1",
      title: language.code === "ar" ? "مقدمة في التخطيط الاستراتيجي" : 
             language.code === "fr" ? "Introduction à la Planification Stratégique" : 
             language.code === "es" ? "Introducción a la Planificación Estratégica" : 
             "Introduction to Strategic Planning",
      description: language.code === "ar" ? "تعلم أساسيات التخطيط الاستراتيجي وكيفية تطبيقه في حياتك الشخصية والمهنية." : 
                   language.code === "fr" ? "Apprenez les bases de la planification stratégique et comment l'appliquer dans votre vie personnelle et professionnelle." : 
                   language.code === "es" ? "Aprenda los fundamentos de la planificación estratégica y cómo aplicarla en su vida personal y profesional." : 
                   "Learn the fundamentals of strategic planning and how to apply it in your personal and professional life.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      category: language.code === "ar" ? "التخطيط الاستراتيجي" : 
               language.code === "fr" ? "Planification Stratégique" : 
               language.code === "es" ? "Planificación Estratégica" : 
               "Strategic Planning",
      duration: language.code === "ar" ? "يومان" : 
                language.code === "fr" ? "2 jours" : 
                language.code === "es" ? "2 días" : 
                "2 days",
      students: 230,
      startDate: language.code === "ar" ? "15 مايو 2025" : 
                 language.code === "fr" ? "15 mai 2025" : 
                 language.code === "es" ? "15 mayo 2025" : 
                 "May 15, 2025",
      price: 45,
      currency: "EUR",
      link: "/strategic-planning/course1"
    },
    {
      id: "course2",
      title: language.code === "ar" ? "تعلم كانفا للتصميم" : 
             language.code === "fr" ? "Apprendre Canva pour le Design" : 
             language.code === "es" ? "Aprende Canva para Diseño" : 
             "Learn Canva for Design",
      description: language.code === "ar" ? "كورس شامل لتعلم استخدام منصة كانفا لإنشاء تصاميم احترافية بسهولة وسرعة." : 
                   language.code === "fr" ? "Un cours complet pour apprendre à utiliser la plateforme Canva pour créer des designs professionnels facilement et rapidement." : 
                   language.code === "es" ? "Un curso completo para aprender a usar la plataforma Canva para crear diseños profesionales fácil y rápidamente." : 
                   "A comprehensive course to learn using Canva platform for creating professional designs easily and quickly.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      category: language.code === "ar" ? "البرامج التقنية" : 
               language.code === "fr" ? "Programmes Techniques" : 
               language.code === "es" ? "Programas Técnicos" : 
               "Technical Programs",
      duration: language.code === "ar" ? "ثلاثة أيام" : 
                language.code === "fr" ? "3 jours" : 
                language.code === "es" ? "3 días" : 
                "3 days",
      students: 520,
      startDate: language.code === "ar" ? "1 يونيو 2025" : 
                 language.code === "fr" ? "1 juin 2025" : 
                 language.code === "es" ? "1 junio 2025" : 
                 "June 1, 2025",
      price: 45,
      currency: "EUR",
      link: "/technical-programs/course2"
    },
    {
      id: "course3",
      title: language.code === "ar" ? "اللغة العربية للمبتدئين (A1)" : 
             language.code === "fr" ? "Arabe pour Débutants (A1)" : 
             language.code === "es" ? "Árabe para Principiantes (A1)" : 
             "Arabic for Beginners (A1)",
      description: language.code === "ar" ? "دورة تأسيسية في اللغة العربية للمبتدئين تغطي القراءة والكتابة والمحادثة." : 
                   language.code === "fr" ? "Cours de base en langue arabe pour débutants couvrant la lecture, l'écriture et la conversation." : 
                   language.code === "es" ? "Curso básico de lengua árabe para principiantes que cubre lectura, escritura y conversación." : 
                   "Foundational course in Arabic language for beginners covering reading, writing, and conversation.",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop",
      category: language.code === "ar" ? "تعليم اللغة العربية" : 
               language.code === "fr" ? "Langue Arabe" : 
               language.code === "es" ? "Idioma Árabe" : 
               "Arabic Language",
      duration: language.code === "ar" ? "12 أسبوع" : 
                language.code === "fr" ? "12 semaines" : 
                language.code === "es" ? "12 semanas" : 
                "12 weeks",
      students: 185,
      startDate: language.code === "ar" ? "10 يونيو 2025" : 
                 language.code === "fr" ? "10 juin 2025" : 
                 language.code === "es" ? "10 junio 2025" : 
                 "June 10, 2025",
      price: 349,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/course3"
    }
  ];
  
  const testimonials = [
    {
      id: "testimonial1",
      name: language.code === "ar" ? "أحمد الشمري" : 
            language.code === "fr" ? "Ahmed Al-Shamri" : 
            language.code === "es" ? "Ahmed Al-Shamri" : 
            "Ahmed Al-Shamri",
      role: language.code === "ar" ? "طالب - دورة التخطيط الاستراتيجي" : 
            language.code === "fr" ? "Étudiant - Cours de Planification Stratégique" : 
            language.code === "es" ? "Estudiante - Curso de Planificación Estratégica" : 
            "Student - Strategic Planning Course",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: language.code === "ar" ? "لقد غيرت دورة التخطيط الاستراتيجي طريقة تفكيري تمامًا. أصبحت الآن أكثر قدرة على التخطيط لمستقبلي وتحقيق أهدافي." : 
               language.code === "fr" ? "Le cours de planification stratégique a complètement changé ma façon de penser. Je suis maintenant plus capable de planifier mon avenir et d'atteindre mes objectifs." : 
               language.code === "es" ? "El curso de planificación estratégica cambió completamente mi forma de pensar. Ahora soy más capaz de planificar mi futuro y alcanzar mis metas." : 
               "The strategic planning course completely changed my way of thinking. I am now more capable of planning for my future and achieving my goals.",
      rating: 5
    },
    {
      id: "testimonial2",
      name: language.code === "ar" ? "نورة القحطاني" : 
            language.code === "fr" ? "Noura Al-Qahtani" : 
            language.code === "es" ? "Noura Al-Qahtani" : 
            "Noura Al-Qahtani",
      role: language.code === "ar" ? "طالبة - دورة تعلم كانفا" : 
            language.code === "fr" ? "Étudiante - Cours Canva" : 
            language.code === "es" ? "Estudiante - Curso de Canva" : 
            "Student - Canva Course",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: language.code === "ar" ? "كان كورس كانفا مفيدًا للغاية! أستطيع الآن إنشاء تصاميم احترافية لمشاريعي بسهولة. المدرب كان رائعًا وشرح كل شيء بوضوح." : 
               language.code === "fr" ? "Le cours Canva était très utile! Je peux maintenant créer facilement des designs professionnels pour mes projets. Le formateur était génial et a tout expliqué clairement." : 
               language.code === "es" ? "¡El curso de Canva fue muy útil! Ahora puedo crear fácilmente diseños profesionales para mis proyectos. El instructor fue genial y explicó todo claramente." : 
               "The Canva course was extremely helpful! I can now easily create professional designs for my projects. The instructor was great and explained everything clearly.",
      rating: 4.5
    },
    {
      id: "testimonial3",
      name: language.code === "ar" ? "خالد العتيبي" : 
            language.code === "fr" ? "Khalid Al-Otaibi" : 
            language.code === "es" ? "Khalid Al-Otaibi" : 
            "Khalid Al-Otaibi",
      role: language.code === "ar" ? "طالب - دورة اللغة العربية للمبتدئين" : 
            language.code === "fr" ? "Étudiant - Cours d'Arabe pour Débutants" : 
            language.code === "es" ? "Estudiante - Curso de Árabe para Principiantes" : 
            "Student - Arabic for Beginners Course",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      content: language.code === "ar" ? "كانت تجربة رائعة! رغم أني عربي لكن أسلوب التدريس جعلني أتعمق في فهم اللغة العربية وقواعدها بشكل أفضل." : 
               language.code === "fr" ? "C'était une expérience incroyable! Bien que je sois arabe, la méthode d'enseignement m'a permis de mieux comprendre la langue arabe et ses règles." : 
               language.code === "es" ? "¡Fue una experiencia increíble! Aunque soy árabe, el método de enseñanza me permitió profundizar mi comprensión del idioma árabe y sus reglas." : 
               "It was an amazing experience! Although I'm Arab, the teaching style made me understand Arabic language and its rules more deeply.",
      rating: 5
    }
  ];
  
  const fields = [
    {
      id: "strategic",
      title: text.strategicPlanning,
      icon: LineChart,
      description: language.code === "ar" ? "تعلم مهارات التخطيط الاستراتيجي الشخصي والتشغيلي لحياة أكثر نجاحًا وإنتاجية." : 
                   language.code === "fr" ? "Apprenez les compétences en planification stratégique personnelle et opérationnelle pour une vie plus réussie et productive." : 
                   language.code === "es" ? "Aprenda habilidades de planificación estratégica personal y operativa para una vida más exitosa y productiva." : 
                   "Learn personal and operational strategic planning skills for a more successful and productive life.",
      path: "/strategic-planning"
    },
    {
      id: "technical",
      title: text.technicalPrograms,
      icon: Cpu,
      description: language.code === "ar" ? "دورات متخصصة في البرامج التقنية المختلفة مثل Canva وGoogle Forms وPadlet وغيرها الكثير." : 
                   language.code === "fr" ? "Cours spécialisés dans divers programmes techniques tels que Canva, Google Forms, Padlet et bien d'autres." : 
                   language.code === "es" ? "Cursos especializados en diversos programas técnicos como Canva, Google Forms, Padlet y muchos más." : 
                   "Specialized courses in various technical programs such as Canva, Google Forms, Padlet, and many more.",
      path: "/technical-programs"
    },
    {
      id: "arabic",
      title: text.arabicLanguage,
      icon: Languages,
      description: language.code === "ar" ? "دورات لتعليم اللغة العربية للأطفال والكبار بمستويات مختلفة من المبتدئين وحتى المتقدمين." : 
                   language.code === "fr" ? "Cours d'arabe pour enfants et adultes à différents niveaux, des débutants aux avancés." : 
                   language.code === "es" ? "Cursos de árabe para niños y adultos en diferentes niveles, desde principiantes hasta avanzados." : 
                   "Arabic language courses for children and adults at different levels from beginners to advanced.",
      path: "/arabic-language"
    },
    {
      id: "library",
      title: text.library,
      icon: BookOpen,
      description: language.code === "ar" ? "مكتبة شاملة لبيع كتب المنهج الألماني للأطفال والكبار بجميع المستويات." : 
                   language.code === "fr" ? "Une bibliothèque complète vendant des livres du programme allemand pour enfants et adultes à tous les niveaux." : 
                   language.code === "es" ? "Una biblioteca completa que vende libros del currículum alemán para niños y adultos en todos los niveles." : 
                   "A comprehensive library selling German curriculum books for children and adults at all levels.",
      path: "/library"
    },
    {
      id: "development",
      title: text.personalDevelopment,
      icon: BrainCircuit,
      description: language.code === "ar" ? "مكتبة غنية بكتب التنمية البشرية لمساعدتك على تطوير مهاراتك وتحقيق النجاح في الحياة." : 
                   language.code === "fr" ? "Une riche bibliothèque de livres de développement personnel pour vous aider à développer vos compétences et à réussir dans la vie." : 
                   language.code === "es" ? "Una rica biblioteca de libros de desarrollo personal para ayudarlo a desarrollar sus habilidades y tener éxito en la vida." : 
                   "A rich library of personal development books to help you develop your skills and achieve success in life.",
      path: "/personal-development"
    }
  ];
  
  const [selectedTab, setSelectedTab] = useState<string>("strategic");
  
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const ChevronIconNext = dir === "rtl" ? ChevronLeft : ChevronRight;
  const ChevronIconPrev = dir === "rtl" ? ChevronRight : ChevronLeft;

  const youtubeVideos = [
    {
      id: "video1",
      videoId: "AO01H-d7k4g",
      title: language.code === "ar" ? "مقدمات التخطيط الشخصي الاستراتيجي" : 
             language.code === "fr" ? "Introduction à la Planification Stratégique Personnelle" : 
             language.code === "es" ? "Introducción a la Planificación Estratégica Personal" : 
             "Introduction to Personal Strategic Planning",
      description: language.code === "ar" ? "هذه شهادات بعض ممن حضروا دورة مقدمات التخطيط الاستراتيجي الشخصي" : 
                   language.code === "fr" ? "Témoignages des participants au cours d'introduction à la planification stratégique personnelle" : 
                   language.code === "es" ? "Testimonios de participantes del curso de introducción a la planificación estratégica personal" : 
                   "Testimonials from participants of the personal strategic planning introduction course"
    },
    {
      id: "video2",
      videoId: "C_CIkZCobJA",
      title: language.code === "ar" ? "شهادات المتدربين" : 
             language.code === "fr" ? "Témoignages des Stagiaires" : 
             language.code === "es" ? "Testimonios de los Participantes" : 
             "Participant Testimonials",
      description: language.code === "ar" ? "هذه شهادات بعض ممن حضروا دورة مقدمات التخطيط الاستراتيجي الشخصي" : 
                   language.code === "fr" ? "Témoignages des participants au cours d'introduction à la planification stratégique personnelle" : 
                   language.code === "es" ? "Testimonios de participantes del curso de introducción a la planificación estratégica personal" : 
                   "Testimonials from participants of the personal strategic planning introduction course"
    },
    {
      id: "video3",
      videoId: "4a37R7Lz2Qk",
      title: language.code === "ar" ? "الدورة المتكاملة: احترف العرض التفاعلي، النسخة الاولى2024" : 
             language.code === "fr" ? "Tout lire" : 
             language.code === "es" ? "Curso Completo: Domina la Presentación Interactiva, Primera Versión 2024" : 
             "Complete Course: Master Interactive Presentation, First Version 2024",
      description: language.code === "ar" ? "برامج تنقلك من التقليد الى الاحتراف" : 
                   language.code === "fr" ? "Des programmes qui vous font passer de l'imitation à la maîtrise" : 
                   language.code === "es" ? "Programas que te llevan de la imitación al dominio" : 
                   "Programs that take you from imitation to mastery"
    }
  ];

  return (
    <div className={dir}>
      <section className="relative bg-gradient-to-br from-irada-blue to-irada-blue/90 min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
        <div className="container mx-auto px-4 py-16 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {text.heroCta}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-irada-yellow">
                {text.heroSubtitle}
              </p>
              <Button 
                size="lg" 
                className="btn-accent text-lg"
                onClick={() => navigate("/courses")}
              >
                {text.heroButton} 
                <ArrowIcon className="ms-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-white p-8 rounded-lg shadow-xl transform rotate-2 max-w-md">
                  <div className="mb-4 flex justify-center">
                    <GraduationCap className="h-16 w-16 text-irada-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-irada-blue text-center mb-4">
                    {language.code === "ar" ? "تعلم. تطور. انجح." : 
                     language.code === "fr" ? "Apprenez. Évoluez. Réussissez." :
                     language.code === "es" ? "Aprende. Evoluciona. Triunfa." :
                     "Learn. Grow. Succeed."}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {language.code === "ar" ? "منصة الإرادة هي بوابتك لتطوير مهاراتك وتحقيق أهدافك مع خبراء من مختلف المجالات." : 
                     language.code === "fr" ? "La plateforme Irada est votre porte d'entrée pour développer vos compétences et atteindre vos objectifs avec des experts de divers domaines." :
                     language.code === "es" ? "La plataforma Irada es su puerta de entrada para desarrollar sus habilidades y alcanzar sus objetivos con expertos de diversos campos." :
                     "Irada platform is your gateway to developing your skills and achieving your goals with experts from various fields."}
                  </p>
                </div>
                <div className="absolute top-8 -left-5 bg-irada-gold p-4 rounded-full animate-float">
                  <div className="bg-white p-2 rounded-full">
                    <BookOpen className="h-8 w-8 text-irada-blue" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-5 bg-irada-yellow p-4 rounded-full animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-white p-2 rounded-full">
                    <BrainCircuit className="h-8 w-8 text-irada-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-irada-gray arabic-ornament">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={text.featuresTitle}
            subtitle={text.featuresSubtitle}
            centered
            language={language}
          />
          
          <Tabs 
            defaultValue="strategic" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {fields.map((field) => (
                <TabsTrigger 
                  key={field.id} 
                  value={field.id}
                  className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
                >
                  {field.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {fields.map((field) => (
              <TabsContent key={field.id} value={field.id} className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-irada-blue/10 rounded-full">
                      <field.icon className="h-16 w-16 text-irada-blue" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-irada-blue text-center mb-4">
                    {field.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-8">
                    {field.description}
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      className="btn-primary"
                      onClick={() => navigate(field.path)}
                    >
                      {language.code === "ar" ? "استكشف المزيد" : 
                       language.code === "fr" ? "Explorer Plus" :
                       language.code === "es" ? "Explorar Más" :
                       "Explore More"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title={text.coursesTitle}
              subtitle={text.coursesSubtitle}
              language={language}
            />
            <Button 
              variant="link"
              className="text-irada-blue font-medium flex items-center"
              onClick={() => navigate("/courses")}
            >
              {text.viewAll}
              <ArrowIcon className="ms-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={language.code === "ar" ? "فيديوهات تعليمية" : 
                   language.code === "fr" ? "Vidéos Éducatives" : 
                   language.code === "es" ? "Videos Educativos" : 
                   "Educational Videos"}
            subtitle={language.code === "ar" ? "شاهد أحدث الفيديوهات التعليمية من قناة الإرادة" : 
                      language.code === "fr" ? "Regardez les dernières vidéos éducatives de la chaîne Irada" : 
                      language.code === "es" ? "Vea los últimos videos educativos del canal Irada" : 
                      "Watch the latest educational videos from Irada channel"}
            centered
            language={language}
          />
          
          <div className="flex items-center justify-center mb-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2"
              onClick={() => window.open("https://www.youtube.com/@Iradah-Training", "_blank")}
            >
              <Youtube className="h-5 w-5 text-red-600" />
              <span>
                {language.code === "ar" ? "زيارة قناة اليوتيوب" : 
                 language.code === "fr" ? "Visiter la chaîne YouTube" : 
                 language.code === "es" ? "Visitar canal de YouTube" : 
                 "Visit YouTube Channel"}
              </span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video) => (
              <YouTubeVideo
                key={video.id}
                {...video}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-irada-blue/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={text.testimonialsTitle}
            subtitle={text.testimonialsSubtitle}
            centered
            language={language}
          />
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <TestimonialCard
                    {...testimonial}
                    language={language}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mr-2 bg-white text-irada-blue border-irada-blue">
                <ChevronIconPrev className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext className="relative static transform-none ml-2 bg-white text-irada-blue border-irada-blue">
                <ChevronIconNext className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-irada-blue to-irada-blue/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {text.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-irada-yellow">
            {text.ctaSubtitle}
          </p>
          <Button 
            size="lg" 
            className="btn-accent text-lg"
            onClick={() => navigate("/register")}
          >
            {text.ctaButton}
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative mb-8">
              <img
                src="/lovable-uploads/ffff64b6-7619-46ae-80b9-ff64a21d441e.png"
                alt={text.advisorName}
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-irada-blue mb-2">
                {text.advisorTitle}
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold text-irada-gold mb-4">
                {text.advisorName}
              </h4>
              <p className="text-lg text-gray-700 mb-2">
                {text.advisorRole}
              </p>
              <p className="text-lg text-irada-blue">
                {text.advisorPosition}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
