
import React from 'react';

const AboutCreator: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="bg-dark-blue p-8 rounded-2xl max-w-lg w-full text-center border border-zama-blue/30">
          <p className="text-medium-gray mb-6">
            This Privacy Playground is a community project made by <a href="https://twitter.com/web3manish" target="_blank" rel="noopener noreferrer" className="text-zama-blue hover:underline">@web3manish</a>.
            <br/>
            It is inspired by Zama, but not an official Zama product.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://twitter.com/web3manish" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-zama-blue text-zama-blue font-bold py-2 px-6 rounded-lg hover:bg-zama-blue hover:text-black transition-colors duration-300"
            >
              Follow @web3manish
            </a>
            <a 
              href="https://zama.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-zama-yellow text-black font-bold py-2 px-6 rounded-lg hover:shadow-yellow-glow transition-shadow duration-300"
            >
              Visit Zama
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;
