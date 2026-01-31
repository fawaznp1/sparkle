import { useTheme } from './ThemeContext';
import { useScrollAnimation } from './useScrollAnimation';

const Clients = () => {
  const { isDark } = useTheme();
  const [ref, isVisible] = useScrollAnimation();

  const logos = [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
    'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=200',
    'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=200',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200',
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200',
    'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=200',
    'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200',
    'https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=200',
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200',
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
    'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=200'
  ];

  return (
    <section ref={ref} className={`relative ${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-20 overflow-hidden transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto px-4 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className={`text-3xl sm:text-4xl font-black text-center mb-4 ${isDark ? 'text-white' : 'text-[#ffa500]'}`}>
          Trusted By Leading Brands
        </h2>
        <div className="w-32 h-1 bg-[#ffa500] mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Row 1 - Scroll Left */}
        <div className="flex gap-8 mb-8 overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className={`flex-shrink-0 w-40 h-24 ${isDark ? 'bg-white/10' : 'bg-white'} rounded-xl flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300`}>
                <img src={logo} alt="Client logo" className="max-w-full max-h-full object-contain  hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex gap-8 overflow-hidden">
          <div className="flex gap-8 animate-scroll-right">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className={`flex-shrink-0 w-40 h-24 ${isDark ? 'bg-white/10' : 'bg-white'} rounded-xl flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300`}>
                <img src={logo} alt="Client logo" className="max-w-full max-h-full object-contain  hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Clients;
