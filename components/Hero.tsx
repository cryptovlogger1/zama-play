
import React from 'react';
import { LockIcon } from './Icons';

interface HeroProps {
  onPlayClick: () => void;
  onWhatIsZamaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayClick, onWhatIsZamaClick }) => {
  return (
    <section className="relative text-center py-24 sm:py-32 md:py-48 min-h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-blue/50 to-black"></div>
      <LockIcon className="absolute text-zama-yellow/10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 z-10">
        <p className="text-zama-yellow font-heading">Built for the Zama community</p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold my-4 text-light-gray leading-tight">
          Welcome to the Privacy Playground
        </h1>
        <p className="text-medium-gray text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Try tiny interactive demos that show how encryption, AI and blockchains work together with Zama.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            onClick={onPlayClick}
            className="bg-zama-yellow text-black font-bold py-3 px-8 rounded-lg hover:shadow-yellow-glow hover:scale-105 transition-all duration-300"
          >
            Start Playing
          </button>
          <button 
            onClick={onWhatIsZamaClick}
            className="border-2 border-zama-blue text-zama-blue font-bold py-3 px-8 rounded-lg hover:bg-zama-blue hover:text-black hover:shadow-blue-glow hover:scale-105 transition-all duration-300"
          >
            What is Zama
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
