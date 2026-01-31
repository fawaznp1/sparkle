import { useTheme } from './ThemeContext';
import { useState } from 'react';

const ShieldsIds = () => {
  const { isDark } = useTheme();
  const [expanded, setExpanded] = useState(false);
  
  const items = [
    { name: 'Shields & Momentos', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/IN/KM/FV/68023836/acrylic-memento-1000x1000.jpeg' },
    { name: 'Awards & Trophies', image: 'https://static.wixstatic.com/media/a3eec1_fe22c4ce585a48038d1ee5cf5f784765~mv2.png/v1/fill/w_600,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/a3eec1_fe22c4ce585a48038d1ee5cf5f784765~mv2.png' },
    { name: 'Name Badge', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/IN/KM/FV/68023836/acrylic-memento-1000x1000.jpeg' },
    { name: 'ID Cards', image: 'https://static.wixstatic.com/media/a3eec1_fe22c4ce585a48038d1ee5cf5f784765~mv2.png/v1/fill/w_600,h_600,al_c,lg_1,q_85,enc_avif,quality_auto/a3eec1_fe22c4ce585a48038d1ee5cf5f784765~mv2.png' },
    { name: 'Certificates & Merit Cards', image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/IN/KM/FV/68023836/acrylic-memento-1000x1000.jpeg' },
    { name: 'Stamps & Seals', image: 'https://3.imimg.com/data3/UE/PE/MY-4262070/manual-self-inking-stamps-1000x1000.jpg' }
  ];

  const fullText = "SPARKLE offers a wide range of very attractive glass shields and Acrylic Momentos, which comprises awards and trophies that are specially designed for the clients in corporates, institutes, offices and other functions. SPARKLE can custom design these in different sizes, designs and eye-catching shapes. We also design and supply splendid range of Plastic Photo ID Cards. These cards are largely accepted among our clients for their standard features such as excellent finish, easy interpretation, and water resistance. We also design and produce high quality range of Swipe Cards, Privilege Cards, Membership Cards, Loyalty Cards etc.";
  const shortText = fullText.slice(0, 200);

  return (
    <section id="shields" className={`${isDark ? 'bg-slate-900' : 'bg-gray-50'} py-16 px-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Shields & IDs
          </h2>
          <div className="w-24 h-1 bg-[#be185d] mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed text-center mb-12`}>
            {expanded ? fullText : shortText + '...'}
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-[#be185d] hover:text-[#9d1449] ml-2 font-medium"
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index} className="relative group">
                <div className={` p-6 flex items-center justify-center h-64 hover:scale-105 transition-transform duration-300 mb-10`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3 ">
                  <span className="bg-[#be185d] text-white text-xs px-3 py-3 rounded-full block text-center">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShieldsIds;
