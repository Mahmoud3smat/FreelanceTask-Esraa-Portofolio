import { useLang } from '@/contexts/LangContext';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  text: string;
  textAr: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Hassan',
    nameAr: 'أحمد حسن',
    role: 'Project Manager',
    roleAr: 'مدير مشروع',
    text: 'Esraa delivered an outstanding Angular application. Her attention to detail and responsive design skills are exceptional.',
    textAr: 'إسراء قدمت تطبيق Angular رائع. اهتمامها بالتفاصيل ومهاراتها في التصميم المتجاوب استثنائية.',
    rating: 5,
  },
  {
    name: 'Sara Mohamed',
    nameAr: 'سارة محمد',
    role: 'UI/UX Designer',
    roleAr: 'مصممة واجهات',
    text: 'Working with Esraa was a great experience. She perfectly translates designs into clean, functional code.',
    textAr: 'العمل مع إسراء كان تجربة رائعة. تحول التصميمات بشكل مثالي إلى كود نظيف وعملي.',
    rating: 5,
  },
  {
    name: 'Omar Ali',
    nameAr: 'عمر علي',
    role: 'Startup Founder',
    roleAr: 'مؤسس شركة ناشئة',
    text: 'Esraa built our company website from scratch with amazing quality and speed. Highly recommended!',
    textAr: 'إسراء بنت موقع شركتنا من الصفر بجودة وسرعة مذهلة. أنصح بها بشدة!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { t } = useLang();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Testimonials', 'آراء العملاء')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full animate-on-scroll" />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`bg-card p-6 rounded-xl card-shadow relative animate-on-scroll delay-${i + 1}`}
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="text-accent fill-accent" size={16} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t(item.text, item.textAr)}"
              </p>
              <div>
                <p className="font-bold text-sm">{t(item.name, item.nameAr)}</p>
                <p className="text-muted-foreground text-xs">{t(item.role, item.roleAr)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
