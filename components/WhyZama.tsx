
import React from 'react';

const WhyZama: React.FC = () => {
  const features = [
    { title: "Private smart contracts", description: "Let blockchains run logic on encrypted data." },
    { title: "Confidential AI", description: "AI that learns from data without seeing it." },
    { title: "Post-quantum security", description: "Encryption designed for the next generation of computers." },
  ];

  return (
    <section className="py-20 bg-dark-blue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-light-gray">So what is Zama actually doing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-zama-blue mb-2">{feature.title}</h3>
              <p className="text-medium-gray">{feature.description}</p>
            </div>
          ))}
        </div>
        <a 
          href="https://zama.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-zama-yellow text-black font-bold py-3 px-8 rounded-lg hover:shadow-yellow-glow hover:scale-105 transition-all duration-300 inline-block"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default WhyZama;
