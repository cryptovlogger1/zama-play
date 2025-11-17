
import React, { useState } from 'react';

const PrivacyModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-dark-blue p-8 rounded-lg max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
      <h3 className="font-bold text-xl mb-4 text-light-gray">Privacy Policy</h3>
      <p className="text-medium-gray mb-6">This site does not collect or store personal data. All demos run locally in your browser.</p>
      <button onClick={onClose} className="bg-zama-yellow text-black font-bold py-2 px-6 rounded-lg w-full">Close</button>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-medium-gray text-sm">
          <p className="mb-4">
            © 2025 Privacy Playground • Inspired by Zama.ai
            <br/>
            Made with ❤️ by <a href="https://twitter.com/web3manish" target="_blank" rel="noopener noreferrer" className="text-zama-blue hover:underline">@web3manish</a>
          </p>
          <div className="flex justify-center gap-6">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-zama-yellow transition-colors">Privacy</button>
            <a href="https://twitter.com/web3manish" target="_blank" rel="noopener noreferrer" className="hover:text-zama-yellow transition-colors">Contact</a>
          </div>
        </div>
      </footer>
      {showPrivacyModal && <PrivacyModal onClose={() => setShowPrivacyModal(false)} />}
    </>
  );
};

export default Footer;
