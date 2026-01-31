import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.branding, href: '#branding' },
    { name: t.stickering, href: '#stickering' },
    { name: t.signs, href: '#signs' },
    { name: t.contact, href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-white/10' : 'border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#be185d] rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg sm:text-xl">S</span>
            </div>
            <span className={`text-xl sm:text-2xl font-black ${isDark ? 'text-white' : 'text-[#be185d]'} transition-colors duration-300`}>
              SPARKLE
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-semibold transition-colors relative group`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#be185d] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300`}
            >
              <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-4 py-2 ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300`}
            >
              <span className="text-lg">{isDark ? '☀️' : '🌙'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <nav className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-semibold transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#be185d] hover:bg-[#9d1449] text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
              {t.getQuote}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
