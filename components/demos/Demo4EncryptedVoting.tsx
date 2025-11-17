
import React, { useState, useEffect } from 'react';
import { LockIcon } from '../Icons';

interface DemoProps {
  onComplete?: () => void;
}

const Demo4EncryptedVoting: React.FC<DemoProps> = ({ onComplete }) => {
  const [tally, setTally] = useState({ yes: 0, no: 0, total: 0 });
  const [view, setView] = useState<'vote' | 'tally'>('vote');
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // Fake numbers on page load
    const yes = Math.floor(Math.random() * 20) + 15; // 15-34
    const no = Math.floor(Math.random() * 10) + 5;  // 5-14
    setTally({ yes, no, total: yes + no });
  }, []);

  const handleVote = (vote: 'yes' | 'no') => {
    setMessage('Your vote: 🔒 recorded privately');
    setTally(current => ({
      ...current,
      [vote]: current[vote] + 1,
      total: current.total + 1
    }));
    onComplete?.();
    setTimeout(() => setMessage(''), 3000);
  };

  if (view === 'tally') {
    return (
      <div className="w-full flex flex-col items-center text-center">
        <div className="bg-black/20 p-4 rounded-lg">
          <h4 className="font-bold text-lg text-light-gray mb-2">Vote Tally</h4>
          <p>Total votes: <span className="font-mono text-zama-yellow">{tally.total}</span></p>
          <p>Yes: <span className="font-mono text-green-400">{tally.yes}</span></p>
          <p>No: <span className="font-mono text-red-400">{tally.no}</span></p>
          <p className="mt-2 text-sm text-medium-gray">Individual votes: <span className="font-bold">hidden</span></p>
        </div>
        <button onClick={() => setView('vote')} className="mt-4 text-zama-blue hover:underline">Back to Voting</button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button onClick={() => handleVote('yes')} className="bg-green-600/80 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">Vote Yes</button>
        <button onClick={() => handleVote('no')} className="bg-red-600/80 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">Vote No</button>
      </div>
      <button onClick={() => setView('tally')} className="bg-gray-600/80 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">View Tally</button>
      {message && <p className="text-sm text-green-400 mt-2 h-5">{message}</p>}
    </div>
  );
};

export default Demo4EncryptedVoting;
