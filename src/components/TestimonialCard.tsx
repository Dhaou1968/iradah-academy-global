
import { Star } from "lucide-react";
import { Language } from "./LanguageSwitcher";

interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  language: Language;
}

export default function TestimonialCard({
  id,
  name,
  role,
  image,
  content,
  rating,
  language
}: TestimonialCardProps) {
  const dir = language.dir;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${dir}`}>
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4 rtl:ml-4 rtl:mr-0"
        />
        <div>
          <h4 className="font-bold text-irada-blue">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-irada-yellow fill-irada-yellow' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{content}"</p>
    </div>
  );
}
