
import React, { useState } from 'react';

interface DemoProps {
  onComplete?: () => void;
}

const Demo1PublicPrivateChain: React.FC<DemoProps> = ({ onComplete }) => {
  const [amount, setAmount] = useState('100');
  const [sentAmount, setSentAmount] = useState('100');
  const [balance, setBalance] = useState(430);

  const handleSend = () => {
    const numAmount = parseInt(amount, 10);
    if (!isNaN(numAmount) && numAmount > 0) {
      setSentAmount(amount);
      setBalance(b => b - numAmount);
      onComplete?.();
    }
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
      {/* Public Chain */}
      <div className="bg-black/20 p-4 rounded-lg">
        <h4 className="font-bold text-center mb-2 text-light-gray">Public Chain</h4>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-800 text-light-gray p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-zama-blue"
            placeholder="Amount"
          />
        </div>
        <button onClick={handleSend} className="w-full bg-zama-blue/80 text-white p-2 rounded hover:bg-zama-blue transition-colors">Send</button>
        <div className="mt-4 p-2 bg-gray-900/50 rounded break-words">
          <p>Alice sent <span className="text-zama-yellow font-mono">{sentAmount}</span> TOK to Bob</p>
          <p>Balance: <span className="text-zama-yellow font-mono">{balance}</span> TOK</p>
        </div>
      </div>

      {/* With Zama */}
      <div className="bg-black/20 p-4 rounded-lg">
        <h4 className="font-bold text-center mb-2 text-light-gray">With Zama</h4>
        <div className="flex items-center gap-2 mb-4">
           <input type="number" value={amount} disabled className="w-full bg-gray-800/50 text-gray-500 p-2 rounded border border-gray-700" />
        </div>
        <button onClick={handleSend} className="w-full bg-zama-blue/80 text-white p-2 rounded hover:bg-zama-blue transition-colors">Send</button>
        <div className="mt-4 p-2 bg-gray-900/50 rounded break-words">
          <p>Alice sent <span className="text-zama-yellow font-mono">****</span> TOK to Bob</p>
          <p>Balance: <span className="text-zama-yellow font-mono">****</span> TOK</p>
          <p className="text-green-400">Verified: yes</p>
        </div>
      </div>
    </div>
  );
};

export default Demo1PublicPrivateChain;
