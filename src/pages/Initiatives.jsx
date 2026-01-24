import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';
import InitiativeCard from '../components/InitiativeCard';

const Initiatives = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].initiatives;

  const initiatives = [
    {
      image: t.elderlyHome.image,
      title: t.elderlyHome.title,
      description: t.elderlyHome.description,
      icon: '🏠',
      color: 'from-rose-500 to-pink-600',
    },
    {
      image: t.orphanIftar.image,
      title: t.orphanIftar.title,
      description: t.orphanIftar.description,
      icon: '🌙',
      color: 'from-amber-500 to-orange-600',
    },
    {
      image: t.clothesBank.image,
      title: t.clothesBank.title,
      description: t.clothesBank.description,
      icon: '👕',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      image: t.thareedStop.image,
      title: t.thareedStop.title,
      description: t.thareedStop.description,
      icon: '🍲',
      color: 'from-emerald-500 to-green-600',
    },
    {
      image: t.azzouniRestaurant.image,
      title: t.azzouniRestaurant.title,
      description: t.azzouniRestaurant.description,
      icon: '🍽️',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(26, 95, 63, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 95, 63, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title={t.title}
          subtitle={language === 'ar' ? 'مبادرات إنسانية تصنع الفرق' : 'Humanitarian initiatives that make a difference'}
        />

        {/* Main featured initiative */}
        <div className="mb-12 animate-fade-in-up">
          <InitiativeCard
            image={initiatives[0].image}
            title={initiatives[0].title}
            description={initiatives[0].description}
            icon={initiatives[0].icon}
            color={initiatives[0].color}
            featured={true}
          />
        </div>

        {/* Other initiatives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {initiatives.slice(1).map((initiative, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <InitiativeCard
                image={initiative.image}
                title={initiative.title}
                description={initiative.description}
                icon={initiative.icon}
                color={initiative.color}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block glass-card px-8 py-6">
            <p className="text-lg text-gray-700 mb-4">
              {language === 'ar'
                ? 'هل لديك فكرة لمبادرة جديدة؟'
                : 'Do you have an idea for a new initiative?'}
            </p>
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>💡</span>
              {language === 'ar' ? 'شاركنا أفكارك' : 'Share your ideas'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;