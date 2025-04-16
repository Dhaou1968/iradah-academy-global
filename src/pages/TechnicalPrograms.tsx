import React, { useState } from "react";
import { Cpu, Palette, Table2, FileSpreadsheet, Globe } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Language } from "@/components/LanguageSwitcher";

interface TechnicalProgramsProps {
  language: Language;
}

export default function TechnicalPrograms({ language }: TechnicalProgramsProps) {
  const dir = language.dir;
  
  const content = {
    ar: {
      pageTitle: "البرامج التقنية",
      pageSubtitle: "تعلم استخدام البرامج التقنية المختلفة وتطبيقها في مجالك",
      toolsTitle: "البرامج المتاحة",
      toolsSubtitle: "مجموعة متنوعة من البرامج التقنية المهمة",
      coursesTitle: "دورات البرامج التقنية",
      coursesSubtitle: "اختر من بين مجموعة متنوعة من دوراتنا المتخصصة في البرامج التقنية",
      designPrograms: "برامج التصميم",
      officePrograms: "برامج الأوفيس",
      interactivePrograms: "البرامج التفاعلية",
      aiPrograms: "برامج الذكاء الاصطناعي",
      allCourses: "جميع الدورات"
    },
    en: {
      pageTitle: "Technical Programs",
      pageSubtitle: "Learn to use various technical programs and apply them in your field",
      toolsTitle: "Available Programs",
      toolsSubtitle: "A variety of important technical programs",
      coursesTitle: "Technical Programs Courses",
      coursesSubtitle: "Choose from our variety of specialized courses in technical programs",
      designPrograms: "Design Programs",
      officePrograms: "Office Programs",
      interactivePrograms: "Interactive Programs",
      aiPrograms: "AI Programs",
      allCourses: "All Courses"
    },
    fr: {
      pageTitle: "Programmes Techniques",
      pageSubtitle: "Apprenez à utiliser divers programmes techniques et à les appliquer dans votre domaine",
      toolsTitle: "Programmes Disponibles",
      toolsSubtitle: "Une variété de programmes techniques importants",
      coursesTitle: "Cours de Programmes Techniques",
      coursesSubtitle: "Choisissez parmi notre variété de cours spécialisés en programmes techniques",
      designPrograms: "Programmes de Conception",
      officePrograms: "Programmes de Bureau",
      interactivePrograms: "Programmes Interactifs",
      aiPrograms: "Programmes d'IA",
      allCourses: "Tous les Cours"
    },
    es: {
      pageTitle: "Programas Técnicos",
      pageSubtitle: "Aprenda a usar varios programas técnicos y aplicarlos en su campo",
      toolsTitle: "Programas Disponibles",
      toolsSubtitle: "Una variedad de importantes programas técnicos",
      coursesTitle: "Cursos de Programas Técnicos",
      coursesSubtitle: "Elija entre nuestra variedad de cursos especializados en programas técnicos",
      designPrograms: "Programas de Diseño",
      officePrograms: "Programas de Oficina",
      interactivePrograms: "Programas Interactivos",
      aiPrograms: "Programas de IA",
      allCourses: "Todos los Cours"
    }
  };
  
  const text = content[language.code as keyof typeof content];
  
  const tools = [
    {
      name: "Canva",
      description: language.code === "ar" ? "أداة تصميم عبر الإنترنت بسيطة وسهلة الاستخدام." : 
                   language.code === "fr" ? "Outil de conception en ligne simple et facile à utiliser." : 
                   language.code === "es" ? "Herramienta de diseño en línea simple y fácil de usar." : 
                   "Simple and easy-to-use online design tool.",
      icon: Palette,
      category: "design",
      logo: "/lovable-uploads/cead009b-1b4c-4e94-876b-97148ec97b5d.png"
    },
    {
      name: "Microsoft Word",
      description: language.code === "ar" ? "برنامج شامل لمعالجة النصوص وإنشاء المستندات." : 
                   language.code === "fr" ? "Programme complet de traitement de texte et de création de documents." : 
                   language.code === "es" ? "Programa completo de procesamiento de textos y creación de documentos." : 
                   "Comprehensive word processing and document creation program.",
      icon: FileSpreadsheet,
      category: "office",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
    },
    {
      name: "Microsoft Excel",
      description: language.code === "ar" ? "برنامج قوي لمعالجة البيانات وإنشاء جداول البيانات." : 
                   language.code === "fr" ? "Puissant programme de traitement de données et de création de tableurs." : 
                   language.code === "es" ? "Potente programa para procesar datos y crear hojas de cálculo." : 
                   "Powerful data processing and spreadsheet creation program.",
      icon: Table2,
      category: "office",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
    },
    {
      name: "Google Forms",
      description: language.code === "ar" ? "أداة لإنشاء استبيانات وجمع البيانات عبر الإنترنت." : 
                   language.code === "fr" ? "Outil pour créer des enquêtes et collecter des données en ligne." : 
                   language.code === "es" ? "Herramienta para crear encuestas y recopilar datos en línea." : 
                   "Tool for creating surveys and collecting data online.",
      icon: Table2,
      category: "interactive",
      logo: "/lovable-uploads/b753f015-6a5f-47df-b862-dc1d95307e18.png"
    },
    {
      name: "Padlet",
      description: language.code === "ar" ? "منصة تفاعلية للتعاون وتنظيم المعلومات بشكل مرئي." : 
                   language.code === "fr" ? "Plateforme interactive pour collaborer et organiser visuellement les informations." : 
                   language.code === "es" ? "Plataforma interactiva para colaborar y organizar información visualmente." : 
                   "Interactive platform for collaboration and visually organizing information.",
      icon: Globe,
      category: "interactive",
      logo: "/lovable-uploads/20350a81-bfbc-403a-a321-9eceac0d8681.png"
    },
    {
      name: "Wooclap",
      description: language.code === "ar" ? "منصة تفاعلية للفصول الدراسية والعروض التقديمية." : 
                   language.code === "fr" ? "Plateforme interactive pour les salles de classe et les présentations." : 
                   language.code === "es" ? "Plataforma interactiva para aulas y presentaciones." : 
                   "Interactive platform for classrooms and presentations.",
      icon: Cpu,
      category: "interactive",
      logo: "/lovable-uploads/52ad38bc-432e-4fd6-888f-eaee951e3d0f.png"
    },
    {
      name: "AI Tools",
      description: language.code === "ar" ? "أدوات الذكاء الاصطناعي للإنتاجية وتحسين العمل." : 
                   language.code === "fr" ? "Outils d'IA pour la productivité et l'amélioration du travail." : 
                   language.code === "es" ? "Herramientas de IA para productividad y mejora del trabajo." : 
                   "AI tools for productivity and work enhancement.",
      icon: Cpu,
      category: "ai",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png"
    },
    {
      name: "Calendly",
      description: language.code === "ar" ? "أداة جدولة المواعيد عبر الإنترنت لتبسيط التنسيق والتواصل." : 
                   language.code === "fr" ? "Outil de planification en ligne pour simplifier la coordination et la communication." : 
                   language.code === "es" ? "Herramienta de programación en línea para simplificar la coordinación y la comunicación." : 
                   "Online scheduling tool to simplify coordination and communication.",
      icon: Globe,
      category: "interactive",
      logo: "/lovable-uploads/730a562f-0f12-473c-838d-9d68df42ed7b.png"
    }
  ];

  const courses = [
    {
      id: "course1",
      title: language.code === "ar" ? "تعلم كانفا للتصميم" : 
             language.code === "fr" ? "Apprendre Canva pour le Design" : 
             language.code === "es" ? "Aprende Canva para Diseño" : 
             "Learn Canva for Design",
      description: language.code === "ar" ? "كورس شامل لتعلم استخدام منصة كانفا لإنشاء تصاميم احترافية بسهولة وسرعة." : 
                   language.code === "fr" ? "Un cours complet pour apprendre à utiliser la plateforme Canva pour créer des designs professionnels facilement et rapidement." : 
                   language.code === "es" ? "Un curso completo para aprender a usar la plataforma Canva para crear diseños profesionales fácil y rápidamente." : 
                   "A comprehensive course to learn using Canva platform for creating professional designs easily and quickly.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
      category: "design",
      duration: language.code === "ar" ? "4 أسابيع" : 
                language.code === "fr" ? "4 semaines" : 
                language.code === "es" ? "4 semanas" : 
                "4 weeks",
      students: 520,
      startDate: language.code === "ar" ? "1 يونيو 2025" : 
                 language.code === "fr" ? "1 juin 2025" : 
                 language.code === "es" ? "1 junio 2025" : 
                 "June 1, 2025",
      price: 249,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/technical-programs/course1"
    },
    {
      id: "course2",
      title: language.code === "ar" ? "مايكروسوفت وورد للمحترفين" : 
             language.code === "fr" ? "Microsoft Word pour les Professionnels" : 
             language.code === "es" ? "Microsoft Word para Profesionales" : 
             "Microsoft Word for Professionals",
      description: language.code === "ar" ? "تعلم جميع مهارات وورد المتقدمة: إنشاء المستندات الاحترافية والتنسيق المتقدم وأتمتة المهام وغيرها." : 
                   language.code === "fr" ? "Apprenez toutes les compétences avancées de Word : création de documents professionnels, formatage avancé, automatisation des tâches, etc." : 
                   language.code === "es" ? "Aprenda todas las habilidades avanzadas de Word: creación de documentos profesionales, formato avanzado, automatización de tareas y más." : 
                   "Learn all advanced Word skills: creating professional documents, advanced formatting, task automation, and more.",
      image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=2070&auto=format&fit=crop",
      category: "office",
      duration: language.code === "ar" ? "6 أسابيع" : 
                language.code === "fr" ? "6 semaines" : 
                language.code === "es" ? "6 semanas" : 
                "6 weeks",
      students: 310,
      startDate: language.code === "ar" ? "15 يونيو 2025" : 
                 language.code === "fr" ? "15 juin 2025" : 
                 language.code === "es" ? "15 junio 2025" : 
                 "June 15, 2025",
      price: 299,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/technical-programs/course2"
    },
    {
      id: "course3",
      title: language.code === "ar" ? "إتقان إكسل للتحليل البياني" : 
             language.code === "fr" ? "Maîtriser Excel pour l'Analyse de Données" : 
             language.code === "es" ? "Dominar Excel para Análisis de Datos" : 
             "Mastering Excel for Data Analysis",
      description: language.code === "ar" ? "دورة متقدمة في استخدام إكسل لتحليل البيانات وإنشاء التقارير والرسوم البيانية وأتمتة العمليات." : 
                   language.code === "fr" ? "Cours avancé sur l'utilisation d'Excel pour l'analyse de données, la création de rapports, de graphiques et l'automatisation des processus." : 
                   language.code === "es" ? "Curso avanzado sobre el uso de Excel para análisis de datos, creación de informes, gráficos y automatización de procesos." : 
                   "Advanced course on using Excel for data analysis, creating reports, charts, and automating processes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      category: "office",
      duration: language.code === "ar" ? "8 أسابيع" : 
                language.code === "fr" ? "8 semaines" : 
                language.code === "es" ? "8 semanas" : 
                "8 weeks",
      students: 270,
      startDate: language.code === "ar" ? "10 يوليو 2025" : 
                 language.code === "fr" ? "10 juillet 2025" : 
                 language.code === "es" ? "10 julio 2025" : 
                 "July 10, 2025",
      price: 349,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/technical-programs/course3"
    },
    {
      id: "course4",
      title: language.code === "ar" ? "استخدام Wooclap للتعليم التفاعلي" : 
             language.code === "fr" ? "Utiliser Wooclap pour l'Enseignement Interactif" : 
             language.code === "es" ? "Usar Wooclap para Enseñanza Interactiva" : 
             "Using Wooclap for Interactive Teaching",
      description: language.code === "ar" ? "تعلم كيفية استخدام منصة Wooclap لإنشاء دروس تفاعلية ومشاركة الطلاب بفعالية." : 
                   language.code === "fr" ? "Apprenez à utiliser la plateforme Wooclap pour créer des leçons interactives et engager efficacement les étudiants." : 
                   language.code === "es" ? "Aprenda a utilizar la plataforma Wooclap para crear lecciones interactivas e involucrar eficazmente a los estudiantes." : 
                   "Learn how to use the Wooclap platform to create interactive lessons and effectively engage students.",
      image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=2070&auto=format&fit=crop",
      category: "interactive",
      duration: language.code === "ar" ? "3 أسابيع" : 
                language.code === "fr" ? "3 semaines" : 
                language.code === "es" ? "3 semanas" : 
                "3 weeks",
      students: 150,
      startDate: language.code === "ar" ? "5 أغسطس 2025" : 
                 language.code === "fr" ? "5 août 2025" : 
                 language.code === "es" ? "5 agosto 2025" : 
                 "August 5, 2025",
      price: 199,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/technical-programs/course4"
    },
    {
      id: "course5",
      title: language.code === "ar" ? "الذكاء الاصطناعي في التعليم والإنتاجية" : 
             language.code === "fr" ? "L'IA dans l'Éducation et la Productivité" : 
             language.code === "es" ? "IA en Educación y Productividad" : 
             "AI in Education and Productivity",
      description: language.code === "ar" ? "استكشف كيفية استخدام أدوات الذكاء الاصطناعي لتحسين العملية التعليمية وزيادة الإنتاجية." : 
                   language.code === "fr" ? "Explorez comment utiliser les outils d'IA pour améliorer le processus éducatif et augmenter la productivité." : 
                   language.code === "es" ? "Explore cómo utilizar herramientas de IA para mejorar el proceso educativo y aumentar la productividad." : 
                   "Explore how to use AI tools to improve the educational process and increase productivity.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      category: "ai",
      duration: language.code === "ar" ? "5 أسابيع" : 
                language.code === "fr" ? "5 semaines" : 
                language.code === "es" ? "5 semanas" : 
                "5 weeks",
      students: 230,
      startDate: language.code === "ar" ? "20 أغسطس 2025" : 
                 language.code === "fr" ? "20 août 2025" : 
                 language.code === "es" ? "20 agosto 2025" : 
                 "August 20, 2025",
      price: 399,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/technical-programs/course5"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "design", name: text.designPrograms },
    { id: "office", name: text.officePrograms },
    { id: "interactive", name: text.interactivePrograms },
    { id: "ai", name: text.aiPrograms }
  ];
  
  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className={dir}>
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

      <section className="py-20 bg-irada-gray arabic-ornament">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={text.toolsTitle}
            subtitle={text.toolsSubtitle}
            centered
            language={language}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center card-hover">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-irada-blue/10 rounded-full">
                    {tool.logo ? (
                      <img 
                        src={tool.logo} 
                        alt={`${tool.name} logo`} 
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <tool.icon className="h-10 w-10 text-irada-blue" />
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-irada-blue mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
