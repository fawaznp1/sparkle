import { useTheme } from './ThemeContext';

const Branding = () => {
  const { isDark } = useTheme();
  
  return (
    <section className={`relative ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-900' : 'bg-gradient-to-br from-gray-50 to-white'} overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-40 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12">
              <div className="space-y-6">
                <div className={`inline-flex items-center gap-3 px-5 py-2 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-200 border-gray-300'} border rounded-full backdrop-blur-sm`}>
                  <div className={`w-2 h-2 ${isDark ? 'bg-white' : 'bg-purple-600'} rounded-full`}></div>
                  <span className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm tracking-wide uppercase`}>Brand Identity</span>
                </div>
                
                <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-black ${isDark ? 'text-white' : 'text-gray-900'} leading-[0.9] tracking-tight`}>
                  CORPORATE<br/>
                  <span className={isDark ? 'text-white/40' : 'text-gray-400'}>BRANDING</span>
                </h1>
                
                <p className={`text-xl ${isDark ? 'text-white/60' : 'text-gray-600'} leading-relaxed max-w-xl`}>
                  Crafting distinctive brand identities that resonate with your audience and elevate your business presence in the market.
                </p>
              </div>

              <div className={`grid grid-cols-3 gap-8 pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-300'}`}>
                <div>
                  <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>500+</div>
                  <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>Projects</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>50+</div>
                  <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>Clients</div>
                </div>
                <div>
                  <div className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>5+</div>
                  <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>Years</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className={`px-8 py-4 ${isDark ? 'bg-white text-slate-900' : 'bg-purple-600 text-white'} font-semibold rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-xl`}>
                  Start Project
                </button>
                <button className={`px-8 py-4 ${isDark ? 'bg-white/5 text-white border-white/10' : 'bg-gray-200 text-gray-900 border-gray-300'} font-semibold rounded-full border hover:opacity-80 transition-all duration-300`}>
                  View Work
                </button>
              </div>
            </div>

            <div className="relative">
              <div className={`backdrop-blur-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-3xl p-10 lg:p-12 shadow-2xl`}>
                
                <div className={`w-16 h-16 ${isDark ? 'bg-white' : 'bg-purple-600'} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <svg className={`w-8 h-8 ${isDark ? 'text-slate-900' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className="mb-10">
                  <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>SPARKLE</h2>
                  <p className={`text-lg ${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                    Comprehensive brand solutions for businesses of all sizes
                  </p>
                </div>

                <div className="space-y-4 mb-10">
                  {[
                    { icon: "🏢", title: "Large Corporations", desc: "Enterprise-level branding" },
                    { icon: "🚀", title: "Growing Businesses", desc: "Scalable brand systems" },
                    { icon: "⭐", title: "Established Brands", desc: "Rebranding & evolution" },
                    { icon: "💡", title: "New Startups", desc: "Brand from scratch" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center gap-4 p-4 ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-all duration-300 group`}>
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <div>
                        <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>{item.title}</h4>
                        <p className={`${isDark ? 'text-white/50' : 'text-gray-500'} text-xs`}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`text-center p-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} rounded-2xl border`}>
                  <div className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold mb-1`}>Global Reach</div>
                  <div className={`${isDark ? 'text-white/50' : 'text-gray-500'} text-sm`}>Regional • National • International</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`relative z-10 py-32 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className={`text-5xl lg:text-6xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Our Process</h2>
            <p className={`text-xl ${isDark ? 'text-white/50' : 'text-gray-600'}`}>From concept to completion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understanding your brand vision, market position, and business objectives" },
              { num: "02", title: "Strategy", desc: "Developing comprehensive brand strategy and positioning framework" },
              { num: "03", title: "Design", desc: "Creating distinctive visual identity and complete brand asset system" },
              { num: "04", title: "Launch", desc: "Implementing and delivering your complete brand system with support" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className={`${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-50 border-gray-200'} border rounded-2xl p-8 transition-all duration-500 hover:scale-105 h-full`}>
                  <div className={`text-6xl font-black ${isDark ? 'text-white/20 group-hover:text-white/30' : 'text-gray-200 group-hover:text-gray-300'} mb-6 transition-colors duration-300`}>
                    {item.num}
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{item.title}</h3>
                  <p className={`${isDark ? 'text-white/50' : 'text-gray-600'} leading-relaxed`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`relative z-10 py-32 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'}`}>
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-3xl p-12 lg:p-16 backdrop-blur-xl`}>
            <div className="space-y-10 text-lg lg:text-xl leading-relaxed">
              <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                Our team assists <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold`}>corporate identity design</span> issues by understanding the importance of the right brand imaging and by understanding the complex world of today's business.
              </p>
              
              <div className={`relative pl-8 ${isDark ? 'border-l-2 border-white/20' : 'border-l-2 border-gray-300'}`}>
                <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                  Listening to the needs of our customers, giving them and their projects maximum attention including a <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold`}>well-defined brand strategy</span> and creativity at the same time, form the right combination for brand success.
                </p>
              </div>
              
              <p className={isDark ? 'text-white/80' : 'text-gray-700'}>
                By following each project with disciplines like <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold`}>flexibility, adaptability and rapidity</span> - from the initial sketches to the hand-over to the client we ensure design consistency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
