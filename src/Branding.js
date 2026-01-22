import React from 'react';

const Branding = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-slate-900 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/70 text-sm tracking-wide uppercase">Brand Identity</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                  CORPORATE<br/>
                  <span className="text-white/40">BRANDING</span>
                </h1>
                
                <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                  Crafting distinctive brand identities that resonate with your audience and elevate your business presence in the market.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-4xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/50 uppercase tracking-wide">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-white/50 uppercase tracking-wide">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-white/50 uppercase tracking-wide">Years</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl">
                  Start Project
                </button>
                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
                  View Work
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-12 shadow-2xl">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-white mb-3">SPARKLE</h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Comprehensive brand solutions for businesses of all sizes
                  </p>
                </div>

                {/* Services */}
                <div className="space-y-4 mb-10">
                  {[
                    { icon: "🏢", title: "Large Corporations", desc: "Enterprise-level branding" },
                    { icon: "🚀", title: "Growing Businesses", desc: "Scalable brand systems" },
                    { icon: "⭐", title: "Established Brands", desc: "Rebranding & evolution" },
                    { icon: "💡", title: "New Startups", desc: "Brand from scratch" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group">
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                        <p className="text-white/50 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Global */}
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-white font-semibold mb-1">Global Reach</div>
                  <div className="text-white/50 text-sm">Regional • National • International</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="relative z-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">Our Process</h2>
            <p className="text-xl text-white/50">From concept to completion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your brand vision, market position, and business objectives" },
              { num: "02", title: "Strategy", desc: "Developing comprehensive brand strategy and positioning framework" },
              { num: "03", title: "Design", desc: "Creating distinctive visual identity and complete brand asset system" },
              { num: "04", title: "Launch", desc: "Implementing and delivering your complete brand system with support" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:scale-105 h-full">
                  <div className="text-6xl font-black text-white/20 mb-6 group-hover:text-white/30 transition-colors duration-300">
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 lg:p-16 backdrop-blur-xl">
            <div className="space-y-10 text-lg lg:text-xl leading-relaxed">
              <p className="text-white/80">
                Our team assists <span className="text-white font-bold">corporate identity design</span> issues by understanding the importance of the right brand imaging and by understanding the complex world of today's business.
              </p>
              
              <div className="relative pl-8 border-l-2 border-white/20">
                <p className="text-white/80">
                  Listening to the needs of our customers, giving them and their projects maximum attention including a <span className="text-white font-bold">well-defined brand strategy</span> and creativity at the same time, form the right combination for brand success.
                </p>
              </div>
              
              <p className="text-white/80">
                By following each project with disciplines like <span className="text-white font-bold">flexibility, adaptability and rapidity</span> - from the initial sketches to the hand-over to the client we ensure design consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;