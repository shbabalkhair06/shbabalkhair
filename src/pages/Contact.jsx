import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const socialLinks = {
    instagram: 'https://www.instagram.com/youth.the.g00d?igsh=MXJocm5ka2ZldGJqaA==',
    facebook: 'https://www.facebook.com/share/17Nhs4f4xF/',
    whatsapp: 'https://chat.whatsapp.com/GEC9g8gKOp85umVYumCph2?mode=hqrc'
  };

  const contactInfo = [
    {
      icon: '📧',
      title: language === 'ar' ? 'البريد الإلكتروني' : 'Email',
      value: t.email,
      link: `mailto:${t.email}`,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: '📱',
      title: language === 'ar' ? 'الهاتف' : 'Phone',
      value: t.phone,
      link: `tel:${t.phone}`,
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: '📍',
      title: language === 'ar' ? 'الموقع' : 'Location',
      value: t.location,
      link: null,
      color: 'from-red-500 to-rose-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(26, 95, 63, 0.5) 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${info.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative glass-card p-6 h-full text-center hover:-translate-y-2 transition-transform duration-500">
                    {/* Icon */}
                    <div className="relative inline-block mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-3xl">{info.icon}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">
                      {info.title}
                    </h4>

                    {/* Value */}
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 font-semibold text-lg hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Card */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-luxury-gold to-primary rounded-3xl blur-lg opacity-20" />

              <div className="relative glass-card overflow-hidden">
                {/* Top gold line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-luxury-gold to-primary" />

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-green">
                      <span className="text-4xl">💚</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {language === 'ar'
                        ? 'نسعد بتواصلكم معنا عبر أي من وسائل التواصل'
                        : 'We are happy to hear from you through any of our channels'}
                    </p>
                  </div>

                  {/* Social Media Section */}
                  <div className="text-center">
                    <p className="font-semibold text-gray-700 mb-6 flex items-center justify-center gap-2">
                      <span className="text-xl">🌐</span>
                      {language === 'ar' ? 'تابعنا على منصات التواصل الاجتماعي' : 'Follow us on social media'}
                    </p>

                    <div className="flex justify-center gap-6">
                      {/* Instagram */}
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Instagram"
                      >
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                          <div className="relative social-icon bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 border-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </div>
                        </div>
                      </a>

                      {/* Facebook */}
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Facebook"
                      >
                        <div className="relative">
                          <div className="absolute -inset-2 bg-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                          <div className="relative social-icon bg-blue-600 border-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </div>
                        </div>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={socialLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="WhatsApp"
                      >
                        <div className="relative">
                          <div className="absolute -inset-2 bg-green-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                          <div className="relative social-icon bg-green-500 border-0">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Quick message */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                      <a
                        href={`mailto:${t.email}`}
                        className="btn-primary inline-flex items-center gap-3"
                      >
                        <span className="text-2xl">✉️</span>
                        {language === 'ar' ? 'راسلنا عبر البريد الإلكتروني' : 'Send us an Email'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom encouragement */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-500">
            <div className="glass-card inline-block px-8 py-4">
              <p className="text-gray-600 flex items-center gap-3">
                <span className="text-2xl animate-wave">👋</span>
                {language === 'ar'
                  ? 'نسعد بتواصلكم ونرحب بأي استفسارات أو اقتراحات'
                  : 'We are happy to hear from you and welcome any inquiries or suggestions'}
                <span className="text-2xl animate-heartbeat">💚</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;