
import { Link } from "react-router-dom";
import { Book, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language } from "./LanguageSwitcher";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  price: number;
  currency: string;
  link: string;
  language: Language;
}

export default function BookCard({
  id,
  title,
  author,
  description,
  image,
  category,
  rating,
  price,
  currency,
  link,
  language
}: BookCardProps) {
  const dir = language.dir;
  
  const viewText = {
    ar: "عرض الكتاب",
    en: "View Book",
    fr: "Voir le Livre",
    es: "Ver Libro"
  };
  
  const buyText = {
    ar: "شراء",
    en: "Buy Now",
    fr: "Acheter",
    es: "Comprar"
  };
  
  const authorText = {
    ar: "المؤلف:",
    en: "Author:",
    fr: "Auteur:",
    es: "Autor:"
  };

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${dir}`}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain"
          />
        </div>
        <div className="w-full md:w-2/3 p-5">
          <div className="flex justify-between">
            <div className="text-sm font-medium text-irada-red mb-1">{category}</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-irada-yellow fill-irada-yellow' : 'text-gray-300'}`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1 rtl:mr-1 rtl:ml-0">{rating}</span>
            </div>
          </div>
          
          <h3 className="font-bold text-lg mb-1 text-irada-blue line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">{authorText[language.code as keyof typeof authorText]}</span> {author}
          </p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between mt-4">
            <div className="font-bold text-lg text-irada-blue">
              {price} {currency}
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Link to={link}>
                <Button variant="outline" className="text-irada-blue border-irada-blue hover:bg-irada-blue hover:text-white">
                  {viewText[language.code as keyof typeof viewText]}
                </Button>
              </Link>
              <Link to={`${link}/buy`}>
                <Button className="btn-primary">
                  {buyText[language.code as keyof typeof buyText]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
