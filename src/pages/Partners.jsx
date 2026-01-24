import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Partners = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].partners;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const benefits = [
    {
      icon: '🤝',
      title: language === 'ar' ? 'شراكة استراتيجية' : 'Strategic Partnership',
      description: language === 'ar'
        ? 'بناء شراكات طويلة الأمد لتحقيق أهداف مشتركة'
        : 'Building long-term partnerships to achieve common goals',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: '💡',
      title: language === 'ar' ? 'تأثير مستدام' : 'Sustainable Impact',
      description: language === 'ar'
        ? 'خلق تأثير إيجابي مستدام في المجتمع'
        : 'Creating sustainable positive impact in the community',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: '🌟',
      title: language === 'ar' ? 'رؤية مشتركة' : 'Shared Vision',
      description: language === 'ar'
        ? 'العمل معاً لتحقيق رؤية إنسانية مشتركة'
        : 'Working together to achieve a shared humanitarian vision',
      color: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-40 left-10 w-72 h-72 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle title={t.title} subtitle={t.subtitle} />

        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="animate-fade-in-up mb-12">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-luxury-gold to-primary rounded-3xl blur-lg opacity-20" />

              <div className="relative glass-card p-8 md:p-12 text-center overflow-hidden">
                {/* Top decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-luxury-gold to-primary" />

                {/* Icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-green">
                  <span className="text-5xl">🤲</span>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                  {t.description}
                </p>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-gold text-xl px-12 py-5"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    {t.becomePartner}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Partner Benefits */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="group relative h-full">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative glass-card p-8 h-full text-center hover:-translate-y-2 transition-all duration-500">
                    {/* Icon */}
                    <div className="relative inline-block mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <span className="text-4xl">{benefit.icon}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial/Quote section */}
          <div className="mt-16 animate-fade-in-up animation-delay-500">
            <div className="glass-card p-8 text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">💬</span>
              </div>
              <p className="text-lg text-gray-700 italic mb-4">
                {language === 'ar'
                  ? '"معاً نستطيع تحقيق ما لا نستطيع تحقيقه بمفردنا"'
                  : '"Together we can achieve what we cannot achieve alone"'}
              </p>
              <div className="flex justify-center items-center gap-2 text-primary font-semibold">
                <span>💚</span>
                {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
