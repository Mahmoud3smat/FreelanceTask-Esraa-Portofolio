import { useLang } from '@/contexts/LangContext';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLang();

  const highlights = [
    { icon: Code2, en: 'Clean Code', ar: 'كود نظيف' },
    { icon: Palette, en: 'UI/UX Design', ar: 'تصميم واجهات' },
    { icon: Smartphone, en: 'Responsive', ar: 'متجاوب' },
    { icon: Zap, en: 'Performance', ar: 'أداء عالي' },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('About Me', 'عني')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full animate-on-scroll" />
        
        <p className="text-center text-muted-foreground text-lg leading-relaxed mb-12 animate-on-scroll delay-1">
          {t(
            "I'm a dedicated Frontend Developer and Computer Science graduate from the Faculty of Computers and Information (Class of 2024). I specialize in building dynamic, user-friendly web applications using Angular and modern web technologies. I'm always eager to learn and grow in the ever-evolving tech landscape.",
            'أنا مطورة واجهات أمامية متحمسة وخريجة من كلية الحاسبات والمعلومات (دفعة ٢٠٢٤). أتخصص في بناء تطبيقات ويب ديناميكية وسهلة الاستخدام باستخدام Angular وتقنيات الويب الحديثة. أسعى دائماً للتعلم والتطور في عالم التكنولوجيا المتغير.'
          )}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={item.en}
              className={`flex flex-col items-center gap-3 p-6 bg-card rounded-xl card-shadow animate-on-scroll delay-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium">{t(item.en, item.ar)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
