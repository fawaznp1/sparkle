import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';
import { useScrollAnimation } from './useScrollAnimation';

const Contact = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <section ref={ref} id="contact" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t.contactTitle}
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto mb-6"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg max-w-3xl mx-auto`}>
            {t.contactDesc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'} border p-4 hover:scale-105 transition-all duration-300`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#be185d] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{t.emailUs}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{t.dropLine}</p>
                  <a href="mailto:info@sparkle.com" className="text-[#be185d] hover:text-[#9d1449] font-semibold text-lg transition-colors">
                    info@sparkle.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'} border p-8 hover:scale-105 transition-all duration-300`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#be185d] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{t.callUs}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{t.monFri}</p>
                  <a href="tel:+1234567890" className="text-[#be185d] hover:text-[#9d1449] font-semibold text-lg transition-colors">
                    +123 456 7890
                  </a>
                </div>
              </div>
            </div>

            <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-200'} border p-8 hover:scale-105 transition-all duration-300`}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#be185d] flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>{t.visitUs}</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{t.popIn}</p>
                  <p className="text-[#be185d] font-semibold text-lg">
                    123 Design Street<br />
                    Creative City, CC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden h-full min-h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841374555634!2d-73.98823492346618!3d40.75889097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
