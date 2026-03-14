import { useLang } from '@/contexts/LangContext';
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 {t('Esraa Samy', 'إسراء سامي')}. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
        </div>
        <p className="text-muted-foreground text-xs flex items-center gap-1">
          {t('Made with', 'صُنع بـ')} <Heart size={12} className="text-accent fill-accent" /> {t('by Esraa', 'بواسطة إسراء')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
