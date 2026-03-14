import { useLang } from '@/contexts/LangContext';
import { Award, ExternalLink } from 'lucide-react';

interface Course {
  title: string;
  titleAr: string;
  platform: string;
  year: string;
  certificate?: boolean;
}

const courses: Course[] = [
  { title: 'Angular - The Complete Guide', titleAr: 'أنجولار - الدليل الشامل', platform: 'Udemy', year: '2024', certificate: true },
  { title: 'TypeScript Fundamentals', titleAr: 'أساسيات تايب سكريبت', platform: 'Udemy', year: '2024', certificate: true },
  { title: 'JavaScript ES6+', titleAr: 'جافاسكريبت ES6+', platform: 'Coursera', year: '2023', certificate: true },
  { title: 'Responsive Web Design', titleAr: 'تصميم الويب المتجاوب', platform: 'freeCodeCamp', year: '2023', certificate: true },
  { title: 'Git & GitHub Masterclass', titleAr: 'إتقان جيت و جيتهاب', platform: 'Udemy', year: '2023', certificate: true },
  { title: 'Problem Solving', titleAr: 'حل المشكلات البرمجية', platform: 'HackerRank', year: '2023', certificate: true },
];

const CoursesSection = () => {
  const { t } = useLang();

  return (
    <section id="courses" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Courses & Certificates', 'الدورات والشهادات')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full animate-on-scroll" />

        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className={`bg-card p-5 rounded-xl card-shadow flex items-start gap-4 hover:elevated-shadow transition-all duration-300 animate-on-scroll delay-${(i % 4) + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-accent" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm">{t(course.title, course.titleAr)}</h3>
                <p className="text-muted-foreground text-xs mt-1">{course.platform} • {course.year}</p>
                {course.certificate && (
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary font-medium">
                    <Award size={12} />
                    {t('Certified', 'حاصلة على شهادة')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
