import { useLang } from '@/contexts/LangContext';
import heroImg from '@/assets/hero-portrait.jpg';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section id="hero" className="flex items-center py-10 md:py-16 px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-on-scroll">
            <p className="text-primary font-semibold mb-2 text-sm tracking-wider uppercase">
              {t('Frontend Developer', 'مطورة واجهات أمامية')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {t("Hi, I'm ", 'مرحباً، أنا ')}
              <span className="gradient-text">{t('Esraa Samy', 'إسراء سامي')}</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              {t(
                'A Computer Science graduate (2024) passionate about building modern, responsive web applications with Angular and more.',
                'خريجة حاسبات ومعلومات (٢٠٢٤) شغوفة ببناء تطبيقات ويب حديثة ومتجاوبة باستخدام Angular وغيرها.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t('Get In Touch', 'تواصل معي')}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {t('View Projects', 'عرض المشاريع')}
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-on-scroll delay-2">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 card-shadow animate-float">
                <img src={heroImg} alt="Esraa Samy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground font-bold animate-pulse-glow">
                <span className="text-xs text-center">{t("CS '24", 'حاسبات ٢٤')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
