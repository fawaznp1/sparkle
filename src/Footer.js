import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const Footer = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={`relative ${isDark ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#ffa500] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-[#ffa500]'}`}>SPARKLE</h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} text-sm leading-relaxed`}>
              {t.footerDescription}
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
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>{t.services}</h4>
            <ul className="space-y-2">
              {[
                { name: 'Branding', id: 'branding' },
                { name: 'Stickering', id: 'stickering' },
                { name: 'Indoor Signs', id: 'indoor' },
                { name: 'Exhibition Booth', id: 'exhibition' },
                { name: 'Premium Display', id: 'premium' }
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`${isDark ? 'text-white/60 hover:text-[#ffa500]' : 'text-gray-600 hover:text-[#ffa500]'} text-sm transition-colors flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 bg-[#ffa500] rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>{t.moreServices}</h4>
            <ul className="space-y-2">
              {[
                { name: 'Safety Signs', id: 'safety' },
                { name: 'Fleet Graphics', id: 'fleet' },
                { name: 'Promo Gifts', id: 'promo' },
                { name: 'Shields & IDs', id: 'shields' }
              ].map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={`${isDark ? 'text-white/60 hover:text-[#ffa500]' : 'text-gray-600 hover:text-[#ffa500]'} text-sm transition-colors flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 bg-[#ffa500] rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold mb-4`}>{t.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@sparkle.com" className={`${isDark ? 'text-white/60 hover:text-[#ffa500]' : 'text-gray-600 hover:text-[#ffa500]'} text-sm transition-colors flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  studio@sparkle-adv.net
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className={`${isDark ? 'text-white/60 hover:text-[#ffa500]' : 'text-gray-600 hover:text-[#ffa500]'} text-sm transition-colors flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +123 456 7890
                </a>
              </li>
              <li>
                <a href="#contact" className={`${isDark ? 'text-white/60 hover:text-[#ffa500]' : 'text-gray-600 hover:text-[#ffa500]'} text-sm transition-colors flex items-center gap-2`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className={`pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-200'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          
            <a
          href="https://www.fawaznp.in" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-white/50 hover:text-[#ffa500]' : 'text-gray-500 hover:text-[#ffa500]'} text-sm transition-colors underline flex items-center gap-2`}>
           
            {t.developedBy}
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#ffa500]'} transition-colors`}>{t.privacy}</a>
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#ffa500]'} transition-colors`}>{t.terms}</a>
            <a href="#" className={`${isDark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-[#ffa500]'} transition-colors`}>{t.cookies}</a>
          </div>
        <p className={`${isDark ? 'text-white/50' : 'text-gray-500'} text-sm`}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
