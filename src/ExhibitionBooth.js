import { useTheme } from './ThemeContext';

const ExhibitionBooth = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="exhibition" className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Exhibition Booth
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-2xl mx-auto`}>
            Stand out at your next event with our custom exhibition booths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 1" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 2" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=800&fit=crop" 
              alt="Exhibition Booth 3" 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionBooth;
