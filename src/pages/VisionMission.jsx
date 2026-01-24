import { useContext } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const VisionMission = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].vision;

  return (
    <section className="section-padding pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-luxury-gold/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle title={t.title} />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="group relative animate-fade-in-up">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative h-full bg-gradient-to-br from-primary via-primary to-primary-dark rounded-2xl shadow-2xl p-8 lg:p-10 text-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-green-lg">
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">👁️</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center shadow-glow-gold">
                  <span className="text-sm">✦</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t.visionTitle}
              </h3>

              {/* Decorative line */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-luxury-gold to-accent mb-6" />

              {/* Content */}
              <p className="text-lg lg:text-xl leading-relaxed text-white/90">
                {t.vision}
              </p>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative animate-fade-in-up animation-delay-200">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-luxury-gold to-accent rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative h-full bg-gradient-to-br from-luxury-gold via-accent to-accent-dark rounded-2xl shadow-2xl p-8 lg:p-10 text-primary-dark overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-gold-lg">
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <polygon points="50,25 80,80 20,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <polygon points="50,40 70,70 30,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Icon */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary-dark/10 backdrop-blur-sm flex items-center justify-center border border-primary-dark/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-glow-green text-white">
                  <span className="text-sm">✦</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t.missionTitle}
              </h3>

              {/* Decorative line */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-primary-dark mb-6" />

              {/* Content */}
              <p className="text-lg lg:text-xl leading-relaxed text-primary-dark/90">
                {t.mission}
              </p>

              {/* Corner decoration */}
              <div className="absolute bottom-4 right-4 opacity-20">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-400">
          <div className="inline-block glass-card px-8 py-6 max-w-2xl">
            <div className="flex justify-center mb-4">
              <span className="text-4xl">💚</span>
            </div>
            <p className="text-lg text-gray-700 italic">
              {language === 'ar'
                ? '"معاً نبني مجتمعاً أفضل، ونزرع بذور الأمل في كل مكان"'
                : '"Together we build a better community, and plant seeds of hope everywhere"'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
