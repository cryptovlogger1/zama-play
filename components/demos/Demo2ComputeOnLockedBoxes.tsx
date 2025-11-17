
import React, { useState } from 'react';
import { LockIcon } from '../Icons';

interface DemoProps {
  onComplete?: () => void;
}

type ComputeState = 'idle' | 'computing' | 'computed' | 'revealed';

const Demo2ComputeOnLockedBoxes: React.FC<DemoProps> = ({ onComplete }) => {
  const [valA, setValA] = useState('5');
  const [valB, setValB] = useState('7');
  const [state, setState] = useState<ComputeState>('idle');

  const sum = (parseInt(valA) || 0) + (parseInt(valB) || 0);

  const handleCompute = () => {
    setState('computing');
    setTimeout(() => {
      setState('computed');
      onComplete?.();
    }, 1000);
  };

  const handleReveal = () => {
    setState('revealed');
  };
  
  const reset = () => {
    setState('idle');
  }

  const renderResultBox = () => {
    switch (state) {
      case 'idle':
        return <div className="w-24 h-20 bg-gray-800 rounded flex items-center justify-center text-gray-500 text-3xl font-bold">[ locked ]</div>;
      case 'computing':
        return <div className="w-24 h-20 bg-gray-800 rounded flex items-center justify-center text-zama-blue"><LockIcon className="w-6 h-6 animate-pulse" /> computing...</div>;
      case 'computed':
        return (
          <button onClick={handleReveal} className="w-24 h-20 bg-zama-yellow text-black rounded flex flex-col items-center justify-center p-2 text-center hover:scale-105 transition-transform">
            <LockIcon className="w-5 h-5 mb-1" />
            <span className="text-xs font-bold">A + B = ?</span>
            <span className="text-xs">(click to reveal)</span>
          </button>
        );
      case 'revealed':
        return <div onClick={reset} className="w-24 h-20 bg-green-500 text-black rounded flex items-center justify-center text-3xl font-bold cursor-pointer" title="Click to reset">{sum}</div>;
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <input type="number" value={valA} onChange={e => setValA(e.target.value)} className="w-20 h-20 text-3xl text-center font-bold bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-zama-blue" />
          {(state !== 'idle') && <LockIcon className="absolute top-1 right-1 w-4 h-4 text-zama-yellow" />}
        </div>
        <span className="text-3xl font-bold text-zama-blue">+</span>
        <div className="relative">
          <input type="number" value={valB} onChange={e => setValB(e.target.value)} className="w-20 h-20 text-3xl text-center font-bold bg-gray-800 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-zama-blue" />
          {(state !== 'idle') && <LockIcon className="absolute top-1 right-1 w-4 h-4 text-zama-yellow" />}
        </div>
        <span className="text-3xl font-bold text-zama-blue">=</span>
        {renderResultBox()}
      </div>
      {state === 'idle' && (
        <button onClick={handleCompute} className="mt-4 bg-zama-blue text-white px-6 py-2 rounded-lg hover:bg-zama-blue/80 transition-colors">
          Compute with Zama
        </button>
      )}
    </div>
  );
};

export default Demo2ComputeOnLockedBoxes;
