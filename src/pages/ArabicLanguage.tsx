
import { useState } from "react";
import { Languages, GraduationCap, Book, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Language } from "@/components/LanguageSwitcher";

interface ArabicLanguageProps {
  language: Language;
}

export default function ArabicLanguage({ language }: ArabicLanguageProps) {
  const dir = language.dir;
  
  // Texts based on language
  const content = {
    ar: {
      pageTitle: "تعليم اللغة العربية",
      pageSubtitle: "دورات متخصصة في تعليم اللغة العربية للأطفال والكبار بجميع المستويات",
      featuresTitle: "مميزات دوراتنا",
      coursesTitle: "دورات اللغة العربية",
      coursesSubtitle: "اختر من بين مجموعة متنوعة من دوراتنا المتخصصة في تعليم اللغة العربية",
      childrenTab: "للأطفال",
      adultsTab: "للكبار",
      childrenCourses: "دورات الأطفال",
      adultsCourses: "دورات الكبار",
      allCourses: "جميع الدورات",
      level1: "المستوى الأول",
      level2: "المستوى الثاني",
      level3: "المستوى الثالث",
      level4: "المستوى الرابع",
      level5: "المستوى الخامس",
      levelA0: "المستوى A0",
      levelA1: "المستوى A1",
      levelA2: "المستوى A2",
      levelB1: "المستوى B1",
      levelB2: "المستوى B2",
      levelC1: "المستوى C1",
      levelC2: "المستوى C2"
    },
    en: {
      pageTitle: "Arabic Language Learning",
      pageSubtitle: "Specialized courses in teaching Arabic language for children and adults at all levels",
      featuresTitle: "Course Features",
      coursesTitle: "Arabic Language Courses",
      coursesSubtitle: "Choose from our variety of specialized courses in teaching Arabic language",
      childrenTab: "For Children",
      adultsTab: "For Adults",
      childrenCourses: "Children's Courses",
      adultsCourses: "Adults' Courses",
      allCourses: "All Courses",
      level1: "Level 1",
      level2: "Level 2",
      level3: "Level 3",
      level4: "Level 4",
      level5: "Level 5",
      levelA0: "Level A0",
      levelA1: "Level A1",
      levelA2: "Level A2",
      levelB1: "Level B1",
      levelB2: "Level B2",
      levelC1: "Level C1",
      levelC2: "Level C2"
    },
    fr: {
      pageTitle: "Apprentissage de la Langue Arabe",
      pageSubtitle: "Cours spécialisés d'enseignement de la langue arabe pour enfants et adultes à tous les niveaux",
      featuresTitle: "Caractéristiques des Cours",
      coursesTitle: "Cours de Langue Arabe",
      coursesSubtitle: "Choisissez parmi notre variété de cours spécialisés dans l'enseignement de la langue arabe",
      childrenTab: "Pour Enfants",
      adultsTab: "Pour Adultes",
      childrenCourses: "Cours pour Enfants",
      adultsCourses: "Cours pour Adultes",
      allCourses: "Tous les Cours",
      level1: "Niveau 1",
      level2: "Niveau 2",
      level3: "Niveau 3",
      level4: "Niveau 4",
      level5: "Niveau 5",
      levelA0: "Niveau A0",
      levelA1: "Niveau A1",
      levelA2: "Niveau A2",
      levelB1: "Niveau B1",
      levelB2: "Niveau B2",
      levelC1: "Niveau C1",
      levelC2: "Niveau C2"
    },
    es: {
      pageTitle: "Aprendizaje del Idioma Árabe",
      pageSubtitle: "Cursos especializados en la enseñanza del idioma árabe para niños y adultos en todos los niveles",
      featuresTitle: "Características de los Cursos",
      coursesTitle: "Cursos de Idioma Árabe",
      coursesSubtitle: "Elija entre nuestra variedad de cursos especializados en la enseñanza del idioma árabe",
      childrenTab: "Para Niños",
      adultsTab: "Para Adultos",
      childrenCourses: "Cursos para Niños",
      adultsCourses: "Cursos para Adultos",
      allCourses: "Todos los Cursos",
      level1: "Nivel 1",
      level2: "Nivel 2",
      level3: "Nivel 3",
      level4: "Nivel 4",
      level5: "Nivel 5",
      levelA0: "Nivel A0",
      levelA1: "Nivel A1",
      levelA2: "Nivel A2",
      levelB1: "Nivel B1",
      levelB2: "Nivel B2",
      levelC1: "Nivel C1",
      levelC2: "Nivel C2"
    }
  };
  
  const text = content[language.code as keyof typeof content];
  
  // Sample courses
  const childrenCourses = [
    {
      id: "child1",
      title: language.code === "ar" ? "اللغة العربية للأطفال - المستوى الأول" : 
             language.code === "fr" ? "Arabe pour Enfants - Niveau 1" : 
             language.code === "es" ? "Árabe para Niños - Nivel 1" : 
             "Arabic for Children - Level 1",
      description: language.code === "ar" ? "دورة تعليم اللغة العربية للأطفال - المستوى الأول. تركز على الحروف وأساسيات القراءة والكتابة." : 
                   language.code === "fr" ? "Cours d'arabe pour enfants - Niveau 1. Concentré sur les lettres et les bases de la lecture et de l'écriture." : 
                   language.code === "es" ? "Curso de árabe para niños - Nivel 1. Centrado en letras y fundamentos de lectura y escritura." : 
                   "Arabic course for children - Level 1. Focused on letters and basics of reading and writing.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
      category: "level1",
      duration: language.code === "ar" ? "12 أسبوع" : 
                language.code === "fr" ? "12 semaines" : 
                language.code === "es" ? "12 semanas" : 
                "12 weeks",
      students: 120,
      startDate: language.code === "ar" ? "1 سبتمبر 2025" : 
                 language.code === "fr" ? "1 septembre 2025" : 
                 language.code === "es" ? "1 septiembre 2025" : 
                 "September 1, 2025",
      price: 299,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/child1"
    },
    {
      id: "child2",
      title: language.code === "ar" ? "اللغة العربية للأطفال - المستوى الثاني" : 
             language.code === "fr" ? "Arabe pour Enfants - Niveau 2" : 
             language.code === "es" ? "Árabe para Niños - Nivel 2" : 
             "Arabic for Children - Level 2",
      description: language.code === "ar" ? "دورة تعليم اللغة العربية للأطفال - المستوى الثاني. تركز على تكوين الكلمات البسيطة والجمل القصيرة." : 
                   language.code === "fr" ? "Cours d'arabe pour enfants - Niveau 2. Concentré sur la formation de mots simples et de phrases courtes." : 
                   language.code === "es" ? "Curso de árabe para niños - Nivel 2. Centrado en formar palabras simples y oraciones cortas." : 
                   "Arabic course for children - Level 2. Focused on forming simple words and short sentences.",
      image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=2070&auto=format&fit=crop",
      category: "level2",
      duration: language.code === "ar" ? "12 أسبوع" : 
                language.code === "fr" ? "12 semaines" : 
                language.code === "es" ? "12 semanas" : 
                "12 weeks",
      students: 90,
      startDate: language.code === "ar" ? "5 سبتمبر 2025" : 
                 language.code === "fr" ? "5 septembre 2025" : 
                 language.code === "es" ? "5 septiembre 2025" : 
                 "September 5, 2025",
      price: 299,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/child2"
    },
    {
      id: "child3",
      title: language.code === "ar" ? "اللغة العربية للأطفال - المستوى الثالث" : 
             language.code === "fr" ? "Arabe pour Enfants - Niveau 3" : 
             language.code === "es" ? "Árabe para Niños - Nivel 3" : 
             "Arabic for Children - Level 3",
      description: language.code === "ar" ? "دورة تعليم اللغة العربية للأطفال - المستوى الثالث. تطوير مهارات القراءة والكتابة وبناء المفردات." : 
                   language.code === "fr" ? "Cours d'arabe pour enfants - Niveau 3. Développement des compétences en lecture et en écriture et construction du vocabulaire." : 
                   language.code === "es" ? "Curso de árabe para niños - Nivel 3. Desarrollo de habilidades de lectura y escritura y construcción de vocabulario." : 
                   "Arabic course for children - Level 3. Developing reading and writing skills and building vocabulary.",
      image: "https://images.unsplash.com/photo-1544649349-3456383ca05f?q=80&w=1975&auto=format&fit=crop",
      category: "level3",
      duration: language.code === "ar" ? "14 أسبوع" : 
                language.code === "fr" ? "14 semaines" : 
                language.code === "es" ? "14 semanas" : 
                "14 weeks",
      students: 75,
      startDate: language.code === "ar" ? "10 سبتمبر 2025" : 
                 language.code === "fr" ? "10 septembre 2025" : 
                 language.code === "es" ? "10 septiembre 2025" : 
                 "September 10, 2025",
      price: 349,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/child3"
    }
  ];
  
  const adultCourses = [
    {
      id: "adult1",
      title: language.code === "ar" ? "اللغة العربية للمبتدئين (A1)" : 
             language.code === "fr" ? "Arabe pour Débutants (A1)" : 
             language.code === "es" ? "Árabe para Principiantes (A1)" : 
             "Arabic for Beginners (A1)",
      description: language.code === "ar" ? "دورة تأسيسية في اللغة العربية للمبتدئين تغطي القراءة والكتابة والمحادثة." : 
                   language.code === "fr" ? "Cours de base en langue arabe pour débutants couvrant la lecture, l'écriture et la conversation." : 
                   language.code === "es" ? "Curso básico de lengua árabe para principiantes que cubre lectura, escritura y conversación." : 
                   "Foundational course in Arabic language for beginners covering reading, writing, and conversation.",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop",
      category: "levelA1",
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
      link: "/arabic-language/adult1"
    },
    {
      id: "adult2",
      title: language.code === "ar" ? "اللغة العربية للمستوى المتوسط (B1)" : 
             language.code === "fr" ? "Arabe Niveau Intermédiaire (B1)" : 
             language.code === "es" ? "Árabe Nivel Intermedio (B1)" : 
             "Intermediate Arabic (B1)",
      description: language.code === "ar" ? "دورة اللغة العربية للمستوى المتوسط تركز على تطوير مهارات المحادثة وفهم النصوص المتوسطة." : 
                   language.code === "fr" ? "Cours d'arabe de niveau intermédiaire axé sur le développement des compétences conversationnelles et la compréhension de textes de niveau intermédiaire." : 
                   language.code === "es" ? "Curso de árabe de nivel intermedio centrado en desarrollar habilidades de conversación y comprensión de textos de nivel intermedio." : 
                   "Intermediate level Arabic course focusing on developing conversation skills and understanding intermediate texts.",
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2070&auto=format&fit=crop",
      category: "levelB1",
      duration: language.code === "ar" ? "16 أسبوع" : 
                language.code === "fr" ? "16 semaines" : 
                language.code === "es" ? "16 semanas" : 
                "16 weeks",
      students: 120,
      startDate: language.code === "ar" ? "15 يوليو 2025" : 
                 language.code === "fr" ? "15 juillet 2025" : 
                 language.code === "es" ? "15 julio 2025" : 
                 "July 15, 2025",
      price: 449,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code ===  "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/adult2"
    },
    {
      id: "adult3",
      title: language.code === "ar" ? "اللغة العربية للمستوى المتقدم (C1)" : 
             language.code === "fr" ? "Arabe Niveau Avancé (C1)" : 
             language.code === "es" ? "Árabe Nivel Avanzado (C1)" : 
             "Advanced Arabic (C1)",
      description: language.code === "ar" ? "دورة اللغة العربية للمستوى المتقدم تركز على النصوص الأدبية والفهم العميق للغة والثقافة العربية." : 
                   language.code === "fr" ? "Cours d'arabe de niveau avancé axé sur les textes littéraires et une compréhension approfondie de la langue et de la culture arabes." : 
                   language.code === "es" ? "Curso de árabe de nivel avanzado centrado en textos literarios y una comprensión profunda del idioma y la cultura árabe." : 
                   "Advanced level Arabic course focusing on literary texts and deep understanding of Arabic language and culture.",
      image: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop",
      category: "levelC1",
      duration: language.code === "ar" ? "20 أسبوع" : 
                language.code === "fr" ? "20 semaines" : 
                language.code === "es" ? "20 semanas" : 
                "20 weeks",
      students: 65,
      startDate: language.code === "ar" ? "1 أغسطس 2025" : 
                 language.code === "fr" ? "1 août 2025" : 
                 language.code === "es" ? "1 agosto 2025" : 
                 "August 1, 2025",
      price: 549,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/arabic-language/adult3"
    }
  ];

  // State
  const [selectedTab, setSelectedTab] = useState<string>("children");
  const [selectedChildCategory, setSelectedChildCategory] = useState<string>("all");
  const [selectedAdultCategory, setSelectedAdultCategory] = useState<string>("all");
  
  // Categories
  const childCategories = [
    { id: "level1", name: text.level1 },
    { id: "level2", name: text.level2 },
    { id: "level3", name: text.level3 },
    { id: "level4", name: text.level4 },
    { id: "level5", name: text.level5 }
  ];
  
  const adultCategories = [
    { id: "levelA0", name: text.levelA0 },
    { id: "levelA1", name: text.levelA1 },
    { id: "levelA2", name: text.levelA2 },
    { id: "levelB1", name: text.levelB1 },
    { id: "levelB2", name: text.levelB2 },
    { id: "levelC1", name: text.levelC1 },
    { id: "levelC2", name: text.levelC2 }
  ];
  
  // Filter courses based on selected category
  const filteredChildCourses = selectedChildCategory === "all" 
    ? childrenCourses 
    : childrenCourses.filter(course => course.category === selectedChildCategory);
    
  const filteredAdultCourses = selectedAdultCategory === "all" 
    ? adultCourses 
    : adultCourses.filter(course => course.category === selectedAdultCategory);

  return (
    <div className={dir}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-irada-blue to-irada-blue/90 py-20">
        <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {text.pageTitle}
            </h1>
            <p className="text-xl text-irada-yellow">
              {text.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-irada-gray arabic-ornament">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={text.featuresTitle}
            centered
            language={language}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-irada-blue/10 rounded-full">
                  <Languages className="h-12 w-12 text-irada-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-irada-blue mb-4">
                {language.code === "ar" ? "منهج متكامل" : 
                 language.code === "fr" ? "Programme Intégré" : 
                 language.code === "es" ? "Programa Integrado" : 
                 "Integrated Curriculum"}
              </h3>
              <p className="text-gray-600">
                {language.code === "ar" ? "منهج شامل يغطي مهارات القراءة والكتابة والمحادثة والاستماع بطريقة متكاملة." : 
                 language.code === "fr" ? "Un programme complet couvrant les compétences en lecture, écriture, conversation et écoute de manière intégrée." : 
                 language.code === "es" ? "Un plan de estudios integral que cubre las habilidades de lectura, escritura, habla y escucha de manera integrada." : 
                 "A comprehensive curriculum covering reading, writing, speaking, and listening skills in an integrated way."}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-irada-blue/10 rounded-full">
                  <GraduationCap className="h-12 w-12 text-irada-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-irada-blue mb-4">
                {language.code === "ar" ? "معلمون متخصصون" : 
                 language.code === "fr" ? "Enseignants Spécialisés" : 
                 language.code === "es" ? "Profesores Especializados" : 
                 "Specialized Teachers"}
              </h3>
              <p className="text-gray-600">
                {language.code === "ar" ? "معلمون محترفون ذوو خبرة في تعليم اللغة العربية للناطقين بها ولغير الناطقين بها." : 
                 language.code === "fr" ? "Des enseignants professionnels expérimentés dans l'enseignement de l'arabe aux locuteurs natifs et non natifs." : 
                 language.code === "es" ? "Profesores profesionales con experiencia en la enseñanza del árabe a hablantes nativos y no nativos." : 
                 "Professional teachers experienced in teaching Arabic to both native and non-native speakers."}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-irada-blue/10 rounded-full">
                  <Book className="h-12 w-12 text-irada-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-irada-blue mb-4">
                {language.code === "ar" ? "مواد تعليمية مبتكرة" : 
                 language.code === "fr" ? "Matériel Pédagogique Innovant" : 
                 language.code === "es" ? "Material Educativo Innovador" : 
                 "Innovative Learning Materials"}
              </h3>
              <p className="text-gray-600">
                {language.code === "ar" ? "مواد تعليمية متنوعة تشمل الكتب والتسجيلات الصوتية والمرئية والألعاب التعليمية التفاعلية." : 
                 language.code === "fr" ? "Divers matériaux pédagogiques comprenant des livres, des enregistrements audio et vidéo, et des jeux éducatifs interactifs." : 
                 language.code === "es" ? "Diversos materiales educativos que incluyen libros, grabaciones de audio y video, y juegos educativos interactivos." : 
                 "Diverse teaching materials including books, audio and video recordings, and interactive educational games."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={text.coursesTitle}
            subtitle={text.coursesSubtitle}
            language={language}
          />
          
          <Tabs 
            defaultValue="children" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger 
                value="children"
                className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
              >
                {text.childrenTab}
              </TabsTrigger>
              <TabsTrigger 
                value="adults"
                className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
              >
                {text.adultsTab}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="children" className="mt-6">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-irada-blue mb-6">
                  {text.childrenCourses}
                </h3>
                
                <CategoryFilter 
                  categories={childCategories}
                  selectedCategory={selectedChildCategory}
                  onCategoryChange={setSelectedChildCategory}
                  language={language}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredChildCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      {...course}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="adults" className="mt-6">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-irada-blue mb-6">
                  {text.adultsCourses}
                </h3>
                
                <CategoryFilter 
                  categories={adultCategories}
                  selectedCategory={selectedAdultCategory}
                  onCategoryChange={setSelectedAdultCategory}
                  language={language}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredAdultCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      {...course}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-irada-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Users className="h-8 w-8 text-irada-yellow" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">2500+</div>
              <p className="text-irada-yellow">
                {language.code === "ar" ? "طالب وطالبة" : 
                 language.code === "fr" ? "Étudiants" : 
                 language.code === "es" ? "Estudiantes" : 
                 "Students"}
              </p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <Book className="h-8 w-8 text-irada-yellow" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-irada-yellow">
                {language.code === "ar" ? "دورة متخصصة" : 
                 language.code === "fr" ? "Cours Spécialisés" : 
                 language.code === "es" ? "Cursos Especializados" : 
                 "Specialized Courses"}
              </p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-irada-yellow" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-irada-yellow">
                {language.code === "ar" ? "معلم ومعلمة متخصصون" : 
                 language.code === "fr" ? "Enseignants Spécialisés" : 
                 language.code === "es" ? "Profesores Especializados" : 
                 "Specialized Teachers"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
