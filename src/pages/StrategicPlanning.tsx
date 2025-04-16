
import { useState } from "react";
import { ArrowRight, ArrowLeft, LineChart, Target, CalendarClock, PenTool, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Language } from "@/components/LanguageSwitcher";

interface StrategicPlanningProps {
  language: Language;
}

export default function StrategicPlanning({ language }: StrategicPlanningProps) {
  const dir = language.dir;
  
  // Texts based on language
  const content = {
    ar: {
      pageTitle: "التخطيط الاستراتيجي",
      pageSubtitle: "تعلم مهارات التخطيط الاستراتيجي الشخصي والتشغيلي وطبقها في حياتك وعملك",
      featuresTitle: "ماذا ستتعلم",
      coursesTitle: "دورات التخطيط الاستراتيجي",
      coursesSubtitle: "اختر من بين مجموعة متنوعة من دوراتنا المتخصصة في التخطيط الاستراتيجي",
      personalTab: "التخطيط الشخصي",
      operationalTab: "التخطيط التشغيلي",
      strategicThinkingTab: "التفكير الاستراتيجي",
      personalTitle: "التخطيط الاستراتيجي الشخصي",
      operationalTitle: "التخطيط الاستراتيجي التشغيلي",
      strategicThinkingTitle: "مهارات التفكير الاستراتيجي",
      personalDesc: "تعلم كيفية تطبيق مبادئ التخطيط الاستراتيجي في حياتك الشخصية لتحقيق أهدافك وتطلعاتك بفعالية.",
      operationalDesc: "اكتسب المهارات اللازمة لوضع وتنفيذ الخطط الاستراتيجية التشغيلية في المؤسسات والشركات المختلفة.",
      strategicThinkingDesc: "طور قدراتك في التفكير الاستراتيجي واتخاذ القرارات بناءً على تحليل المعطيات ورؤية مستقبلية واضحة.",
      allCourses: "جميع الدورات",
      beginnerCourses: "للمبتدئين",
      intermediateCourses: "للمتوسطين",
      advancedCourses: "للمتقدمين"
    },
    en: {
      pageTitle: "Strategic Planning",
      pageSubtitle: "Learn personal and operational strategic planning skills and apply them in your life and work",
      featuresTitle: "What You'll Learn",
      coursesTitle: "Strategic Planning Courses",
      coursesSubtitle: "Choose from our variety of specialized courses in strategic planning",
      personalTab: "Personal Planning",
      operationalTab: "Operational Planning",
      strategicThinkingTab: "Strategic Thinking",
      personalTitle: "Personal Strategic Planning",
      operationalTitle: "Operational Strategic Planning",
      strategicThinkingTitle: "Strategic Thinking Skills",
      personalDesc: "Learn how to apply strategic planning principles in your personal life to effectively achieve your goals and aspirations.",
      operationalDesc: "Gain the necessary skills to develop and implement operational strategic plans in various organizations and companies.",
      strategicThinkingDesc: "Develop your strategic thinking abilities and make decisions based on data analysis and a clear future vision.",
      allCourses: "All Courses",
      beginnerCourses: "For Beginners",
      intermediateCourses: "Intermediate",
      advancedCourses: "Advanced"
    },
    fr: {
      pageTitle: "Planification Stratégique",
      pageSubtitle: "Apprenez les compétences de planification stratégique personnelle et opérationnelle et appliquez-les dans votre vie et votre travail",
      featuresTitle: "Ce Que Vous Apprendrez",
      coursesTitle: "Cours de Planification Stratégique",
      coursesSubtitle: "Choisissez parmi notre variété de cours spécialisés en planification stratégique",
      personalTab: "Planification Personnelle",
      operationalTab: "Planification Opérationnelle",
      strategicThinkingTab: "Pensée Stratégique",
      personalTitle: "Planification Stratégique Personnelle",
      operationalTitle: "Planification Stratégique Opérationnelle",
      strategicThinkingTitle: "Compétences en Pensée Stratégique",
      personalDesc: "Apprenez à appliquer les principes de planification stratégique dans votre vie personnelle pour atteindre efficacement vos objectifs et aspirations.",
      operationalDesc: "Acquérez les compétences nécessaires pour développer et mettre en œuvre des plans stratégiques opérationnels dans diverses organisations et entreprises.",
      strategicThinkingDesc: "Développez vos capacités de pensée stratégique et prenez des décisions basées sur l'analyse des données et une vision claire du futur.",
      allCourses: "Tous les Cours",
      beginnerCourses: "Pour Débutants",
      intermediateCourses: "Intermédiaire",
      advancedCourses: "Avancé"
    },
    es: {
      pageTitle: "Planificación Estratégica",
      pageSubtitle: "Aprenda habilidades de planificación estratégica personal y operativa y aplíquelas en su vida y trabajo",
      featuresTitle: "Qué Aprenderá",
      coursesTitle: "Cursos de Planificación Estratégica",
      coursesSubtitle: "Elija entre nuestra variedad de cursos especializados en planificación estratégica",
      personalTab: "Planificación Personal",
      operationalTab: "Planificación Operativa",
      strategicThinkingTab: "Pensamiento Estratégico",
      personalTitle: "Planificación Estratégica Personal",
      operationalTitle: "Planificación Estratégica Operativa",
      strategicThinkingTitle: "Habilidades de Pensamiento Estratégico",
      personalDesc: "Aprenda a aplicar los principios de planificación estratégica en su vida personal para lograr eficazmente sus metas y aspiraciones.",
      operationalDesc: "Adquiera las habilidades necesarias para desarrollar e implementar planes estratégicos operativos en diversas organizaciones y empresas.",
      strategicThinkingDesc: "Desarrolle sus capacidades de pensamiento estratégico y tome decisiones basadas en el análisis de datos y una visión clara del futuro.",
      allCourses: "Todos los Cursos",
      beginnerCourses: "Para Principiantes",
      intermediateCourses: "Intermedio",
      advancedCourses: "Avanzado"
    }
  };
  
  const text = content[language.code as keyof typeof content];
  
  // Sample courses
  const courses = [
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
      category: "beginner",
      duration: language.code === "ar" ? "8 أسابيع" : 
                language.code === "fr" ? "8 semaines" : 
                language.code === "es" ? "8 semanas" : 
                "8 weeks",
      students: 230,
      startDate: language.code === "ar" ? "15 مايو 2025" : 
                 language.code === "fr" ? "15 mai 2025" : 
                 language.code === "es" ? "15 mayo 2025" : 
                 "May 15, 2025",
      price: 399,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/strategic-planning/course1"
    },
    {
      id: "course2",
      title: language.code === "ar" ? "التخطيط الاستراتيجي الشخصي" : 
             language.code === "fr" ? "Planification Stratégique Personnelle" : 
             language.code === "es" ? "Planificación Estratégica Personal" : 
             "Personal Strategic Planning",
      description: language.code === "ar" ? "دورة متخصصة في تطبيق مبادئ التخطيط الاستراتيجي على حياتك الشخصية لتحقيق أهدافك بكفاءة." : 
                   language.code === "fr" ? "Un cours spécialisé dans l'application des principes de planification stratégique à votre vie personnelle pour atteindre efficacement vos objectifs." : 
                   language.code === "es" ? "Un curso especializado en aplicar principios de planificación estratégica a su vida personal para lograr sus metas de manera eficiente." : 
                   "A specialized course in applying strategic planning principles to your personal life to achieve your goals efficiently.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      category: "beginner",
      duration: language.code === "ar" ? "6 أسابيع" : 
                language.code === "fr" ? "6 semaines" : 
                language.code === "es" ? "6 semanas" : 
                "6 weeks",
      students: 185,
      startDate: language.code === "ar" ? "1 يونيو 2025" : 
                 language.code === "fr" ? "1 juin 2025" : 
                 language.code === "es" ? "1 junio 2025" : 
                 "June 1, 2025",
      price: 349,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/strategic-planning/course2"
    },
    {
      id: "course3",
      title: language.code === "ar" ? "استراتيجيات التخطيط التشغيلي" : 
             language.code === "fr" ? "Stratégies de Planification Opérationnelle" : 
             language.code === "es" ? "Estrategias de Planificación Operativa" : 
             "Operational Planning Strategies",
      description: language.code === "ar" ? "تعلم كيفية تطوير خطط استراتيجية تشغيلية فعالة للمؤسسات والشركات المختلفة." : 
                   language.code === "fr" ? "Apprenez à développer des plans stratégiques opérationnels efficaces pour diverses organisations et entreprises." : 
                   language.code === "es" ? "Aprenda a desarrollar planes estratégicos operativos efectivos para diversas organizaciones y empresas." : 
                   "Learn how to develop effective operational strategic plans for various organizations and companies.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      category: "intermediate",
      duration: language.code === "ar" ? "10 أسابيع" : 
                language.code === "fr" ? "10 semaines" : 
                language.code === "es" ? "10 semanas" : 
                "10 weeks",
      students: 120,
      startDate: language.code === "ar" ? "20 يونيو 2025" : 
                 language.code === "fr" ? "20 juin 2025" : 
                 language.code === "es" ? "20 junio 2025" : 
                 "June 20, 2025",
      price: 499,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/strategic-planning/course3"
    },
    {
      id: "course4",
      title: language.code === "ar" ? "تطوير مهارات التفكير الاستراتيجي" : 
             language.code === "fr" ? "Développement des Compétences en Pensée Stratégique" : 
             language.code === "es" ? "Desarrollo de Habilidades de Pensamiento Estratégico" : 
             "Developing Strategic Thinking Skills",
      description: language.code === "ar" ? "دورة متقدمة لتطوير مهارات التفكير الاستراتيجي واتخاذ القرارات بناءً على تحليل المعطيات والرؤية المستقبلية." : 
                   language.code === "fr" ? "Un cours avancé pour développer des compétences en pensée stratégique et prendre des décisions basées sur l'analyse des données et la vision future." : 
                   language.code === "es" ? "Un curso avanzado para desarrollar habilidades de pensamiento estratégico y tomar decisiones basadas en el análisis de datos y la visión de futuro." : 
                   "An advanced course for developing strategic thinking skills and making decisions based on data analysis and future vision.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop",
      category: "advanced",
      duration: language.code === "ar" ? "12 أسبوع" : 
                language.code === "fr" ? "12 semaines" : 
                language.code === "es" ? "12 semanas" : 
                "12 weeks",
      students: 85,
      startDate: language.code === "ar" ? "5 يوليو 2025" : 
                 language.code === "fr" ? "5 juillet 2025" : 
                 language.code === "es" ? "5 julio 2025" : 
                 "July 5, 2025",
      price: 599,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/strategic-planning/course4"
    }
  ];

  // State
  const [selectedTab, setSelectedTab] = useState<string>("personal");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Categories
  const categories = [
    { id: "beginner", name: text.beginnerCourses },
    { id: "intermediate", name: text.intermediateCourses },
    { id: "advanced", name: text.advancedCourses }
  ];
  
  // Filter courses based on selected category
  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);
  
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

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
          
          <Tabs 
            defaultValue="personal" 
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger 
                value="personal"
                className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
              >
                {text.personalTab}
              </TabsTrigger>
              <TabsTrigger 
                value="operational"
                className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
              >
                {text.operationalTab}
              </TabsTrigger>
              <TabsTrigger 
                value="strategic-thinking"
                className="data-[state=active]:bg-irada-blue data-[state=active]:text-white"
              >
                {text.strategicThinkingTab}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-irada-blue mb-4">
                      {text.personalTitle}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {text.personalDesc}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تحديد الأهداف الشخصية وترتيب الأولويات" : 
                           language.code === "fr" ? "Définir des objectifs personnels et établir des priorités" : 
                           language.code === "es" ? "Establecer metas personales y prioridades" : 
                           "Setting personal goals and priorities"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تطوير رؤية واضحة ورسالة شخصية" : 
                           language.code === "fr" ? "Développer une vision et une mission personnelles claires" : 
                           language.code === "es" ? "Desarrollar una visión y misión personal clara" : 
                           "Developing a clear personal vision and mission"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تحليل نقاط القوة والضعف والفرص والتحديات" : 
                           language.code === "fr" ? "Analyser les forces, les faiblesses, les opportunités et les défis" : 
                           language.code === "es" ? "Analizar fortalezas, debilidades, oportunidades y desafíos" : 
                           "Analyzing strengths, weaknesses, opportunities, and challenges"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "وضع خطط عمل واضحة ومؤشرات قياس النجاح" : 
                           language.code === "fr" ? "Établir des plans d'action clairs et des indicateurs de réussite" : 
                           language.code === "es" ? "Establecer planes de acción claros e indicadores de éxito" : 
                           "Setting clear action plans and success indicators"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-4 bg-irada-blue/10 rounded-full">
                      <Target className="h-32 w-32 text-irada-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="operational" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-irada-blue mb-4">
                      {text.operationalTitle}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {text.operationalDesc}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تحليل بيئة العمل الداخلية والخارجية" : 
                           language.code === "fr" ? "Analyser l'environnement de travail interne et externe" : 
                           language.code === "es" ? "Analizar el entorno laboral interno y externo" : 
                           "Analyzing internal and external work environment"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "صياغة الخطط الاستراتيجية والتكتيكية" : 
                           language.code === "fr" ? "Formuler des plans stratégiques et tactiques" : 
                           language.code === "es" ? "Formular planes estratégicos y tácticos" : 
                           "Formulating strategic and tactical plans"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تنفيذ الخطط ومتابعة الأداء وتقييم النتائج" : 
                           language.code === "fr" ? "Mettre en œuvre des plans, suivre les performances et évaluer les résultats" : 
                           language.code === "es" ? "Implementar planes, monitorear el rendimiento y evaluar resultados" : 
                           "Implementing plans, monitoring performance, and evaluating results"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "إدارة المخاطر والأزمات والتغيير" : 
                           language.code === "fr" ? "Gérer les risques, les crises et le changement" : 
                           language.code === "es" ? "Gestionar riesgos, crisis y cambios" : 
                           "Managing risks, crises, and change"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-4 bg-irada-blue/10 rounded-full">
                      <CalendarClock className="h-32 w-32 text-irada-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="strategic-thinking" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-irada-blue mb-4">
                      {text.strategicThinkingTitle}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {text.strategicThinkingDesc}
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تطوير رؤية شمولية ونظرة مستقبلية" : 
                           language.code === "fr" ? "Développer une vision holistique et une perspective d'avenir" : 
                           language.code === "es" ? "Desarrollar una visión holística y perspectiva futura" : 
                           "Developing a holistic vision and future perspective"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "تحليل البيانات واستخلاص الأفكار الاستراتيجية" : 
                           language.code === "fr" ? "Analyser les données et extraire des idées stratégiques" : 
                           language.code === "es" ? "Analizar datos y extraer ideas estratégicas" : 
                           "Analyzing data and extracting strategic insights"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "التفكير الإبداعي وحل المشكلات المعقدة" : 
                           language.code === "fr" ? "Pensée créative et résolution de problèmes complexes" : 
                           language.code === "es" ? "Pensamiento creativo y resolución de problemas complejos" : 
                           "Creative thinking and complex problem-solving"}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2 rtl:ml-2 rtl:mr-0 mt-1">
                          <div className="w-5 h-5 bg-irada-yellow rounded-full flex items-center justify-center">
                            <span className="text-irada-blue text-xs">✓</span>
                          </div>
                        </div>
                        <span className="text-gray-700">
                          {language.code === "ar" ? "اتخاذ القرارات الاستراتيجية في ظل عدم اليقين" : 
                           language.code === "fr" ? "Prendre des décisions stratégiques dans l'incertitude" : 
                           language.code === "es" ? "Tomar decisiones estratégicas en condiciones de incertidumbre" : 
                           "Making strategic decisions under uncertainty"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="p-4 bg-irada-blue/10 rounded-full">
                      <Brain className="h-32 w-32 text-irada-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            language={language}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
