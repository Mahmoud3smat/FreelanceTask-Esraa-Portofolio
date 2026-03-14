import { useLang } from '@/contexts/LangContext';

interface Skill {
  name: string;
  nameAr: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Angular', nameAr: 'أنجولار', level: 85, category: 'frontend' },
  { name: 'TypeScript', nameAr: 'تايب سكريبت', level: 80, category: 'frontend' },
  { name: 'HTML5', nameAr: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3 / SCSS', nameAr: 'CSS3 / SCSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', nameAr: 'جافاسكريبت', level: 88, category: 'frontend' },
  { name: 'Bootstrap', nameAr: 'بوتستراب', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', nameAr: 'تيلويند', level: 80, category: 'frontend' },
  { name: 'Git & GitHub', nameAr: 'جيت و جيتهاب', level: 80, category: 'tools' },
  { name: 'REST APIs', nameAr: 'واجهات برمجية', level: 75, category: 'backend' },
  { name: 'Firebase', nameAr: 'فايربيس', level: 70, category: 'backend' },
  { name: 'Problem Solving', nameAr: 'حل المشكلات', level: 85, category: 'soft' },
  { name: 'Responsive Design', nameAr: 'تصميم متجاوب', level: 90, category: 'frontend' },
];

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Skills', 'المهارات')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full animate-on-scroll" />

        <div className="grid gap-5">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`animate-on-scroll delay-${(i % 4) + 1}`}>
              <div className="flex justify-between mb-1.5">
                <span className="font-medium text-sm">{t(skill.name, skill.nameAr)}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
