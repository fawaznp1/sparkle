import { useState } from 'react';
import { useTheme } from './ThemeContext';

const Indoor = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { isDark } = useTheme();

  const signTypes = [
    "Large Format Signs",
    "Backlit Signs",
    "Acrylic Signs",
    "3D Signs",
    "Embossed Signs"
  ];

  return (
    <section className={`relative min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-900' : 'bg-gradient-to-br from-gray-50 to-white'} py-20 px-4 overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-5xl md:text-6xl font-black mb-4 ${isDark ? 'bg-gradient-to-r from-white via-purple-200 to-pink-200' : 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600'} bg-clip-text text-transparent`}>
            INDOOR & OUTDOOR SIGNS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left: Content */}
            <div className="space-y-6">
              <div className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/40 border-white/20' : 'bg-white border-gray-200'} border rounded-[20px] p-8`}>
                <h3 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>Our Sign Solutions</h3>
                <div className="space-y-3">
                  {signTypes.map((type, i) => (
                    <div key={i} className={`group backdrop-blur-lg ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-purple-400/50' : 'bg-gray-100 hover:bg-gray-200 border-gray-200 hover:border-purple-400'} border rounded-xl p-4 transition-all duration-300 hover:translate-x-2`}>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold`}>{type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/40 border-white/20' : 'bg-white border-gray-200'} border rounded-[20px] p-8`}>
                <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                  Transform your space with our premium indoor and outdoor signage solutions. 
                  From eye-catching backlit displays to elegant acrylic signs, we deliver quality that stands out.
                </p>
                
                <div className={`transition-all duration-500 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className={`space-y-4 pt-4 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'}`}>
                    <p className={`${isDark ? 'text-white/90' : 'text-gray-700'} leading-relaxed`}>
                      Our signs are crafted with precision and designed to make a lasting impression. 
                      Whether you need bold 3D lettering or sophisticated embossed designs, we have the expertise to bring your vision to life.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="mt-4 group bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 text-sm"
                >
                  {showDetails ? 'Show Less' : 'More Details'}
                  <svg className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: Collage Gallery */}
            <div className={`backdrop-blur-2xl ${isDark ? 'bg-slate-800/40 border-white/20' : 'bg-white border-gray-200'} border rounded-[20px] p-6`}>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>Our Work</h3>
              
              {/* Collage Layout */}
              <div className="relative h-[600px]">
                {/* Image 1 - Top Left */}
                <div className="absolute top-0 left-0 w-[55%] h-[45%] group">
                  <div className="relative w-full h-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/40 text-6xl">🪧</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>Backlit Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 2 - Top Right */}
                <div className="absolute top-0 right-0 w-[42%] h-[52%] group">
                  <div className="relative w-full h-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/40 text-6xl">🪧</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>3D Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 3 - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-[48%] h-[48%] group">
                  <div className="relative w-full h-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/40 text-6xl">🪧</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>Acrylic Signs</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>

                {/* Image 4 - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-[49%] h-[43%] group">
                  <div className="relative w-full h-full backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-105 hover:z-10 transition-all duration-300 cursor-pointer shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/40 text-6xl">🪧</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-semibold text-sm`}>Large Format</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-6">
                <button className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center gap-2">
                  Get Your Signs Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indoor;
