import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const PromoGifts = () => {
  const { isDark } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const gifts = [
    { name: t.promotionalMerchandise, image: 'https://cdn11.bigcommerce.com/s-v6gbf2om44/product_images/uploaded_images/keepsake-creative-promo.jpg' },
    { name: t.corporateGifts, image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/543226873/RF/LT/CW/250219629/dairy-pen-flask-corporate-gift-set-1000x1000.jpeg' },
    { name: t.promotionalCalendars, image: 'https://www.microprinting.ca/storage/2019/04/6-Expert-Tips-to-Design-an-Inspiring-Promotional-Calendar.jpg' },
    { name: t.corporateDiaries, image: 'https://m.media-amazon.com/images/I/61ajJgVBn6L._SX466_.jpg' }
  ];

  return (
    <section id="promo" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.promoTitle}
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {gifts.map((gift, index) => (
              <div key={index} className="relative group">
                <div className={` p-6 flex items-center justify-center h-64 hover:scale-105 transition-transform duration-300`}>
                  <img 
                    src={gift.image} 
                    alt={gift.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-[#be185d] text-white text-xs px-3 py-1 rounded-full">
                    {gift.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
              {expanded ? t.promoDesc : t.promoDesc.slice(0, 200) + '...'}
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-[#be185d] hover:text-[#9d1449] ml-2 font-medium"
              >
                {expanded ? t.showLess : t.readMore}
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoGifts;
