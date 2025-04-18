
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
    image: "/lovable-uploads/730a562f-0f12-473c-838d-9d68df42ed7b.png",
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
    image: "/lovable-uploads/52ad38bc-432e-4fd6-888f-eaee951e3d0f.png",
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
