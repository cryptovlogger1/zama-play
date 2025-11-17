
import React from 'react';
import { CursorClickIcon, SlidersIcon, BrainLockIcon } from './Icons';

const HowItWorks: React.FC = () => {
  const steps = [
    { icon: <CursorClickIcon className="w-12 h-12 text-zama-blue" />, text: "Pick a demo" },
    { icon: <SlidersIcon className="w-12 h-12 text-zama-blue" />, text: "Play with sliders and buttons" },
    { icon: <BrainLockIcon className="w-12 h-12 text-zama-blue" />, text: "Learn how privacy and compute work together" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-dark-blue rounded-full">
                {step.icon}
              </div>
              <p className="text-medium-gray">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
