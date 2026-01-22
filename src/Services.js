
const Services = () => {
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive printing and design solutions tailored for your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-2xl bg-gradient-to-br ${service.gradient} border border-white/20 rounded-[20px] p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${service.borderGradient} mx-auto rounded-full`}></div>
              </div>

              {/* Service Items */}
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group/item relative backdrop-blur-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl p-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.borderGradient} rounded-full group-hover/item:scale-125 group-hover/item:shadow-lg transition-all duration-300 animate-pulse`}></div>
                      <span className="text-white font-semibold text-base group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:${service.borderGradient} group-hover/item:bg-clip-text transition-all duration-300">
                        {item}
                      </span>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover/item:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-10 rounded-[20px] transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[20px] p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to bring your vision to life?
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Let's create something extraordinary together
            </p>
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-[15px] transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/40">
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