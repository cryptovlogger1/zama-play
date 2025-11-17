
import React, { useState } from 'react';
import { CheckIcon } from './Icons';

interface DemoCardProps {
  label: string;
  caption: string;
  children: React.ReactNode;
}

const DemoCard: React.FC<DemoCardProps> = ({ label, caption, children }) => {
  const [completed, setCompleted] = useState(false);

  // A bit of a hack to allow children to signal completion
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onComplete: () => setCompleted(true) } as any);
    }
    return child;
  });

  return (
    <div className="bg-dark-blue p-6 rounded-2xl border border-transparent hover:border-zama-yellow/50 hover:scale-[1.02] transition-all duration-300 group">
      <div className="mb-4">
        <p className="text-zama-yellow font-bold text-sm">{label}</p>
      </div>
      <div className="mb-6 min-h-[150px] flex items-center justify-center">
        {childrenWithProps}
      </div>
      <div className="flex items-start gap-2 text-medium-gray text-sm">
        {completed && <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />}
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default DemoCard;
