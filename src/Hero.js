import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const Hero = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  
  const images = [
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    'https://images.unsplash.com/photo-1557672199-6ba8f650e143',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0'
  ];
  
  return (
    <section className={`min-h-screen mt-8 relative overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-gray-50'} flex items-center justify-center px-4 transition-colors duration-300`}>
      {/* Scrolling Image Background */}
      <div className="absolute inset-0 rotate-45 scale-150 opacity-50">
        {[0, 1, 2, 3,4,5].map((row) => (
          <div key={row} className="flex gap-4 mb-4" style={{ animation: `scroll${row % 2 === 0 ? 'Left' : 'Right'} 40s linear infinite` }}>
            {[...images, ...images].map((img, i) => (
              <img key={i} src={`${img}?w=200&h=200&fit=crop`} alt="" className="w-44 h-44 object-cover rounded-lg flex-shrink-0" />
            ))}
          </div>
        ))}
      </div>
      
      {/* Dark Overlay for Better Readability */}
      <div className={`absolute inset-0 ${isDark ? 'bg-slate-900/60' : 'bg-white/60'}`}></div>
      
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-[#be185d]/20 backdrop-blur-sm rounded-full border border-[#be185d]/30">
              <span className={`text-sm font-semibold ${isDark ? 'text-[#be185d]' : 'text-[#be185d]'}`}>{t.creativeAgency}</span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t.transformIdeas}
              <span className="block text-[#be185d]">{t.visualReality}</span>
            </h1>
            
            <p className={`text-base sm:text-lg lg:text-xl mb-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.innovativeCompany}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-[#be185d] hover:bg-[#9f1550] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#be185d]/50">
                {t.getStarted} →
              </button>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-8">
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>500+</div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.projectsDone}</div>
              </div>
              <div className={`w-px h-12 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>50+</div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.happyClients}</div>
              </div>
              <div className={`w-px h-12 ${isDark ? 'bg-white/20' : 'bg-gray-300'}`}></div>
              <div>
                <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>5+</div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.yearsExp}</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-7 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[500px]">
            <div className={`backdrop-blur-xl ${isDark ? 'bg-white/5' : 'bg-white/80'} border ${isDark ? 'border-white/10' : 'border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-xl col-span-2 row-span-4`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#be185d] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.brandDesign}</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.brandDesignDesc}</p>
            </div>
            
            <div className={`backdrop-blur-xl ${isDark ? 'bg-white/5' : 'bg-white/80'} border ${isDark ? 'border-white/10' : 'border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-xl col-span-2 row-span-3 col-start-3`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#be185d] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.printMedia}</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.printMediaDesc}</p>
            </div>
            
            <div className={`backdrop-blur-xl ${isDark ? 'bg-white/5' : 'bg-white/80'} border ${isDark ? 'border-white/10' : 'border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-xl col-span-2 row-span-4 col-start-3 row-start-4`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#be185d] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.advertising}</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.advertisingDesc}</p>
            </div>
            
            <div className={`backdrop-blur-xl ${isDark ? 'bg-white/5' : 'bg-white/80'} border ${isDark ? 'border-white/10' : 'border-gray-200'} rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 shadow-xl col-span-2 row-span-3 row-start-5`}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#be185d] rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.consulting}</h3>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{t.consultingDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;