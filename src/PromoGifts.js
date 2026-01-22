const PromoGifts = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            PROMO GIFTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="backdrop-blur-2xl bg-slate-800/40 border border-white/20 rounded-[20px] p-8 md:p-12">
          <p className="text-white/90 text-lg text-center mb-12 max-w-3xl mx-auto">
            Memorable promotional gifts that leave a lasting impression.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="group relative w-64 h-64 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-7xl">🎁</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <div className="group relative w-56 h-56 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-6xl">🎁</div>
                </div>
              </div>
              <div className="group relative w-56 h-56 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-6xl">🎁</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <div className="group relative w-48 h-48 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-5xl">🎁</div>
                </div>
              </div>
              <div className="group relative w-48 h-48 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-5xl">🎁</div>
                </div>
              </div>
              <div className="group relative w-48 h-48 backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:scale-110 transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/40 text-5xl">🎁</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl inline-flex items-center gap-2">
              Get Quote
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

export default PromoGifts;
