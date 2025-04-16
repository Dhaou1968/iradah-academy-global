
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "./LanguageSwitcher";

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  language: Language;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  language
}: CategoryFilterProps) {
  const dir = language.dir;
  
  const allText = {
    ar: "الكل",
    en: "All",
    fr: "Tout",
    es: "Todos"
  };

  return (
    <div className={`flex flex-wrap gap-2 mb-6 ${dir}`}>
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        className={selectedCategory === "all" ? "bg-irada-blue text-white" : "text-gray-700"}
        onClick={() => onCategoryChange("all")}
      >
        {allText[language.code as keyof typeof allText]}
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={selectedCategory === category.id ? "bg-irada-blue text-white" : "text-gray-700"}
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}
