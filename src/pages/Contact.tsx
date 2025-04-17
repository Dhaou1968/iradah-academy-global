import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MessageSquare,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Language } from "@/components/LanguageSwitcher";

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const { toast } = useToast();
  const dir = language.dir;
  
  const content = {
    ar: {
      pageTitle: "اتصل بنا",
      pageSubtitle: "نحن هنا للإجابة عن استفساراتك ومساعدتك",
      contactInfo: "معلومات الاتصال",
      contactInfoDesc: "يمكنك التواصل معنا من خلال القنوات التالية",
      address: "العنوان",
      addressValue: "ليون، فرنسا",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      socialMedia: "وسائل التواصل الاجتماعي",
      messageTitle: "أرسل لنا رسالة",
      messageDesc: "املأ النموذج أدناه وسنقوم بالرد عليك في أقرب وقت ممكن",
      nameLabel: "الاسم",
      namePlaceholder: "أدخل اسمك الكامل",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "أدخل موضوع رسالتك",
      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",
      sendButton: "إرسال الرسالة",
      successMessage: "تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريبًا.",
      faqTitle: "الأسئلة الشائعة",
      faqDesc: "إجابات على الأسئلة الأكثر شيوعًا"
    },
    en: {
      pageTitle: "Contact Us",
      pageSubtitle: "We're here to answer your inquiries and help you",
      contactInfo: "Contact Information",
      contactInfoDesc: "You can reach us through the following channels",
      address: "Address",
      addressValue: "Lyon, France",
      phone: "Phone",
      email: "Email",
      socialMedia: "Social Media",
      messageTitle: "Send Us a Message",
      messageDesc: "Fill out the form below and we will get back to you as soon as possible",
      nameLabel: "Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      subjectLabel: "Subject",
      subjectPlaceholder: "Enter the subject of your message",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendButton: "Send Message",
      successMessage: "Your message has been sent successfully. We will respond to you soon.",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Answers to the most common questions"
    },
    fr: {
      pageTitle: "Contactez-nous",
      pageSubtitle: "Nous sommes là pour répondre à vos questions et vous aider",
      contactInfo: "Informations de Contact",
      contactInfoDesc: "Vous pouvez nous joindre par les canaux suivants",
      address: "Adresse",
      addressValue: "Lyon, France",
      phone: "Téléphone",
      email: "Email",
      socialMedia: "Réseaux Sociaux",
      messageTitle: "Envoyez-nous un Message",
      messageDesc: "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible",
      nameLabel: "Nom",
      namePlaceholder: "Entrez votre nom complet",
      emailLabel: "Email",
      emailPlaceholder: "Entrez votre email",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Entrez le sujet de votre message",
      messageLabel: "Message",
      messagePlaceholder: "Écrivez votre message ici...",
      sendButton: "Envoyer le Message",
      successMessage: "Votre message a été envoyé avec succès. Nous vous répondrons bientôt.",
      faqTitle: "Questions Fréquemment Posées",
      faqDesc: "Réponses aux questions les plus courantes"
    },
    es: {
      pageTitle: "Contáctenos",
      pageSubtitle: "Estamos aquí para responder a sus consultas y ayudarle",
      contactInfo: "Información de Contacto",
      contactInfoDesc: "Puede comunicarse con nosotros a través de los siguientes canales",
      address: "Dirección",
      addressValue: "Lyon, Francia",
      phone: "Teléfono",
      email: "Correo Electrónico",
      socialMedia: "Redes Sociales",
      messageTitle: "Envíenos un Mensaje",
      messageDesc: "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible",
      nameLabel: "Nombre",
      namePlaceholder: "Ingrese su nombre completo",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "Ingrese su correo electrónico",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Ingrese el asunto de su mensaje",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escriba su mensaje aquí...",
      sendButton: "Enviar Mensaje",
      successMessage: "Su mensaje ha sido enviado con éxito. Le responderemos pronto.",
      faqTitle: "Preguntas Frecuentes",
      faqDesc: "Respuestas a las preguntas más comunes"
    }
  };
  
  const text = content[language.code as keyof typeof content];
  
  const faqItems = [
    {
      question: language.code === "ar" ? "كيف يمكنني التسجيل في دورة؟" : 
                language.code === "fr" ? "Comment puis-je m'inscrire à un cours ?" : 
                language.code === "es" ? "¿Cómo puedo inscribirme en un curso?" : 
                "How can I register for a course?",
      answer: language.code === "ar" ? "يمكنك التسجيل في أي دورة من خلال الضغط على زر 'التسجيل' الموجود في صفحة الدورة. ستحتاج إلى إنشاء حساب أو تسجيل الدخول إذا كان لديك حساب بالفعل، ثم اتباع خطوات التسجيل وإكمال عملية الدفع." : 
              language.code === "fr" ? "Vous pouvez vous inscrire à n'importe quel cours en cliquant sur le bouton 'S'inscrire' sur la page du cours. Vous devrez créer un compte ou vous connecter si vous en avez déjà un, puis suivre les étapes d'inscription et compléter le processus de paiement." : 
              language.code === "es" ? "Puede inscribirse en cualquier curso haciendo clic en el botón 'Inscribirse' en la página del curso. Deberá crear una cuenta o iniciar sesión si ya tiene una, luego seguir los pasos de inscripción y completar el proceso de pago." : 
              "You can register for any course by clicking on the 'Register' button on the course page. You will need to create an account or log in if you already have one, then follow the registration steps and complete the payment process."
    },
    {
      question: language.code === "ar" ? "ما هي طرق الدفع المتاحة؟" : 
                language.code === "fr" ? "Quels sont les modes de paiement disponibles ?" : 
                language.code === "es" ? "¿Qué métodos de pago están disponibles?" : 
                "What payment methods are available?",
      answer: language.code === "ar" ? "نحن نقبل مجموعة متنوعة من طرق الدفع بما في ذلك بطاقات الائتمان (فيزا، ماستركارد)، والتحويل المصرفي، ومدى، وآبل باي." : 
              language.code === "fr" ? "Nous acceptons une variété de méthodes de paiement, y compris les cartes de crédit (Visa, Mastercard), les virements bancaires, Mada, et Apple Pay." : 
              language.code === "es" ? "Aceptamos una variedad de métodos de pago, incluidas tarjetas de crédito (Visa, Mastercard), transferencias bancarias, Mada y Apple Pay." : 
              "We accept a variety of payment methods including credit cards (Visa, Mastercard), bank transfer, Mada, and Apple Pay."
    },
    {
      question: language.code === "ar" ? "هل يمكنني الحصول على استرداد إذا لم أتمكن من حضور الدورة؟" : 
                language.code === "fr" ? "Puis-je obtenir un remboursement si je ne peux pas assister au cours ?" : 
                language.code === "es" ? "¿Puedo obtener un reembolso si no puedo asistir al curso?" : 
                "Can I get a refund if I'm unable to attend the course?",
      answer: language.code === "ar" ? "نعم، لدينا سياسة استرداد تسمح بالاسترداد الكامل إذا تم الإلغاء قبل 7 أيام من بدء الدورة. إذا قمت بالإلغاء بعد ذلك ولكن قبل بدء الدورة، فسيتم استرداد 50٪ من الرسوم. لا يمكن إجراء أي استرداد بعد بدء الدورة." : 
              language.code === "fr" ? "Oui, nous avons une politique de remboursement qui permet un remboursement complet si l'annulation est effectuée 7 jours avant le début du cours. Si vous annulez après cela mais avant le début du cours, 50% des frais seront remboursés. Aucun remboursement ne peut être effectué après le début du cours." : 
              language.code === "es" ? "Sí, tenemos una política de reembolso que permite un reembolso completo si la cancelación se realiza 7 días antes del inicio del curso. Si cancela después de eso pero antes del inicio del curso, se reembolsará el 50% de la tarifa. No se puede realizar ningún reembolso después del inicio del curso." : 
              "Yes, we have a refund policy that allows for a full refund if cancellation is made 7 days before the course starts. If you cancel after that but before the course starts, 50% of the fee will be refunded. No refunds can be made after the course has begun."
    },
    {
      question: language.code === "ar" ? "كيف يمكنني الحصول على كتب المنهج الألماني؟" : 
                language.code === "fr" ? "Comment puis-je obtenir les livres du programme allemand ?" : 
                language.code === "es" ? "¿Cómo puedo obtener los libros del currículum alemán?" : 
                "How can I get the German curriculum books?",
      answer: language.code === "ar" ? "يمكنك شراء كتب المنهج الألماني من خلال قسم المكتبة في موقعنا. يمكنك طلبها عبر الإنترنت وسيتم توصيلها إلى عنوانك، أو يمكنك زيارة مقرنا للشراء مباشرة." : 
              language.code === "fr" ? "Vous pouvez acheter les livres du programme allemand à travers la section bibliothèque de notre site. Vous pouvez les commander en ligne et ils seront livrés à votre adresse, ou vous pouvez visiter notre siège pour les acheter directement." : 
              language.code === "es" ? "Puede comprar los libros del currículum alemán a través de la sección de biblioteca de nuestro sitio. Puede pedirlos en línea y se entregarán en su dirección, o puede visitar nuestra sede para comprarlos directamente." : 
              "You can purchase the German curriculum books through the library section of our website. You can order them online and they will be delivered to your address, or you can visit our headquarters to purchase them directly."
    }
  ];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: language.code === "ar" ? "تم إرسال الرسالة" : 
             language.code === "fr" ? "Message Envoyé" : 
             language.code === "es" ? "Mensaje Enviado" : 
             "Message Sent",
      description: text.successMessage,
      duration: 5000
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-irada-blue flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-irada-gold" />
                    {text.messageTitle}
                  </CardTitle>
                  <CardDescription>
                    {text.messageDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        {text.nameLabel}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={text.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        {text.emailLabel}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={text.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        {text.subjectLabel}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder={text.subjectPlaceholder}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        {text.messageLabel}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={text.messagePlaceholder}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4 me-2" />
                      {text.sendButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-irada-blue">
                    {text.contactInfo}
                  </CardTitle>
                  <CardDescription>
                    {text.contactInfoDesc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-irada-blue/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-irada-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-irada-blue">{text.address}</h3>
                      <p className="text-gray-600">{text.addressValue}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-irada-blue/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-irada-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-irada-blue">{text.phone}</h3>
                      <p className="text-gray-600">+33 7 5145 5969</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-irada-blue/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-irada-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-irada-blue">{text.email}</h3>
                      <p className="text-gray-600">contact@iradah-training.com</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-semibold text-irada-blue mb-4">{text.socialMedia}</h3>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                      <a 
                        href="#" 
                        className="bg-irada-blue/10 p-3 rounded-full hover:bg-irada-blue hover:text-white transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-irada-blue/10 p-3 rounded-full hover:bg-irada-blue hover:text-white transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-irada-blue/10 p-3 rounded-full hover:bg-irada-blue hover:text-white transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-irada-blue/10 p-3 rounded-full hover:bg-irada-blue hover:text-white transition-colors"
                      >
                        <Youtube className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-irada-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-irada-blue mb-4">{text.faqTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{text.faqDesc}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-semibold text-irada-blue">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232192.67989833672!2d46.717300378912905!3d24.726179926025758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1713361863687!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Irada Academy Location"
        ></iframe>
      </section>
    </div>
  );
}
