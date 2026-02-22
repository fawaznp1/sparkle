import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const PremiumDisplay = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} id="premium" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.premiumTitle}
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-2xl mx-auto`}>
            {t.premiumDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group overflow-hidden">
            <img 
              src="https://s.alicdn.com/@sc04/kf/H4ac17a0d45f2414bbad49d1afb438fdaQ/Customizable-Supermarket-Retail-Display-Stand-PVC-Foam-Board-Display-Rack-PVC-Foam-Display-Stand.jpg_300x300.jpg" 
              alt="Premium Display 1" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://s.alicdn.com/@sc04/kf/He172e87d3b1b4945bdbbd0de98672ee51/Custom-Portable-Foldable-Cardboard-Display-Stand-Supermarket-Merchandise-Products-Paper-Display-Rack-Beverage-Chocolate-Store.jpg_300x300.jpg" 
              alt="Premium Display 2" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://s.alicdn.com/@sc04/kf/H8f55b69053624f269463f5d823e828775/Custom-Acrylic-Phone-Accessary-Showcase-Back-Led-Light-PMMA-Charger-Display-Stand-4-tier-Cables-Display-Rack-with-Sticker.jpg_300x300.jpg" 
              alt="Premium Display 3" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumDisplay;
