
import { Language } from "./LanguageSwitcher";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  language: Language;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  language
}: SectionTitleProps) {
  const dir = language.dir;
  
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${dir}`}>
      <h2 className={`text-2xl md:text-3xl font-bold text-irada-blue ${centered ? '' : 'heading-decoration'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600">{subtitle}</p>
      )}
      {centered && (
        <div className="mx-auto mt-2 h-1 w-20 bg-irada-gold rounded-full"></div>
      )}
    </div>
  );
}
