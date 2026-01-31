import { useTheme } from './ThemeContext';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';


const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const Branding = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} id="branding" className={`relative ${isDark ? 'bg-slate-900' : 'bg-gray-50'} overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-40 w-96 h-96 bg-[#be185d] rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className={`relative z-10 min-h-screen flex items-center py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Heading with Background Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" 
                alt="Corporate Branding"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] mb-4">
                  {t.brandingTitle.split(' ')[0]}<br/>
                  <span className="text-[#be185d]">{t.brandingTitle.split(' ')[1]}</span>
                </h1>
                <div className="flex items-center gap-2 mt-6">
                  <div className="w-2 h-2 bg-[#be185d] rounded-full"></div>
                  <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Brand Identity</span>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
                  {t.brandingSubtitle}
                </h2>
                <div className={`space-y-4 text-base sm:text-lg ${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                  <p>{t.brandingDesc1}</p>
                  <p>{t.brandingDesc2}</p>
                  <p>{t.brandingDesc3}</p>
                </div>
              </div>

              <div className={`p-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} border rounded-2xl`}>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>{t.sparkleOffers}</h3>
                <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                  {t.sparkleOffersDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`relative py-20 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'} overflow-hidden`}>
        {/* Stats Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative text-center p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-[#be185d] mb-2">
                  <CountUp end={500} />
                </div>
                <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>{t.projects}</div>
              </div>
            </div>
            <div className="relative text-center p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-[#be185d] mb-2">
                  <CountUp end={50} />
                </div>
                <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>{t.clients}</div>
              </div>
            </div>
            <div className="relative text-center p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </div>
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-[#be185d] mb-2">
                  <CountUp end={5} />
                </div>
                <div className={`text-sm ${isDark ? 'text-white/50' : 'text-gray-500'} uppercase tracking-wide`}>{t.years}</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Services Grid */}
      <div className={`relative z-10 py-12 sm:py-16 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{t.whatWeOffer}</h2>
            <p className={`text-lg sm:text-xl ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{t.comprehensiveBrand}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.largeCorp, desc: t.largeCorpDesc },
              { title: t.growingBusiness, desc: t.growingBusinessDesc },
              { title: t.establishedBrands, desc: t.establishedBrandsDesc },
              { title: t.newStartups, desc: t.newStartupsDesc }
            ].map((item, index) => (
              <div key={index} className={`group relative ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:shadow-2xl border-gray-200'} border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2`}>
                <div className="absolute top-0 left-0 w-1 h-full bg-[#be185d] rounded-l-2xl transition-all duration-300"></div>
                <div className="w-14 h-14 bg-[#be185d]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#be185d] transition-colors duration-300">
                  <svg className="w-7 h-7 text-[#be185d] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-[#be185d] transition-colors duration-300`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className={`relative z-10 py-16 sm:py-20 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-black ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{t.ourProcess}</h2>
            <p className={`text-lg sm:text-xl ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{t.fromConcept}</p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#be185d]/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { num: "01", title: t.discovery, desc: t.discoveryDesc },
                { num: "02", title: t.strategy, desc: t.strategyDesc },
                { num: "03", title: t.design, desc: t.designDesc },
                { num: "04", title: t.launch, desc: t.launchDesc }
              ].map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-[#be185d] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl font-black text-white">{item.num}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:shadow-xl'} rounded-2xl p-6 md:p-8 transition-all duration-300 group`}>
                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 group-hover:text-[#be185d] transition-colors`}>{item.title}</h3>
                    <p className={`text-sm md:text-base ${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Branding;
