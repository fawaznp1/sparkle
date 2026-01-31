import { useTheme } from './ThemeContext';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const FleetGraphics = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];
  
  const vehicles = [
    { type: t.largeSizeVehicles, image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop' },
    { type: t.mediumSizeVehicles, image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=500&fit=crop' },
    { type: t.smallSizeVehicles, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop' },
    { type: t.completeWrapping, image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=500&fit=crop' },
    { type: t.plotterCutStickering, image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop' },
    { type: t.uvPrintedStickering, image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=500&fit=crop' },
    { type: t.laminatedStickering, image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=500&fit=crop' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % vehicles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [vehicles.length]);

  return (
    <section id="fleet" className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.fleetTitle}
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
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

          <div className="mt-8 flex justify-center gap-1 overflow-x-auto pb-2 pt-2">
            {vehicles.map((vehicle, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#be185d] text-white scale-110'
                    : isDark
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
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
