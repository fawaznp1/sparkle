import { useTheme } from './ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const services = ['Branding', 'Stickering', 'Indoor Signs', 'Exhibition Booth', 'Safety Signs'];
  const quickLinks = ['About Us', 'Portfolio', 'Testimonials', 'Blog', 'Careers'];
  const contact = ['info@sparkle.com', '+123 456 7890', '123 Design Street, CC 12345'];

  return (
    <footer className={`relative ${isDark ? 'bg-gradient-to-br from-slate-900 to-slate-900' : 'bg-gray-100'} ${isDark ? 'border-t border-white/10' : 'border-t border-gray-300'} transition-colors duration-300`}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">S</span>
              </div>
              <span className={`text-2xl font-black ${isDark ? 'bg-gradient-to-r from-white to-purple-200' : 'bg-gradient-to-r from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>
                SPARKLE
              </span>
            </div>
            <p className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm leading-relaxed`}>
              Creating stunning designs and printing solutions for your business needs.
            </p>
          </div>

          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-4`}>Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className={`${isDark ? 'text-white/60 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} text-sm transition-colors`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-4`}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={`${isDark ? 'text-white/60 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'} text-sm transition-colors`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${isDark ? 'text-white' : 'text-gray-900'} font-bold text-lg mb-4`}>Contact</h3>
            <ul className="space-y-2">
              {contact.map((item, i) => (
                <li key={i} className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-sm`}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              {['📱', '💼', '🌐'].map((icon, i) => (
                <div key={i} className={`w-9 h-9 ${isDark ? 'bg-white/5 border-white/20' : 'bg-gray-200 border-gray-300'} border rounded-full flex items-center justify-center hover:scale-110 ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-300'} transition-all duration-300 cursor-pointer`}>
                  <span className="text-sm">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 ${isDark ? 'border-t border-white/10' : 'border-t border-gray-300'} flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`${isDark ? 'text-white/40' : 'text-gray-500'} text-sm`}>
            © 2024 Sparkle. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className={`${isDark ? 'text-white/40 hover:text-white' : 'text-gray-500 hover:text-gray-900'} text-sm transition-colors`}>
              Privacy Policy
            </a>
            <a href="#" className={`${isDark ? 'text-white/40 hover:text-white' : 'text-gray-500 hover:text-gray-900'} text-sm transition-colors`}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
