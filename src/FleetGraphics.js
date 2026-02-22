import { useTheme } from './ThemeContext';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const FleetGraphics = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  const vehicles = [
    { type: t.largeSizeVehicles, image: 'https://www.turbo-images.com/mod/file/ArticleFile/28dd2c7955ce926456240b2ff0100bde.jpg' },
    { type: t.mediumSizeVehicles, image: 'https://wrapguys.com/wp-content/uploads/2021/04/fleet-wraps.jpg' },
    { type: t.smallSizeVehicles, image: 'https://toowoombasignco.com.au/portfolio/VehicleBranding/Vehicle%20Signage%20&%20Wraps%20Toowoomba.webp' },
    { type: t.completeWrapping, image: 'https://cruxroadboardz.com/wp-content/uploads/fleet-graphic-slider4.webp' },
    { type: t.plotterCutStickering, image: 'https://orchiddigitals.com/wp-content/uploads/2013/06/print-and-shape-cut-vinyl-pasted-on-a-car-1024x512.jpg.webp' },
    { type: t.uvPrintedStickering, image: 'https://d6wz8uj70mtdq.cloudfront.net/beea2d25-1839-438f-a653-66edd08b8a85/image+library/unassigned/us291.png' },
    { type: t.laminatedStickering, image: 'https://tododesigns.com/wp-content/uploads/2021/12/van-panel-graphic-laminated-print-side.jpg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [vehicles.length]);

  return (
    <section ref={ref} id="fleet" className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-16 px-4 transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.fleetTitle}
          </h2>
          <div className="w-24 h-1 bg-[#ffa500] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-3xl mx-auto`}>
            {t.fleetDesc}
          </p>
        </div>

        <div className="">
          <div className="max-w-6xl mx-auto relative h-96 overflow-hidden">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'translate-x-0 opacity-100'
                    : index < currentIndex
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-md mx-auto sm:max-w-none">
            {vehicles.map((vehicle, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 w-[calc(50%-0.25rem)] sm:w-auto ${
                  index === currentIndex
                    ? 'bg-[#ffa500] text-white scale-105 shadow-lg'
                    : isDark
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {vehicle.type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetGraphics;
