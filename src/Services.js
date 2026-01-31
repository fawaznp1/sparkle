import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const Services = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  const services = [
    {
      title: "INDOOR & OUTDOOR PRINTING",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      ),
      items: [
        { name: t.interiorWallGraphics, img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100" },
        { name: t.acrylicForexSigns, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100" },
        { name: t.backlitSigns, img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100" },
        { name: t.sandwichBoards, img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100" },
        { name: t.rollUpsPopups, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100" },
        { name: t.exhibitionBooth, img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=100" },
        { name: t.displayStand, img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=100" },
        { name: t.premiumPodium, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=100" },
        { name: t.gondolas, img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=100" }
      ],
      color: "#be185d"
    },
    {
      title: "OFFSET PRINTING",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      items: [
        { name: t.brochureBooklets, img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=100" },
        { name: t.catalogueFolder, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=100" },
        { name: t.flyersLeafletsPosters, img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100" },
        { name: t.packagingBoxes, img: "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?w=100" },
        { name: t.shopperBags, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=100" },
        { name: t.businessStationary, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=100" },
        { name: t.calendarsDeskPlanners, img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=100" },
        { name: t.menus, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100" },
        { name: t.labelsStickers, img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100" },
        { name: t.tentCardsTags, img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=100" }
      ],
      color: "#3b82f6"
    },
    {
      title: "OTHER SERVICES",
      icon: (
        <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      items: [
        { name: t.brandingDesigning, img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100" },
        { name: t.stickeringService, img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100" },
        { name: t.threeDSignsService, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100" },
        { name: t.indoorOutdoorSigns, img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=100" },
        { name: t.safetySigns, img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100" },
        { name: t.shieldsIDs, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=100" },
        { name: t.promoGifts, img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=100" },
        { name: t.fleetGraphics, img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=100" },
        { name: t.premiumNotesDiaries, img: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=100" },
        { name: t.lanyardsIDCards, img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=100" }
      ],
      color: "#be185d"
    }
  ];

  return (
    <section ref={ref} className={`relative min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-12 sm:py-16 md:py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#be185d]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-[#3b82f6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-[#be185d]'}`}>
            {t.servicesTitle}
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-[#be185d] mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-white/80' : 'text-gray-700'} max-w-3xl mx-auto px-4`}>
            {t.servicesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-2xl ${isDark ? 'bg-white/5' : 'bg-white'} ${isDark ? 'border-white/20' : 'border-gray-200'} border rounded-[20px] p-6 sm:p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
              style={{ borderTopColor: service.color, borderTopWidth: '3px' }}
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className="mb-3 sm:mb-4 flex justify-center" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>{service.title}</h3>
                <div className="w-12 sm:w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: service.color }}></div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`group/item relative backdrop-blur-lg ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30' : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300'} border rounded-xl p-2 sm:p-3 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover flex-shrink-0"
                      />
                      <span className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-sm sm:text-base`}>
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className={`backdrop-blur-2xl ${isDark ? 'bg-white/5' : 'bg-white'} ${isDark ? 'border-white/20' : 'border-gray-200'} border rounded-[20px] p-8 sm:p-12 max-w-4xl mx-auto`}>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4 sm:mb-6`}>
              Ready to bring your vision to life?
            </h3>
            <p className={`text-base sm:text-lg md:text-xl ${isDark ? 'text-white/80' : 'text-gray-700'} mb-6 sm:mb-8`}>
              Let's create something extraordinary together
            </p>
            <button className="group bg-[#be185d] hover:bg-[#9d1449] text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-[15px] transition-all duration-500 transform hover:scale-110 shadow-2xl text-sm sm:text-base">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
