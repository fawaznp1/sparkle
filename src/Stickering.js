import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const Stickering = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="stickering" className={`relative min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#be185d] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-full px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-black mb-6 ${isDark ? 'text-white' : 'text-[#be185d]'}`}>
            {t.stickeringTitle}
          </h2>
          <div className="w-32 h-1 bg-[#be185d] mx-auto rounded-full mb-12"></div>
        </div>

        {/* Row 1 - Shop Images with Chips */}
        <div className="grid grid-cols-2 gap-4 mb-16 max-w-7xl mx-auto">
          {[
            { img: "https://i.pinimg.com/1200x/53/87/53/53875390883d03c74a12ba02617d6547.jpg", label: t.printedStickers },
            { img: "https://static.nike.com/a/images/f_auto/ffcd8bd7-d749-48a5-8aa9-9cc78d3561f2/image.jpeg", label: t.plotterCutStickers }
          ].map((item, i) => (
            <div key={i} className="relative overflow-hidden h-64 md:h-96 group">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-[#be185d] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Middle - Text Content */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray'}  p-8 md:p-12`}>
            <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>{t.bestSalesman}</h3>
            <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-lg leading-relaxed text-center`}>
              {t.stickeringDesc1}
            </p>
            
            <div className={`transition-all duration-500 ${showDetails ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-lg leading-relaxed text-center`}>
                {t.stickeringDesc2}
              </p>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className={`${isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-[#be185d]'} font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                {showDetails ? t.showLess : t.readMore}
                <svg className={`w-4 h-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Row 2 - Shop Images */}
        <div className="grid grid-cols-2 gap-4 mb-16 max-w-7xl mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800", label: t.uvStickers },
            { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", label: t.laminatedStickers }
          ].map((item, i) => (
            <div key={i} className="relative overflow-hidden h-64 md:h-96 group">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-[#be185d] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#be185d] hover:bg-[#9d1449] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2">
            {t.getStickersNow}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stickering;
