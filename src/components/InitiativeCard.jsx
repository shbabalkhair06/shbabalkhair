const InitiativeCard = ({ image, title, description, icon, color, featured = false }) => {
  return (
    <div className={`initiative-card ${featured ? 'md:flex md:h-80' : 'h-72'}`}>
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-64 md:h-full' : 'h-full'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/600x400?text=Image';
          }}
        />

        {/* Gradient overlay */}
        <div className={`initiative-card-overlay ${featured ? 'md:bg-gradient-to-r' : ''}`} />

        {/* Icon badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color || 'from-primary to-primary-dark'} flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
            {icon || '🌟'}
          </div>
        </div>
      </div>

      {/* Content - for featured cards, this becomes a side panel */}
      <div className={`initiative-card-content ${featured ? 'md:relative md:w-1/2 md:bg-gradient-to-br md:from-primary-dark md:to-primary md:translate-y-0' : ''}`}>
        {/* Decorative line */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${color || 'from-luxury-gold to-accent'}`} />
          <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
        </div>

        {/* Title */}
        <h3 className={`font-bold mb-2 drop-shadow-lg ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-white/90 leading-relaxed ${featured ? 'text-base md:text-lg' : 'text-sm line-clamp-2 group-hover:line-clamp-none'}`}>
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">
            {featured ? 'اكتشف المزيد' : 'المزيد'}
          </span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all duration-500 rounded-tl-2xl" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all duration-500 rounded-br-2xl" />
    </div>
  );
};

export default InitiativeCard;