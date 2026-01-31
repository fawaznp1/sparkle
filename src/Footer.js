import { useTheme } from './ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`relative ${isDark ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#be185d] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-[#be185d]'}`}>SPARKLE</h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm leading-relaxed`}>
              Premium signage and printing solutions that make your brand shine.
            </p>
            <div className="flex gap-3">
              {['F', 'T', 'I', 'L'].map((letter, i) => (
                <button key={i} className={`w-10 h-10 ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-white hover:bg-gray-100 border-gray-200'} border rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                  <span className={`${isDark ? 'text-white' : 'text-gray-700'} font-semibold text-sm`}>{letter}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>Services</h4>
            <ul className="space-y-2">
              {['Indoor Signs', 'Outdoor Signs', 'Fleet Graphics', 'Exhibition Booth', 'Safety Signs', 'Promo Gifts'].map((item) => (
                <li key={item}>
                  <a href="#" className={`${isDark ? 'text-white/60 hover:text-[#be185d]' : 'text-gray-600 hover:text-[#be185d]'} text-sm transition-colors flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 bg-[#be185d] rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className={`${isDark ? 'text-white/60 hover:text-[#be185d]' : 'text-gray-600 hover:text-[#be185d]'} text-sm transition-colors flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 bg-[#be185d] rounded-full"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>Get In Touch</h4>
            <div className="space-y-3">
              <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-xl p-3`}>
                <p className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm`}>📧 info@sparkle.com</p>
              </div>
              <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-xl p-3`}>
                <p className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm`}>📞 +123 456 7890</p>
              </div>
              <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'} border rounded-xl p-3`}>
                <p className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm`}>📍 Design Street, CC</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <p className={`${isDark ? 'text-white/50' : 'text-gray-500'} text-sm`}>
            © 2026 Sparkle. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#be185d]'} transition-colors`}>Privacy</a>
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#be185d]'} transition-colors`}>Terms</a>
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#be185d]'} transition-colors`}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
