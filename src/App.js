import { lazy, Suspense } from 'react';
import './App.css';
import Hero from './Hero';

const Branding = lazy(() => import('./Branding'));
const Clients = lazy(() => import('./Clients'));
const Contact = lazy(() => import('./Contact'));
const ExhibitionBooth = lazy(() => import('./ExhibitionBooth'));
const FleetGraphics = lazy(() => import('./FleetGraphics'));
const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));
const Indoor = lazy(() => import('./Indoor'));
const PremiumDisplay = lazy(() => import('./PremiumDisplay'));
const PromoGifts = lazy(() => import('./PromoGifts'));
const SafetySigns = lazy(() => import('./SafetySigns'));
const Services = lazy(() => import('./Services'));
const ShieldsIds = lazy(() => import('./ShieldsIds'));
const Stickering = lazy(() => import('./Stickering'));
const ScrollToTop = lazy(() => import('./ScrollToTop'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className='text-center m-auto py-10'>Loading...</div>}>
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
        <Clients />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
