import { useState } from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Branding', href: '#branding' },
    { name: 'Stickering', href: '#stickering' },
    { name: 'Signs', href: '#signs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${isDark ? 'bg-slate-900/80' : 'bg-white/80'} border-b ${isDark ? 'border-white/10' : 'border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className={`text-2xl font-black bg-gradient-to-r ${isDark ? 'from-white to-purple-200' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent transition-colors duration-300`}>
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
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 mr-4`}
            >
              <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105">
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-900'} transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
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
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">
              Get Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
