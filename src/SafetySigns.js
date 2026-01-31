import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const SafetySigns = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  const signs = [
    { name: t.acrylicSafetySigns, image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&h=600&fit=crop' },
    { name: t.hangingSafetySigns, image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop' },
    { name: t.standingSafetySigns, image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=600&fit=crop' },
    { name: t.stickerSafetySigns, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=600&fit=crop' },
    { name: t.reflectiveSigns, image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=600&fit=crop' },
    { name: t.reflectiveStickers, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop' }
  ];

  return (
    <section ref={ref} id="safety" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.safetyTitle}
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-3xl mx-auto`}>
            {t.safetyDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {signs.map((sign, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img 
                src={sign.image} 
                alt={sign.name} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-[#ffa500] text-white text-xs px-3 py-1 rounded-full">
                  {sign.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySigns;
