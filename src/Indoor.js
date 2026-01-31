import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const Indoor = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();

  const signTypes = [
    { name: t.largeFormatSigns, images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800", "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800"] },
    { name: t.backlitSigns, images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800", "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"] },
    { name: t.acrylicSigns, images: ["https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"] },
    { name: t.threeDSigns, images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"] },
    { name: t.embossedSigns, images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800", "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800"] }
  ];

  return (
    <section ref={ref} id="indoor" className={`relative min-h-screen ${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#be185d] rounded-full blur-3xl"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-[#be185d]'}`}>
            {t.indoorTitle}
          </h2>
          <div className="w-32 h-1 bg-[#be185d] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-2xl p-8`}>
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>{t.ourSignSolutions}</h3>
                <div className="space-y-3">
                  {signTypes.map((type, i) => (
                    <div key={i} className={`${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-100 hover:bg-gray-200 border-gray-200'} border rounded-xl p-4 transition-all duration-300 hover:translate-x-2`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#be185d] rounded-full"></div>
                          <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>{type.name}</span>
                        </div>
                        <button
                          onClick={() => { setSelectedType(type); setModalOpen(true); }}
                          className="text-[#be185d] hover:text-[#9d1449] text-sm font-medium underline transition-colors"
                        >
                          {t.view}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-2xl p-8`}>
                <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-lg leading-relaxed`}>
                  {t.indoorDesc1}{' '}
                  {!showDetails && (
                    <button
                      onClick={() => setShowDetails(true)}
                      className={`${isDark ? 'text-[#be185d] hover:text-[#9d1449]' : 'text-[#be185d] hover:text-[#9d1449]'} font-medium underline transition-colors`}
                    >
                      {t.seeMore}
                    </button>
                  )}
                </p>
                
                <div className={`transition-all duration-500 ${showDetails ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} text-lg leading-relaxed`}>
                    {t.indoorDesc2}{' '}
                    <button
                      onClick={() => setShowDetails(false)}
                      className={`${isDark ? 'text-[#be185d] hover:text-[#9d1449]' : 'text-[#be185d] hover:text-[#9d1449]'} font-medium underline transition-colors`}
                    >
                      {t.showLess}
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Collage Gallery */}
            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-2xl p-6`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>{t.ourWork}</h3>
              
              {/* Modern Masonry Grid Layout */}
              <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[600px]">
                {/* Image 1 - Large Top Left */}
                <div className="col-span-4 row-span-3 group">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" alt="Backlit Signs" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white font-bold text-base">Backlit Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-[#be185d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 2 - Tall Right */}
                <div className="col-span-2 row-span-4 group">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400" alt="3D Signs" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white font-bold text-sm">3D Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-[#be185d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 3 - Wide Bottom Left */}
                <div className="col-span-3 row-span-3 group">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <img src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400" alt="Acrylic Signs" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white font-bold text-sm">Acrylic Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-[#be185d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 4 - Small Square */}
                <div className="col-span-1 row-span-3 group">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400" alt="Large Format" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-white font-bold text-xs">Vinyl</span>
                    </div>
                    <div className="absolute inset-0 bg-[#be185d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 5 - Small Square Bottom Right */}
                <div className="col-span-2 row-span-2 group">
                  <div className="relative w-full h-full bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <img src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400" alt="Stickers" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="text-white font-bold text-xs">Stickers</span>
                    </div>
                    <div className="absolute inset-0 bg-[#be185d] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-6">
                <button className="bg-[#be185d] hover:bg-[#9d1449] text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2">
                  {t.getSignsNow}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setModalOpen(false)}>
          <div className={`relative max-w-4xl w-full ${isDark ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>{selectedType?.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedType?.images.map((img, i) => (
                <img key={i} src={img} alt={selectedType.name} className="w-full h-64 object-cover rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Indoor;
