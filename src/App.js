import './App.css';
import Branding from './Branding';
import Contact from './Contact';
import ExhibitionBooth from './ExhibitionBooth';
import FleetGraphics from './FleetGraphics';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Indoor from './Indoor';
import PremiumDisplay from './PremiumDisplay';
import PromoGifts from './PromoGifts';
import SafetySigns from './SafetySigns';
import Services from './Services';
import ShieldsIds from './ShieldsIds';
import Stickering from './Stickering';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Branding />
      <Stickering />
      <Indoor />
      <ExhibitionBooth />
      <PremiumDisplay />
      <SafetySigns />
      <FleetGraphics />
      <PromoGifts />
      <ShieldsIds />
      <Contact />
     {/*  <Footer /> */}
    </div>
  );
}

export default App;
