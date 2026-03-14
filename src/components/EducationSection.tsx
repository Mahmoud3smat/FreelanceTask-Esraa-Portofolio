import { useLang } from '@/contexts/LangContext';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const { t } = useLang();

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Education', 'التعليم')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full animate-on-scroll" />

        <div>
          <div className="bg-card p-5 sm:p-6 rounded-xl card-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
              <GraduationCap className="text-primary flex-shrink-0" size={20} />
              <h3 className="font-bold text-sm sm:text-base">
                {t('Bachelor of Computer Science', 'بكالوريوس حاسبات ومعلومات')}
              </h3>
            </div>
            <p className="text-primary font-medium text-sm mb-2">
              {t('Faculty of Computers and Information', 'كلية الحاسبات والمعلومات')}
            </p>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
              <Calendar size={14} className="flex-shrink-0" />
              <span>{t('2020 - 2024', '٢٠٢٠ - ٢٠٢٤')}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                'Studied software engineering, data structures, algorithms, databases, and web development. Graduated with strong foundation in computer science principles.',
                'درست هندسة البرمجيات وهياكل البيانات والخوارزميات وقواعد البيانات وتطوير الويب. تخرجت بأساس قوي في مبادئ علوم الحاسب.'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
