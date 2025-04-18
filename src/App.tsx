
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import StrategicPlanning from "./pages/StrategicPlanning";
import TechnicalPrograms from "./pages/TechnicalPrograms";
import ArabicLanguage from "./pages/ArabicLanguage";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import { Language, languages } from "./components/LanguageSwitcher";

const queryClient = new QueryClient();

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]); // Default to Arabic

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    document.documentElement.dir = language.dir;
    document.documentElement.lang = language.code;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar 
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
            />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home language={currentLanguage} />} />
                <Route path="/courses" element={<Courses language={currentLanguage} />} />
                <Route path="/strategic-planning" element={<StrategicPlanning language={currentLanguage} />} />
                <Route path="/technical-programs" element={<TechnicalPrograms language={currentLanguage} />} />
                <Route path="/arabic-language" element={<ArabicLanguage language={currentLanguage} />} />
                <Route path="/library" element={<Library language={currentLanguage} />} />
                <Route path="/personal-development" element={<Library language={currentLanguage} />} />
                <Route path="/contact" element={<Contact language={currentLanguage} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer currentLanguage={currentLanguage} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
