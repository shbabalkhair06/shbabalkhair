import { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '../App';
import { content } from '../data/content';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const t = content[language];

  // Handle scroll to update active section and navbar style
  const handleScroll = () => {
    const sections = ['home', 'about', 'vision', 'initiatives', 'join', 'gallery', 'contact', 'partners'];
    const scrollPosition = window.scrollY + 100;

    // Update scrolled state for navbar styling
    setScrolled(window.scrollY > 50);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
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

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'vision', label: t.nav.vision },
    { id: 'initiatives', label: t.nav.initiatives },
    { id: 'join', label: t.nav.join },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Gold accent line at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-luxury-gold to-primary z-[60] shadow-glow-gold" />

      <nav className={`fixed top-1 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg'
        : 'bg-white/80 backdrop-blur-md'
        }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer group"
            >
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:from-primary group-hover:to-luxury-gold transition-all duration-500">
                {language === 'ar' ? 'فريق شباب الخير' : 'Shabab Al-Khair'}
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`nav-link ${activeSection === link.id ? 'active text-primary' : 'text-gray-700'}`}
                >
                  {link.label}
                </a>
              ))}

              {/* Separator */}
              <div className="w-px h-6 bg-gray-200 mx-2" />

              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center group"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col items-center justify-center w-6 h-6">
                  <span className={`block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-primary rounded-full my-1 transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-primary rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="border-t border-gray-100 py-4 px-4 bg-gradient-to-b from-white to-gray-50/50">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 animate-fade-in-up ${activeSection === link.id
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-50" />
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick('join')}
                  className="w-full btn-primary text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>🤝</span>
                    {t.nav.join}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;