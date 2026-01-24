import { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import SectionTitle from '../components/SectionTitle';

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const t = content[language].gallery;
  const [selectedImage, setSelectedImage] = useState(null);

  // All gallery images - unique only
  const images = [
    { src: '/11.jpg', title: language === 'ar' ? 'نشاط تطوعي' : 'Volunteer Activity' },
    { src: '/22.jpg', title: language === 'ar' ? 'فريق العمل' : 'Team Work' },
    { src: '/33.jpg', title: language === 'ar' ? 'مبادرة خيرية' : 'Charity Initiative' },
    { src: '/44.jpg', title: language === 'ar' ? 'عمل تطوعي' : 'Volunteer Work' },
    { src: '/55.jpg', title: language === 'ar' ? 'نشاط مجتمعي' : 'Community Activity' },
    { src: '/66.jpg', title: language === 'ar' ? 'زيارة تطوعية' : 'Volunteer Visit' },
    { src: '/م1.jpg', title: language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team' },
    { src: '/م3.jpg', title: language === 'ar' ? 'فريقنا التطوعي' : 'Our Volunteer Team' },
  ];

  const closeLightbox = () => setSelectedImage(null);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-luxury-gold/5 blur-3xl animate-float-slow" />
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          title={t.title}
          subtitle={language === 'ar' ? 'لحظات من رحلتنا في العطاء' : 'Moments from our journey of giving'}
        />

        {/* Gallery Grid - Uniform sizing for harmony */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x400?text=Image';
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Content on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* Zoom icon */}
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-white text-center font-bold text-sm md:text-base drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  {image.title}
                </h3>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-luxury-gold/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-glow-gold">
                <span className="text-xs">✦</span>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-block glass-card px-8 py-6">
            <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
              <span className="text-2xl">📸</span>
              {language === 'ar' ? 'تابع المزيد من صورنا' : 'See more of our photos'}
            </p>
            <a
              href="https://www.instagram.com/shabab_alkhair06/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {language === 'ar' ? 'تابعنا على انستغرام' : 'Follow us on Instagram'}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full animate-scale-in">
            {/* Close button */}
            <button
              className="absolute -top-14 right-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 border border-white/20"
              onClick={closeLightbox}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-luxury-gold/30">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <span className="text-lg">💚</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair Team'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation hint */}
            <p className="text-center text-white/40 text-sm mt-4">
              {language === 'ar' ? 'اضغط في أي مكان للإغلاق' : 'Click anywhere to close'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;