import { useTheme } from './ThemeContext';

const Services = () => {
  const { isDark } = useTheme();
  const services = [
    {
      title: "INDOOR & OUTDOOR PRINTING",
      icon: "🖨️",
      items: [
        "Interior Wall Graphics",
        "Acrylic & Forex Signs", 
        "Back-Lit Signs",
        "Sandwich Boards",
        "Roll Ups & Pop ups",
        "Exhibition Booth",
        "Display Stand",
        "Premium Podium",
        "Gondolas"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-400"
    },
    {
      title: "OFFSET PRINTING",
      icon: "📄",
      items: [
        "Brochure & Booklets",
        "Catalogue & Folder",
        "Flyers, Leaflets & Posters",
        "Packaging Boxes",
        "Shopper Bags",
        "Business Stationary",
        "Calendars & Desk Planners",
        "Menus",
        "Labels/Stickers",
        "Tent Cards & Tags"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-400 to-blue-400"
    },
    {
      title: "OTHER SERVICES",
      icon: "⚡",
      items: [
        "Branding & Designing",
        "Stickering Service",
        "3D Signs",
        "Indoor & Outdoor Signs",
        "Safety Signs",
        "Shields & IDs",
        "Promo Gifts",
        "Fleet Graphics",
        "Premium Notes & Diaries",
        "Lanyards & ID Cards"
      ],
      gradient: "from-pink-500/20 to-purple-500/20",
      borderGradient: "from-pink-400 to-purple-400"
    }
  ];

  return (
    <section className={`relative min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-900' : 'bg-gradient-to-br from-gray-50 to-white'} py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${isDark ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600'} bg-clip-text text-transparent`}>
            OUR SERVICES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
          <p className={`text-xl ${isDark ? 'text-white/80' : 'text-gray-700'} max-w-3xl mx-auto`}>
            Comprehensive printing and design solutions tailored for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-2xl ${isDark ? `bg-gradient-to-br ${service.gradient}` : 'bg-white'} ${isDark ? 'border-white/20' : 'border-gray-200'} border rounded-[20px] p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{service.title}</h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${service.borderGradient} mx-auto rounded-full`}></div>
              </div>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`group/item relative backdrop-blur-lg ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/30' : 'bg-gray-50 hover:bg-gray-100 border-gray-200 hover:border-gray-300'} border rounded-xl p-2 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.borderGradient} rounded-full animate-pulse`}></div>
                      <span className={`${isDark ? 'text-white' : 'text-gray-800'} font-semibold text-base`}>
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className={`backdrop-blur-2xl ${isDark ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-white'} ${isDark ? 'border-white/20' : 'border-gray-200'} border rounded-[20px] p-12 max-w-4xl mx-auto`}>
            <h3 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
              Ready to bring your vision to life?
            </h3>
            <p className={`text-xl ${isDark ? 'text-white/80' : 'text-gray-700'} mb-8`}>
              Let's create something extraordinary together
            </p>
            <button className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-[15px] transition-all duration-500 transform hover:scale-110 shadow-2xl">
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
