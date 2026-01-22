import './App.css';
import Branding from './Branding';
import Hero from './Hero';
import Services from './Services';
import Stickering from './Stickering';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Branding />
      <Stickering />
    </div>
  );
}

export default App;
