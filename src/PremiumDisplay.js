import { useTheme } from './ThemeContext';

const PremiumDisplay = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="premium" className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Premium Display Stand
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-2xl mx-auto`}>
            Showcase your products with elegance using our premium display stands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=800&fit=crop" 
              alt="Premium Display 1" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop" 
              alt="Premium Display 2" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=800&fit=crop" 
              alt="Premium Display 3" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumDisplay;
