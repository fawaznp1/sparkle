const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-900 flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Enhanced Glassmorphism Container */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[20px] p-12 md:p-16 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] mt-20">
          {/* Animated Logo/Brand */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 rounded-[15px] flex items-center justify-center shadow-2xl hover:rotate-12 transition-transform duration-500 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              SPARKLE
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* Enhanced Descriptions */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            An innovative advertisement and print concept development company who are simply 
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text font-bold animate-pulse"> adventurous </span>
            about creative design concepts.
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            We craft ideas from concept to reality, tailoring ad design, print media, and interactive services 
            for SMEs & corporates as your ultimate point-of-purchase solution.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-[15px] transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/40">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Adventure
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            <button className="backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 font-bold py-4 px-8 rounded-[15px] transition-all duration-500 hover:scale-110 shadow-2xl flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Our Work
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              <span>Award Winning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-[20px] p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-3 animate-pulse">500+</div>
            <div className="text-white/80 font-medium">Projects Completed</div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/20 rounded-[20px] p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-3 animate-pulse">50+</div>
            <div className="text-white/80 font-medium">Happy Clients</div>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20 rounded-[20px] p-8 text-center hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <div className="text-4xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text mb-3 animate-pulse">5+</div>
            <div className="text-white/80 font-medium">Years Experience</div>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;