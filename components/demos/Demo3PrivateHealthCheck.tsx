
import React, { useState, useEffect } from 'react';
import { LockIcon } from '../Icons';

interface DemoProps {
  onComplete?: () => void;
}

const Demo3PrivateHealthCheck: React.FC<DemoProps> = ({ onComplete }) => {
  const [value, setValue] = useState(110);

  useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  const getResult = (val: number) => {
    if (val < 70) return { text: "Low", color: "text-blue-400" };
    if (val > 140) return { text: "High", color: "text-red-400" };
    return { text: "Normal", color: "text-green-400" };
  };

  const result = getResult(value);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-sm">
        <label htmlFor="blood-sugar" className="mb-2 block text-center text-medium-gray">Blood sugar value: <span className="font-bold text-light-gray">{value}</span></label>
        <input
          id="blood-sugar"
          type="range"
          min="60"
          max="180"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer range-lg accent-zama-yellow"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-4 mt-4 text-sm">
        <div className="bg-black/20 p-3 rounded-lg text-center">
          <h5 className="font-bold mb-1 text-light-gray">Normal AI</h5>
          <p>Input: <span className="font-mono text-zama-yellow">{value}</span></p>
          <p>Result: <span className={`font-bold ${result.color}`}>{result.text}</span></p>
        </div>
        <div className="bg-black/20 p-3 rounded-lg text-center">
          <h5 className="font-bold mb-1 text-light-gray">Zama style AI</h5>
          <p className="flex items-center justify-center">Input: <LockIcon className="w-4 h-4 mx-1 text-zama-yellow" /> <span className="font-mono text-zama-yellow">encrypted</span></p>
          <p>Result: <span className={`font-bold ${result.color}`}>{result.text}</span></p>
        </div>
      </div>
       <p className="text-xs text-medium-gray/70 mt-2">Model learned from numbers it never saw in plain text.</p>
    </div>
  );
};

export default Demo3PrivateHealthCheck;
