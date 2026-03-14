import { useState } from 'react';
import { useLang } from '@/contexts/LangContext';
import { ExternalLink, Github } from 'lucide-react';

import pro2 from '@/assets/pro2.png';
import pro4 from '@/assets/pro4.png';
import pro6 from '@/assets/pro6.png';
import pro7 from '@/assets/pro7.png';
import pro9 from '@/assets/pro9.png';
import pro10 from '@/assets/pro10.png';
import pro11 from '@/assets/pro11.png';
import pro12 from '@/assets/pro12.png';
import pro13 from '@/assets/pro13.png';
import pro14 from '@/assets/pro14.png';

interface Project {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Elevate - Education Platform',
    titleAr: 'Elevate - منصة تعليمية',
    description: 'A full-featured education platform with authentication, sign-in with social accounts, and a clean modern UI.',
    descriptionAr: 'منصة تعليمية متكاملة مع تسجيل دخول وحسابات اجتماعية وواجهة مستخدم حديثة.',
    tags: ['Angular', 'TypeScript', 'Bootstrap'],
    category: 'angular',
    image: pro2,
  },
  {
    title: 'Elite & Cart - E-Commerce',
    titleAr: 'Elite & Cart - تجارة إلكترونية',
    description: 'A full-featured e-commerce app with product filtering, cart management, wishlist, and responsive design.',
    descriptionAr: 'تطبيق تجارة إلكترونية متكامل مع فلترة المنتجات وإدارة السلة والمفضلة وتصميم متجاوب.',
    tags: ['Angular', 'TypeScript', 'Bootstrap'],
    category: 'angular',
    image: pro4,
  },
  {
    title: 'Notify - Registration System',
    titleAr: 'Notify - نظام تسجيل',
    description: 'A stylish registration system with a vibrant gradient background and form validation.',
    descriptionAr: 'نظام تسجيل أنيق مع خلفية متدرجة حيوية والتحقق من البيانات.',
    tags: ['Angular', 'TypeScript', 'SCSS'],
    category: 'angular',
    image: pro6,
  },
  {
    title: 'Recipe Finder',
    titleAr: 'باحث الوصفات',
    description: 'A recipe search app with filtering by categories, ingredients, and areas with a clean UI.',
    descriptionAr: 'تطبيق بحث عن وصفات مع فلترة بالتصنيفات والمكونات والمناطق.',
    tags: ['JavaScript', 'REST API', 'Bootstrap'],
    category: 'javascript',
    image: pro7,
  },
  {
    title: 'Mealify - Restaurant Website',
    titleAr: 'Mealify - موقع مطعم',
    description: 'A modern restaurant website with dark mode, gallery, chefs section, and responsive layout.',
    descriptionAr: 'موقع مطعم حديث مع الوضع الداكن ومعرض الصور وقسم الطهاة وتصميم متجاوب.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'html-css',
    image: pro9,
  },
  {
    title: 'Start Framework - Portfolio',
    titleAr: 'Start Framework - بورتفوليو',
    description: 'A personal portfolio template with a bold hero section, about, portfolio, and contact sections.',
    descriptionAr: 'قالب بورتفوليو شخصي مع قسم بطل جريء وأقسام حول والأعمال والتواصل.',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    category: 'html-css',
    image: pro10,
  },
  {
    title: 'Quote of the Day',
    titleAr: 'اقتباس اليوم',
    description: 'A simple and fun app that generates random inspirational quotes at the click of a button.',
    descriptionAr: 'تطبيق بسيط وممتع يولد اقتباسات ملهمة عشوائية بضغطة زر.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'javascript',
    image: pro11,
  },
  {
    title: 'DevFolio - Developer Portfolio',
    titleAr: 'DevFolio - بورتفوليو مطور',
    description: 'A dark-themed developer portfolio with a stunning hero image, services, work, and blog sections.',
    descriptionAr: 'بورتفوليو مطور بثيم داكن مع صورة بطل مذهلة وأقسام خدمات وأعمال ومدونة.',
    tags: ['HTML5', 'CSS3', 'Bootstrap'],
    category: 'html-css',
    image: pro12,
  },
  {
    title: 'Bookmarker',
    titleAr: 'حافظ المواقع',
    description: 'A bookmarking app to save and organize your favorite websites with a clean warm design.',
    descriptionAr: 'تطبيق حفظ المواقع المفضلة وتنظيمها بتصميم دافئ ونظيف.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'javascript',
    image: pro13,
  },
  {
    title: 'Smart Login System',
    titleAr: 'نظام تسجيل ذكي',
    description: 'A sleek dark-themed login system with email/password authentication and sign-up flow.',
    descriptionAr: 'نظام تسجيل دخول أنيق بثيم داكن مع مصادقة البريد وكلمة المرور وتسجيل حساب.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'javascript',
    image: pro14,
  },
];

const filters = [
  { key: 'all', en: 'All', ar: 'الكل' },
  { key: 'angular', en: 'Angular', ar: 'أنجولار' },
  { key: 'javascript', en: 'JavaScript', ar: 'جافاسكريبت' },
  { key: 'html-css', en: 'HTML/CSS', ar: 'HTML/CSS' },
];

const ProjectsSection = () => {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Projects', 'المشاريع')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded-full animate-on-scroll" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll delay-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {t(f.en, f.ar)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{t(project.title, project.titleAr)}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {t(project.description, project.descriptionAr)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
