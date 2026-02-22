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
    { name: t.acrylicSafetySigns, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/334393591/SO/CK/EE/131711696/71mdsql5g-l-sl1500-500x500.jpg' },
    { name: t.hangingSafetySigns, image: 'https://img.archiexpo.com/images_ae/photo-mg/51515-5690289.jpg' },
    { name: t.standingSafetySigns, image: 'https://www.caledoniasigns.co.uk/image/cache/catalog/58556-250x250.jpg' },
    { name: t.stickerSafetySigns, image: 'https://m.media-amazon.com/images/I/71dOmvsSQ8L._AC_UF1000,1000_QL80_.jpg' },
    { name: t.reflectiveSigns, image: 'https://m.media-amazon.com/images/I/71J9xlNMyhL._AC_UF350,350_QL80_.jpg' },
    { name: t.reflectiveStickers, image: 'https://5.imimg.com/data5/CN/BN/MY-58083722/reflective-sticker-500x500.jpg' }
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
