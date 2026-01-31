import { useTheme } from './ThemeContext';

const SafetySigns = () => {
  const { isDark } = useTheme();
  
  const signs = [
    { name: 'Acrylic Safety Signs', image: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&h=600&fit=crop' },
    { name: 'Hanging Safety Signs', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=600&fit=crop' },
    { name: 'Standing Safety Signs', image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&h=600&fit=crop' },
    { name: 'Sticker Safety Signs', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=600&fit=crop' },
    { name: 'Reflective Signs', image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=600&fit=crop' },
    { name: 'Reflective Stickers', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop' }
  ];

  return (
    <section className={`${isDark ? 'bg-slate-900' : 'bg-white'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Safety Signs
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-3xl mx-auto`}>
            All our health and safety signs are offered in a variety of sizes to full legal requirements and ensure they are visible in any environment and at night via our glow in the dark range.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {signs.map((sign, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img 
                src={sign.image} 
                alt={sign.name} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-[#be185d] text-white text-xs px-3 py-1 rounded-full">
                  {sign.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySigns;
