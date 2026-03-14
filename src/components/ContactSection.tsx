import { useLang } from '@/contexts/LangContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert(t('Message sent! (Demo)', 'تم إرسال الرسالة! (عرض توضيحي)'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          {t('Get In Touch', 'تواصل معي')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full animate-on-scroll" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6 animate-on-scroll delay-1">
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "Feel free to reach out! I'm always open to new opportunities and collaborations.",
                'لا تتردد في التواصل! أنا دائماً منفتحة على الفرص والتعاونات الجديدة.'
              )}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-sm">esamy3955@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-sm">+20 1099097432</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={18} />
                </div>
                <span className="text-sm">{t('Egypt', 'مصر')}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 animate-on-scroll delay-2">
            <input
              type="text"
              placeholder={t('Your Name', 'اسمك')}
              value={formData.name}
              onChange={(e) => setFormData(d => ({ ...d, name: e.target.value }))}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder={t('Your Email', 'بريدك الإلكتروني')}
              value={formData.email}
              onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <textarea
              rows={5}
              placeholder={t('Your Message', 'رسالتك')}
              value={formData.message}
              onChange={(e) => setFormData(d => ({ ...d, message: e.target.value }))}
              required
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              {t('Send Message', 'إرسال الرسالة')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
