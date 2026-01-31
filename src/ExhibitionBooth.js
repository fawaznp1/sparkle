import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const ExhibitionBooth = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} id="exhibition" className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-16 px-4 transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.exhibitionTitle}
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-2xl mx-auto`}>
            {t.exhibitionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 1" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 2" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 3" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionBooth;
