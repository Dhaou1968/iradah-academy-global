
import { useState } from "react";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import BookCard from "@/components/BookCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Language } from "@/components/LanguageSwitcher";

interface LibraryProps {
  language: Language;
}

export default function Library({ language }: LibraryProps) {
  const dir = language.dir;
  
  // Texts based on language
  const content = {
    ar: {
      pageTitle: "المكتبة",
      pageSubtitle: "مكتبة شاملة للكتب التعليمية وكتب التنمية البشرية",
      germanBooksTitle: "كتب المنهج الألماني",
      germanBooksSubtitle: "مجموعة مختارة من كتب المنهج الألماني للأطفال والكبار",
      developmentBooksTitle: "كتب التنمية البشرية",
      developmentBooksSubtitle: "اكتشف كتبًا قيمة في مجال التنمية البشرية وتطوير الذات",
      childrenTab: "للأطفال",
      adultsTab: "للكبار",
      selfDevelopmentTab: "تطوير الذات",
      leadershipTab: "القيادة",
      productivityTab: "الإنتاجية",
      childrenBooks: "كتب الأطفال",
      adultBooks: "كتب الكبار",
      allBooks: "جميع الكتب",
      viewAll: "عرض الكل",
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
      pageTitle: "Library",
      pageSubtitle: "Comprehensive library for educational books and personal development books",
      germanBooksTitle: "German Curriculum Books",
      germanBooksSubtitle: "A selected collection of German curriculum books for children and adults",
      developmentBooksTitle: "Personal Development Books",
      developmentBooksSubtitle: "Discover valuable books in the field of personal development and self-improvement",
      childrenTab: "For Children",
      adultsTab: "For Adults",
      selfDevelopmentTab: "Self-Development",
      leadershipTab: "Leadership",
      productivityTab: "Productivity",
      childrenBooks: "Children's Books",
      adultBooks: "Adults' Books",
      allBooks: "All Books",
      viewAll: "View All",
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
      pageTitle: "Bibliothèque",
      pageSubtitle: "Bibliothèque complète de livres éducatifs et de développement personnel",
      germanBooksTitle: "Livres du Programme Allemand",
      germanBooksSubtitle: "Une collection sélectionnée de livres du programme allemand pour enfants et adultes",
      developmentBooksTitle: "Livres de Développement Personnel",
      developmentBooksSubtitle: "Découvrez des livres précieux dans le domaine du développement personnel et de l'amélioration de soi",
      childrenTab: "Pour Enfants",
      adultsTab: "Pour Adultes",
      selfDevelopmentTab: "Développement Personnel",
      leadershipTab: "Leadership",
      productivityTab: "Productivité",
      childrenBooks: "Livres pour Enfants",
      adultBooks: "Livres pour Adultes",
      allBooks: "Tous les Livres",
      viewAll: "Voir Tout",
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
      pageTitle: "Biblioteca",
      pageSubtitle: "Biblioteca integral de libros educativos y de desarrollo personal",
      germanBooksTitle: "Libros del Currículum Alemán",
      germanBooksSubtitle: "Una colección seleccionada de libros del currículum alemán para niños y adultos",
      developmentBooksTitle: "Libros de Desarrollo Personal",
      developmentBooksSubtitle: "Descubra valiosos libros en el campo del desarrollo personal y la superación personal",
      childrenTab: "Para Niños",
      adultsTab: "Para Adultos",
      selfDevelopmentTab: "Auto-Desarrollo",
      leadershipTab: "Liderazgo",
      productivityTab: "Productividad",
      childrenBooks: "Libros para Niños",
      adultBooks: "Libros para Adultos",
      allBooks: "Todos los Libros",
      viewAll: "Ver Todo",
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
  
  // Sample books
  const childBooks = [
    {
      id: "book1",
      title: language.code === "ar" ? "كتاب اللغة العربية - المستوى الأول" : 
             language.code === "fr" ? "Livre d'Arabe - Niveau 1" : 
             language.code === "es" ? "Libro de Árabe - Nivel 1" : 
             "Arabic Book - Level 1",
      author: language.code === "ar" ? "د. أحمد الشمري" : 
              language.code === "fr" ? "Dr. Ahmed Al-Shamri" : 
              language.code === "es" ? "Dr. Ahmed Al-Shamri" : 
              "Dr. Ahmed Al-Shamri",
      description: language.code === "ar" ? "كتاب شامل لتعليم اللغة العربية للأطفال في المستوى الأول. يتضمن الحروف وأساسيات القراءة والكتابة." : 
                   language.code === "fr" ? "Un livre complet pour enseigner l'arabe aux enfants au niveau 1. Comprend les lettres et les bases de la lecture et de l'écriture." : 
                   language.code === "es" ? "Un libro completo para enseñar árabe a niños en el nivel 1. Incluye letras y fundamentos de lectura y escritura." : 
                   "A comprehensive book for teaching Arabic to children at level 1. Includes letters and basics of reading and writing.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=2076&auto=format&fit=crop",
      category: "level1",
      rating: 4.8,
      price: 79,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book1"
    },
    {
      id: "book2",
      title: language.code === "ar" ? "كتاب القواعد والإملاء - المستوى الثاني" : 
             language.code === "fr" ? "Livre de Grammaire et Orthographe - Niveau 2" : 
             language.code === "es" ? "Libro de Gramática y Ortografía - Nivel 2" : 
             "Grammar and Spelling Book - Level 2",
      author: language.code === "ar" ? "د. سارة القحطاني" : 
              language.code === "fr" ? "Dr. Sara Al-Qahtani" : 
              language.code === "es" ? "Dra. Sara Al-Qahtani" : 
              "Dr. Sara Al-Qahtani",
      description: language.code === "ar" ? "كتاب متخصص في قواعد اللغة العربية والإملاء للأطفال في المستوى الثاني. يشمل تمارين وأنشطة تطبيقية." : 
                   language.code === "fr" ? "Un livre spécialisé en grammaire et orthographe arabes pour les enfants au niveau 2. Comprend des exercices et des activités pratiques." : 
                   language.code === "es" ? "Un libro especializado en gramática y ortografía árabe para niños en el nivel 2. Incluye ejercicios y actividades prácticas." : 
                   "A specialized book in Arabic grammar and spelling for children at level 2. Includes exercises and practical activities.",
      image: "https://images.unsplash.com/photo-1594549181132-9045fed330ce?q=80&w=2070&auto=format&fit=crop",
      category: "level2",
      rating: 4.5,
      price: 85,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book2"
    },
    {
      id: "book3",
      title: language.code === "ar" ? "سلسلة القراءة المتقدمة - المستوى الثالث" : 
             language.code === "fr" ? "Série de Lecture Avancée - Niveau 3" : 
             language.code === "es" ? "Serie de Lectura Avanzada - Nivel 3" : 
             "Advanced Reading Series - Level 3",
      author: language.code === "ar" ? "د. محمد العتيبي" : 
              language.code === "fr" ? "Dr. Mohammed Al-Otaibi" : 
              language.code === "es" ? "Dr. Mohammed Al-Otaibi" : 
              "Dr. Mohammed Al-Otaibi",
      description: language.code === "ar" ? "سلسلة كتب للقراءة المتقدمة للأطفال في المستوى الثالث. تتضمن قصصًا متنوعة وتدريبات على الفهم والتحليل." : 
                   language.code === "fr" ? "Une série de livres pour la lecture avancée des enfants au niveau 3. Comprend diverses histoires et des exercices de compréhension et d'analyse." : 
                   language.code === "es" ? "Una serie de libros para lectura avanzada de niños en el nivel 3. Incluye diversas historias y ejercicios de comprensión y análisis." : 
                   "A series of books for advanced reading for children at level 3. Includes diverse stories and exercises on comprehension and analysis.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1998&auto=format&fit=crop",
      category: "level3",
      rating: 4.7,
      price: 95,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book3"
    }
  ];
  
  const adultBooks = [
    {
      id: "book4",
      title: language.code === "ar" ? "اللغة العربية للمبتدئين (A1)" : 
             language.code === "fr" ? "Arabe pour Débutants (A1)" : 
             language.code === "es" ? "Árabe para Principiantes (A1)" : 
             "Arabic for Beginners (A1)",
      author: language.code === "ar" ? "د. فاطمة الزهراني" : 
              language.code === "fr" ? "Dr. Fatima Al-Zahrani" : 
              language.code === "es" ? "Dra. Fatima Al-Zahrani" : 
              "Dr. Fatima Al-Zahrani",
      description: language.code === "ar" ? "كتاب شامل لتعليم اللغة العربية للمبتدئين. يغطي أساسيات القراءة والكتابة والمحادثة للمستوى A1." : 
                   language.code === "fr" ? "Un livre complet pour enseigner l'arabe aux débutants. Couvre les bases de la lecture, de l'écriture et de la conversation pour le niveau A1." : 
                   language.code === "es" ? "Un libro completo para enseñar árabe a principiantes. Cubre los fundamentos de lectura, escritura y conversación para el nivel A1." : 
                   "A comprehensive book for teaching Arabic to beginners. Covers basics of reading, writing, and conversation for level A1.",
      image: "https://images.unsplash.com/photo-1583795484071-3c453e3a7c71?q=80&w=1965&auto=format&fit=crop",
      category: "levelA1",
      rating: 4.9,
      price: 120,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book4"
    },
    {
      id: "book5",
      title: language.code === "ar" ? "القواعد العربية المتوسطة (B1)" : 
             language.code === "fr" ? "Grammaire Arabe Intermédiaire (B1)" : 
             language.code === "es" ? "Gramática Árabe Intermedia (B1)" : 
             "Intermediate Arabic Grammar (B1)",
      author: language.code === "ar" ? "د. خالد المالكي" : 
              language.code === "fr" ? "Dr. Khalid Al-Malki" : 
              language.code === "es" ? "Dr. Khalid Al-Malki" : 
              "Dr. Khalid Al-Malki",
      description: language.code === "ar" ? "كتاب متخصص في قواعد اللغة العربية للمستوى المتوسط B1. يشمل شرحًا مفصلاً للقواعد مع أمثلة وتمارين." : 
                   language.code === "fr" ? "Un livre spécialisé en grammaire arabe pour le niveau intermédiaire B1. Comprend une explication détaillée des règles avec des exemples et des exercices." : 
                   language.code === "es" ? "Un libro especializado en gramática árabe para el nivel intermedio B1. Incluye explicación detallada de reglas con ejemplos y ejercicios." : 
                   "A specialized book in Arabic grammar for intermediate level B1. Includes detailed explanation of rules with examples and exercises.",
      image: "https://images.unsplash.com/photo-1612969308146-066d55f37ccb?q=80&w=2070&auto=format&fit=crop",
      category: "levelB1",
      rating: 4.6,
      price: 135,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book5"
    },
    {
      id: "book6",
      title: language.code === "ar" ? "النصوص الأدبية المتقدمة (C1)" : 
             language.code === "fr" ? "Textes Littéraires Avancés (C1)" : 
             language.code === "es" ? "Textos Literarios Avanzados (C1)" : 
             "Advanced Literary Texts (C1)",
      author: language.code === "ar" ? "د. نورة الدوسري" : 
              language.code === "fr" ? "Dr. Noura Al-Dosari" : 
              language.code === "es" ? "Dra. Noura Al-Dosari" : 
              "Dr. Noura Al-Dosari",
      description: language.code === "ar" ? "كتاب للمستوى المتقدم C1 يتضمن نصوصًا أدبية متنوعة مع تحليل وشرح مفصل. مناسب للطلاب المتقدمين في اللغة العربية." : 
                   language.code === "fr" ? "Un livre pour le niveau avancé C1 comprenant divers textes littéraires avec analyse et explication détaillée. Convient aux étudiants avancés en langue arabe." : 
                   language.code === "es" ? "Un libro para el nivel avanzado C1 que incluye diversos textos literarios con análisis y explicación detallada. Adecuado para estudiantes avanzados en lengua árabe." : 
                   "A book for advanced level C1 including diverse literary texts with detailed analysis and explanation. Suitable for advanced students in Arabic language.",
      image: "https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?q=80&w=1974&auto=format&fit=crop",
      category: "levelC1",
      rating: 4.8,
      price: 150,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book6"
    }
  ];
  
  const developmentBooks = [
    {
      id: "book7",
      title: language.code === "ar" ? "قوة العادات" : 
             language.code === "fr" ? "Le Pouvoir des Habitudes" : 
             language.code === "es" ? "El Poder de los Hábitos" : 
             "The Power of Habits",
      author: language.code === "ar" ? "د. عبدالله السعيد" : 
              language.code === "fr" ? "Dr. Abdullah Al-Saeed" : 
              language.code === "es" ? "Dr. Abdullah Al-Saeed" : 
              "Dr. Abdullah Al-Saeed",
      description: language.code === "ar" ? "كتاب يشرح كيفية تكوين عادات جديدة إيجابية وكسر العادات السلبية لتحقيق النجاح في الحياة الشخصية والمهنية." : 
                   language.code === "fr" ? "Un livre expliquant comment former de nouvelles habitudes positives et briser les habitudes négatives pour réussir dans la vie personnelle et professionnelle." : 
                   language.code === "es" ? "Un libro que explica cómo formar nuevos hábitos positivos y romper hábitos negativos para lograr el éxito en la vida personal y profesional." : 
                   "A book explaining how to form new positive habits and break negative ones to achieve success in personal and professional life.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
      category: "selfDevelopment",
      rating: 4.9,
      price: 95,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book7"
    },
    {
      id: "book8",
      title: language.code === "ar" ? "فن القيادة المؤثرة" : 
             language.code === "fr" ? "L'Art du Leadership Influent" : 
             language.code === "es" ? "El Arte del Liderazgo Influyente" : 
             "The Art of Influential Leadership",
      author: language.code === "ar" ? "د. سلطان الغامدي" : 
              language.code === "fr" ? "Dr. Sultan Al-Ghamdi" : 
              language.code === "es" ? "Dr. Sultan Al-Ghamdi" : 
              "Dr. Sultan Al-Ghamdi",
      description: language.code === "ar" ? "كتاب يستكشف أساليب القيادة الفعالة والتأثير الإيجابي على الفريق. يقدم استراتيجيات عملية لتطوير مهارات القيادة." : 
                   language.code === "fr" ? "Un livre explorant les méthodes de leadership efficaces et l'influence positive sur l'équipe. Présente des stratégies pratiques pour développer les compétences en leadership." : 
                   language.code === "es" ? "Un libro que explora métodos de liderazgo efectivo e influencia positiva en el equipo. Presenta estrategias prácticas para desarrollar habilidades de liderazgo." : 
                   "A book exploring effective leadership methods and positive influence on the team. Presents practical strategies for developing leadership skills.",
      image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop",
      category: "leadership",
      rating: 4.7,
      price: 110,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book8"
    },
    {
      id: "book9",
      title: language.code === "ar" ? "إدارة الوقت بفعالية" : 
             language.code === "fr" ? "Gestion Efficace du Temps" : 
             language.code === "es" ? "Gestión Eficaz del Tiempo" : 
             "Effective Time Management",
      author: language.code === "ar" ? "د. منى الشمري" : 
              language.code === "fr" ? "Dr. Mona Al-Shamri" : 
              language.code === "es" ? "Dra. Mona Al-Shamri" : 
              "Dr. Mona Al-Shamri",
      description: language.code === "ar" ? "كتاب يقدم استراتيجيات وتقنيات عملية لإدارة الوقت بفعالية وزيادة الإنتاجية في العمل والحياة الشخصية." : 
                   language.code === "fr" ? "Un livre présentant des stratégies et des techniques pratiques pour gérer efficacement le temps et augmenter la productivité au travail et dans la vie personnelle." : 
                   language.code === "es" ? "Un libro que presenta estrategias y técnicas prácticas para administrar el tiempo de manera efectiva y aumentar la productividad en el trabajo y la vida personal." : 
                   "A book presenting practical strategies and techniques for effectively managing time and increasing productivity at work and in personal life.",
      image: "https://images.unsplash.com/photo-1550534791-2677533605ab?q=80&w=2070&auto=format&fit=crop",
      category: "productivity",
      rating: 4.8,
      price: 85,
      currency: language.code === "ar" ? "ر.س" : 
                language.code === "fr" ? "SAR" : 
                language.code === "es" ? "SAR" : 
                "SAR",
      link: "/library/book9"
    }
  ];

  // State
  const [germanTab, setGermanTab] = useState<string>("children");
  const [developmentTab, setDevelopmentTab] = useState<string>("selfDevelopment");
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
  
  const developmentCategories = [
    { id: "selfDevelopment", name: text.selfDevelopmentTab },
    { id: "leadership", name: text.leadershipTab },
    { id: "productivity", name: text.productivityTab }
  ];
  
  // Filter books based on selected category
  const filteredChildBooks = selectedChildCategory === "all" 
    ? childBooks 
    : childBooks.filter(book => book.category === selectedChildCategory);
    
  const filteredAdultBooks = selectedAdultCategory === "all" 
    ? adultBooks 
    : adultBooks.filter(book => book.category === selectedAdultCategory);
    
  const filteredDevelopmentBooks = developmentBooks.filter(book => 
    developmentTab === "all" || book.category === developmentTab
  );
  
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

      {/* German Curriculum Books Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title={text.germanBooksTitle}
              subtitle={text.germanBooksSubtitle}
              language={language}
            />
            <Button 
              variant="link"
              className="text-irada-blue font-medium flex items-center"
              onClick={() => {}}
            >
              {text.viewAll}
              <ArrowIcon className="ms-2 h-5 w-5" />
            </Button>
          </div>
          
          <Tabs 
            defaultValue="children" 
            value={germanTab}
            onValueChange={setGermanTab}
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
                  {text.childrenBooks}
                </h3>
                
                <CategoryFilter 
                  categories={childCategories}
                  selectedCategory={selectedChildCategory}
                  onCategoryChange={setSelectedChildCategory}
                  language={language}
                />
                
                <div className="space-y-6">
                  {filteredChildBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      {...book}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="adults" className="mt-6">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-irada-blue mb-6">
                  {text.adultBooks}
                </h3>
                
                <CategoryFilter 
                  categories={adultCategories}
                  selectedCategory={selectedAdultCategory}
                  onCategoryChange={setSelectedAdultCategory}
                  language={language}
                />
                
                <div className="space-y-6">
                  {filteredAdultBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      {...book}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Development Books Section */}
      <section className="py-20 bg-irada-gray">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title={text.developmentBooksTitle}
              subtitle={text.developmentBooksSubtitle}
              language={language}
            />
            <Button 
              variant="link"
              className="text-irada-blue font-medium flex items-center"
              onClick={() => {}}
            >
              {text.viewAll}
              <ArrowIcon className="ms-2 h-5 w-5" />
            </Button>
          </div>
          
          <CategoryFilter 
            categories={developmentCategories}
            selectedCategory={developmentTab}
            onCategoryChange={setDevelopmentTab}
            language={language}
          />
          
          <div className="space-y-6">
            {filteredDevelopmentBooks.map((book) => (
              <BookCard
                key={book.id}
                {...book}
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-irada-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/10 rounded-full">
                <BookOpen className="h-10 w-10 text-irada-yellow" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language.code === "ar" ? "ابق على اطلاع بأحدث الكتب" : 
               language.code === "fr" ? "Restez Informé des Derniers Livres" : 
               language.code === "es" ? "Manténgase Informado de los Últimos Libros" : 
               "Stay Informed About the Latest Books"}
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              {language.code === "ar" ? "اشترك في نشرتنا الإخبارية للحصول على تحديثات حول أحدث الكتب والعروض الخاصة." : 
               language.code === "fr" ? "Abonnez-vous à notre newsletter pour recevoir des mises à jour sur les derniers livres et offres spéciales." : 
               language.code === "es" ? "Suscríbase a nuestro boletín para recibir actualizaciones sobre los últimos libros y ofertas especiales." : 
               "Subscribe to our newsletter to receive updates about the latest books and special offers."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={language.code === "ar" ? "البريد الإلكتروني" : 
                              language.code === "fr" ? "Email" : 
                              language.code === "es" ? "Correo electrónico" : 
                              "Email"} 
                className="px-4 py-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-irada-yellow text-gray-800"
              />
              <Button className="btn-accent">
                {language.code === "ar" ? "اشتراك" : 
                 language.code === "fr" ? "S'abonner" : 
                 language.code === "es" ? "Suscribirse" : 
                 "Subscribe"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
