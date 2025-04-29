import { Language } from "@/components/LanguageSwitcher";
import CourseCard from "@/components/CourseCard";
import SectionTitle from "@/components/SectionTitle";

interface CoursesProps {
  language: Language;
}

const coursesData = [
  {
    id: "1",
    title: {
      ar: "مقدمات التخطيط الشخصي الاستراتيجي",
      en: "Introduction to Personal Strategic Planning",
      fr: "Introduction à la planification stratégique personnelle",
      es: "Introducción a la planificación estratégica personal"
    },
    description: {
      ar: "تعلم أساسيات التخطيط الاستراتيجي الشخصي وكيفية تطبيقه في حياتك",
      en: "Learn the basics of personal strategic planning and how to apply it in your life",
      fr: "Apprenez les bases de la planification stratégique personnelle et comment l'appliquer dans votre vie",
      es: "Aprenda los fundamentos de la planificación estratégica personal y cómo aplicarla en su vida"
    },
    image: "/lovable-uploads/c4a84730-5fe6-422a-aeac-d1a7e9b0c321.png", // Updated image for Strategic Planning course
    category: {
      ar: "التخطيط الاستراتيجي",
      en: "Strategic Planning",
      fr: "Planification stratégique",
      es: "Planificación estratégica"
    },
    duration: "12h",
    students: 150,
    startDate: "2024-05-01",
    price: 299,
    currency: "USD",
    link: "/strategic-planning"
  },
  {
    id: "2",
    title: {
      ar: "احتراف العرض التفاعلي",
      en: "Professional Interactive Presentation",
      fr: "Présentation interactive professionnelle",
      es: "Presentación interactiva profesional"
    },
    description: {
      ar: "تعلم كيفية إنشاء وتقديم عروض تقديمية مؤثرة واحترافية",
      en: "Learn how to create and deliver impactful professional presentations",
      fr: "Apprenez à créer et à donner des présentations professionnelles percutantes",
      es: "Aprenda a crear y dar presentaciones profesionales impactantes"
    },
    image: "/lovable-uploads/c318c0e9-9965-4cfb-8cf3-68c53868f495.png", // Keep the current image
    category: {
      ar: "مهارات العرض",
      en: "Presentation Skills",
      fr: "Compétences en présentation",
      es: "Habilidades de presentación"
    },
    duration: "8h",
    students: 120,
    startDate: "2024-05-15",
    price: 199,
    currency: "USD",
    link: "/technical-programs"
  },
  {
    id: "3",
    title: {
      ar: "دورة كانفا للتصميم المرئي",
      en: "Canva Visual Design Course",
      fr: "Cours de Design Visuel Canva",
      es: "Curso de Diseño Visual de Canva"
    },
    description: {
      ar: "تعلم تصميم الجرافيك باستخدام منصة كانفا",
      en: "Learn graphic design using Canva platform",
      fr: "Apprenez le design graphique avec la plateforme Canva",
      es: "Aprenda diseño gráfico usando la plataforma Canva"
    },
    image: "/lovable-uploads/b3e71e40-b4a3-4928-8354-3a427528b1da.png", // Updated image for Canva course
    category: {
      ar: "التصميم",
      en: "Design",
      fr: "Design",
      es: "Diseño"
    },
    duration: "6h",
    students: 90,
    startDate: "2024-06-01",
    price: 149,
    currency: "USD",
    link: "/canva"
  },
  {
    id: "4",
    title: {
      ar: "دورة جوجل فورمز",
      en: "Google Forms Course",
      fr: "Cours Google Forms",
      es: "Curso de Google Forms"
    },
    description: {
      ar: "تعلم إنشاء وإدارة الاستبيانات باستخدام جوجل فورمز",
      en: "Learn to create and manage surveys using Google Forms",
      fr: "Apprenez à créer et gérer des sondages avec Google Forms",
      es: "Aprenda a crear y gestionar encuestas usando Google Forms"
    },
    image: "/lovable-uploads/8486bff2-611e-4cdd-ad1b-363d85bc0062.png", // Updated image for Google Forms course
    category: {
      ar: "الأدوات الرقمية",
      en: "Digital Tools",
      fr: "Outils numériques",
      es: "Herramientas digitales"
    },
    duration: "4h",
    students: 75,
    startDate: "2024-06-15",
    price: 99,
    currency: "USD",
    link: "/google-forms"
  },
  {
    id: "5",
    title: {
      ar: "دورة البادليت",
      en: "Padlet Course",
      fr: "Cours Padlet",
      es: "Curso de Padlet"
    },
    description: {
      ar: "تعلم استخدام منصة البادليت للتعاون والمشاركة",
      en: "Learn to use Padlet platform for collaboration and sharing",
      fr: "Apprenez à utiliser la plateforme Padlet pour la collaboration",
      es: "Aprenda a usar la plataforma Padlet para colaboración"
    },
    image: "/lovable-uploads/d4efa499-6451-4452-b9a1-b41388e14411.png", // Updated image for Padlet course
    category: {
      ar: "التعليم الرقمي",
      en: "Digital Education",
      fr: "Éducation numérique",
      es: "Educación digital"
    },
    duration: "3h",
    students: 60,
    startDate: "2024-07-01",
    price: 79,
    currency: "USD",
    link: "/padlet"
  },
  {
    id: "6",
    title: {
      ar: "دورة مقدمات في الذكاء الاصطناعي",
      en: "Introduction to Artificial Intelligence",
      fr: "Introduction à l'Intelligence Artificielle",
      es: "Introducción a la Inteligencia Artificial"
    },
    description: {
      ar: "تعرف على أساسيات الذكاء الاصطناعي وتطبيقاته",
      en: "Learn the basics of AI and its applications",
      fr: "Découvrez les bases de l'IA et ses applications",
      es: "Aprenda los fundamentos de la IA y sus aplicaciones"
    },
    image: "/lovable-uploads/e3989070-a9ba-43fa-9367-c42010767859.png", // Keep this image
    category: {
      ar: "التكنولوجيا",
      en: "Technology",
      fr: "Technologie",
      es: "Tecnología"
    },
    duration: "10h",
    students: 100,
    startDate: "2024-07-15",
    price: 199,
    currency: "USD",
    link: "/ai-intro"
  },
  {
    id: "7",
    title: {
      ar: "دورة مايكروسوفت وورد",
      en: "Microsoft Word Course",
      fr: "Cours Microsoft Word",
      es: "Curso de Microsoft Word"
    },
    description: {
      ar: "تعلم استخدام برنامج مايكروسوفت وورد باحترافية",
      en: "Learn to use Microsoft Word professionally",
      fr: "Apprenez à utiliser Microsoft Word professionnellement",
      es: "Aprenda a usar Microsoft Word profesionalmente"
    },
    image: "/lovable-uploads/730a562f-0f12-473c-838d-9d68df42ed7b.png",
    category: {
      ar: "المهارات المكتبية",
      en: "Office Skills",
      fr: "Compétences bureautiques",
      es: "Habilidades de oficina"
    },
    duration: "8h",
    students: 85,
    startDate: "2024-08-01",
    price: 149,
    currency: "USD",
    link: "/word"
  },
  {
    id: "8",
    title: {
      ar: "دورة مايكروسوفت إكسل",
      en: "Microsoft Excel Course",
      fr: "Cours Microsoft Excel",
      es: "Curso de Microsoft Excel"
    },
    description: {
      ar: "تعلم استخدام برنامج مايكروسوفت إكسل باحترافية",
      en: "Learn to use Microsoft Excel professionally",
      fr: "Apprenez à utiliser Microsoft Excel professionnellement",
      es: "Aprenda a usar Microsoft Excel profesionalmente"
    },
    image: "/lovable-uploads/52ad38bc-432e-4fd6-888f-eaee951e3d0f.png",
    category: {
      ar: "المهارات المكتبية",
      en: "Office Skills",
      fr: "Compétences bureautiques",
      es: "Habilidades de oficina"
    },
    duration: "12h",
    students: 95,
    startDate: "2024-08-15",
    price: 179,
    currency: "USD",
    link: "/excel"
  },
  {
    id: "9",
    title: {
      ar: "دورة فن التواصل مع الآخرين",
      en: "Art of Communication",
      fr: "L'art de la communication",
      es: "Arte de la comunicación"
    },
    description: {
      ar: "تعلم مهارات التواصل الفعال مع الآخرين",
      en: "Learn effective communication skills",
      fr: "Apprenez les compétences en communication efficace",
      es: "Aprenda habilidades de comunicación efectiva"
    },
    image: "/lovable-uploads/730a562f-0f12-473c-838d-9d68df42ed7b.png",
    category: {
      ar: "المهارات الشخصية",
      en: "Personal Skills",
      fr: "Compétences personnelles",
      es: "Habilidades personales"
    },
    duration: "15h",
    students: 110,
    startDate: "2024-09-01",
    price: 249,
    currency: "USD",
    link: "/communication"
  },
  {
    id: "10",
    title: {
      ar: "دورة حل المشاكل العائلية",
      en: "Family Problem Solving",
      fr: "Résolution des problèmes familiaux",
      es: "Resolución de problemas familiares"
    },
    description: {
      ar: "تعلم مهارات حل المشكلات العائلية بفعالية",
      en: "Learn effective family problem-solving skills",
      fr: "Apprenez à résoudre efficacement les problèmes familiaux",
      es: "Aprenda habilidades efectivas para resolver problemas familiares"
    },
    image: "/lovable-uploads/52ad38bc-432e-4fd6-888f-eaee951e3d0f.png",
    category: {
      ar: "العلاقات الأسرية",
      en: "Family Relations",
      fr: "Relations familiales",
      es: "Relaciones familiares"
    },
    duration: "16h",
    students: 80,
    startDate: "2024-09-15",
    price: 299,
    currency: "USD",
    link: "/family-problems"
  }
];

export default function Courses({ language }: CoursesProps) {
  const titles = {
    ar: "الدورات المتاحة",
    en: "Available Courses",
    fr: "Cours disponibles",
    es: "Cursos disponibles"
  };

  const subtitles = {
    ar: "اكتشف دوراتنا التدريبية المميزة",
    en: "Discover our featured training courses",
    fr: "Découvrez nos formations vedettes",
    es: "Descubre nuestros cursos destacados"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle
        title={titles[language.code as keyof typeof titles]}
        subtitle={subtitles[language.code as keyof typeof subtitles]}
        centered
        language={language}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title[language.code as keyof typeof course.title]}
            description={course.description[language.code as keyof typeof course.description]}
            image={course.image}
            category={course.category[language.code as keyof typeof course.category]}
            duration={course.duration}
            students={course.students}
            startDate={course.startDate}
            price={course.price}
            currency={course.currency}
            link={course.link}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
