const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Like What We Have To Say?
          </h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Whatever you're looking to achieve, feel free to call our studio for an informal chat, 
            drop us an email or pop in for a cup of tea and some fresh ideas - we'd love to hear from you....
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="group backdrop-blur-2xl bg-slate-800/40 border border-white/20 rounded-[20px] p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 backdrop-blur-lg bg-purple-500/20 border border-purple-400/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">📧</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-white/70 mb-3">Drop us a line anytime</p>
                  <a href="mailto:info@sparkle.com" className="text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors">
                    info@sparkle.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group backdrop-blur-2xl bg-slate-800/40 border border-white/20 rounded-[20px] p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 backdrop-blur-lg bg-cyan-500/20 border border-cyan-400/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">📞</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/70 mb-3">Mon-Fri 9am-6pm</p>
                  <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group backdrop-blur-2xl bg-slate-800/40 border border-white/20 rounded-[20px] p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 backdrop-blur-lg bg-pink-500/20 border border-pink-400/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-white/70 mb-3">Pop in for a cup of tea</p>
                  <p className="text-pink-400 font-semibold text-lg">
                    123 Design Street<br />
                    Creative City, CC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-[20px] p-12 flex flex-col justify-center items-center text-center">
            <h3 className="text-4xl font-black text-white mb-6">
              LET'S TALK
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-md">
              Ready to start your project? Get in touch with us today and let's create something amazing together.
            </p>
            <button className="group bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:scale-110 shadow-2xl inline-flex items-center gap-2">
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              {['📱', '💼', '🌐'].map((icon, i) => (
                <div key={i} className="w-12 h-12 backdrop-blur-lg bg-white/5 border border-white/20 rounded-full flex items-center justify-center hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <span className="text-xl">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
