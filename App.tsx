
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Playground from './components/Playground';
import WhyZama from './components/WhyZama';
import AboutCreator from './components/AboutCreator';
import Footer from './components/Footer';
import BackgroundAnims from './components/BackgroundAnims';

const App: React.FC = () => {
  const playgroundRef = useRef<HTMLDivElement>(null);
  const whyZamaRef = useRef<HTMLDivElement>(null);
  const aboutCreatorRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black font-body text-light-gray min-h-screen overflow-x-hidden relative">
      <BackgroundAnims />
      <Header
        onPlaygroundClick={() => scrollTo(playgroundRef)}
        onWhatIsZamaClick={() => scrollTo(whyZamaRef)}
        onAboutCreatorClick={() => scrollTo(aboutCreatorRef)}
      />
      <main>
        <Hero
          onPlayClick={() => scrollTo(playgroundRef)}
          onWhatIsZamaClick={() => scrollTo(whyZamaRef)}
        />
        <HowItWorks />
        <div ref={playgroundRef} className="pt-20 -mt-20">
          <Playground />
        </div>
        <div ref={whyZamaRef} className="pt-20 -mt-20">
          <WhyZama />
        </div>
        <div ref={aboutCreatorRef} className="pt-20 -mt-20">
          <AboutCreator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
