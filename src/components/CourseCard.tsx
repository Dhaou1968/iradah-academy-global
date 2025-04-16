
import { Link } from "react-router-dom";
import { Calendar, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "./LanguageSwitcher";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  students: number;
  startDate: string;
  price: number;
  currency: string;
  link: string;
  language: Language;
}

export default function CourseCard({
  id,
  title,
  description,
  image,
  category,
  duration,
  students,
  startDate,
  price,
  currency,
  link,
  language
}: CourseCardProps) {
  const dir = language.dir;
  
  const viewText = {
    ar: "عرض الدورة",
    en: "View Course",
    fr: "Voir le Cours",
    es: "Ver Curso"
  };
  
  const durationText = {
    ar: "المدة:",
    en: "Duration:",
    fr: "Durée:",
    es: "Duración:"
  };
  
  const studentsText = {
    ar: "الطلاب:",
    en: "Students:",
    fr: "Étudiants:",
    es: "Estudiantes:"
  };
  
  const startDateText = {
    ar: "تاريخ البدء:",
    en: "Start Date:",
    fr: "Date de début:",
    es: "Fecha de inicio:"
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${dir}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-irada-yellow text-irada-blue text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-irada-blue line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            <span>{durationText[language.code as keyof typeof durationText]} {duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            <span>{studentsText[language.code as keyof typeof studentsText]} {students}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2 rtl:ml-2 rtl:mr-0" />
            <span>{startDateText[language.code as keyof typeof startDateText]} {startDate}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="font-bold text-lg text-irada-blue">
            {price} {currency}
          </div>
          <Link to={link}>
            <Button className="btn-primary">
              {viewText[language.code as keyof typeof viewText]}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
