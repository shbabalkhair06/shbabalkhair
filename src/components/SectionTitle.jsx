const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      {/* Decorative element */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-luxury-gold" />
        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-luxury-gold to-accent animate-pulse-glow" />
        <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-luxury-gold" />
      </div>

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Bottom decorative line */}
      <div className="flex items-center justify-center mt-6">
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-primary via-luxury-gold to-primary" />
      </div>
    </div>
  );
};

export default SectionTitle;
