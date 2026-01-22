import { useState } from 'react';

const Stickering = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            STICKERING SERVICE
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Hero Card */}
          <div className="backdrop-blur-2xl bg-slate-800/40 border border-white/20 rounded-[20px] p-8 md:p-12 mb-6">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-4xl font-bold text-white mb-4">As your best sales man...</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  Advertisers are beginning to understand the importance of stickers in the field of marketing. 
                  The cost is definitely cheaper when compared to other modes of advertisements and the target 
                  audience is unbeatable.
                </p>
                
                {/* Expandable Details */}
                <div className={`transition-all duration-500 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <p className="text-white/90 leading-relaxed">
                      The best part, you do not even have to open your mouth. What could get better than that? 
                      You can even use graphics on your stickers to increase the attention span of the target audience.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      So get your artistic sticker ready to make a lasting impression and make your product pop up 
                      in the minds of the people.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="group bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap text-sm"
              >
                {showDetails ? 'Show Less' : 'More Details'}
                <svg className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sticker Types - Horizontal Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {["Printed Stickers", "Plotter Cut Stickers", "UV Stickers", "Laminated Stickers"].map((type, i) => (
              <div key={i} className="group backdrop-blur-2xl bg-slate-800/40 border border-white/20 hover:border-purple-400/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold text-sm">{type}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
        
         {/* Advanced Image Gallery */}
         <div className="backdrop-blur-2xl bg-gradient-to-brs from-purple-500/10 to-pink-500/10 p-8">
           <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Work Gallery</h3>
          
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Featured - Spans 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 group relative backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-white/40 text-8xl">🏷️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white font-bold text-2xl">Featured Work</span>
                <p className="text-white/80 text-sm mt-1">Premium Sticker Design</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>

            {/* UV Stickers - Spans 2 columns horizontally */}
            <div className="col-span-2 group relative backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="aspect-[2/1] flex items-center justify-center">
                <div className="text-white/40 text-6xl">🏷️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-semibold">UV Stickers</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>

            {/* Regular Image */}
            <div className="group relative backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.05] transition-all duration-500 cursor-pointer">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-white/40 text-5xl">🏷️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white font-semibold text-sm">Printed</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>

            {/* Regular Image */}
            <div className="group relative backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-[1.05] transition-all duration-500 cursor-pointer">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-white/40 text-5xl">🏷️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-white font-semibold text-sm">Plotter Cut</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          </div>
        
           {/* CTA Button */}
           <div className="text-center mt-8">
             <button className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2">
               Get Your Stickers Now
               <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                 <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>
             </button>
           </div>
         </div>
       </div>
    </section>
  );
};

export default Stickering;
