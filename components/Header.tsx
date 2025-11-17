
import React from 'react';
import { ZamaLogo } from './Icons';

interface HeaderProps {
  onPlaygroundClick: () => void;
  onWhatIsZamaClick: () => void;
  onAboutCreatorClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlaygroundClick, onWhatIsZamaClick, onAboutCreatorClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zama-yellow/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ZamaLogo className="w-8 h-8" />
          <span className="font-heading text-xl text-light-gray">Privacy Playground</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-medium-gray">
          <button onClick={onPlaygroundClick} className="hover:text-zama-yellow transition-colors duration-300">Playground</button>
          <button onClick={onWhatIsZamaClick} className="hover:text-zama-yellow transition-colors duration-300">What is Zama</button>
          <button onClick={onAboutCreatorClick} className="hover:text-zama-yellow transition-colors duration-300">About Creator</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
