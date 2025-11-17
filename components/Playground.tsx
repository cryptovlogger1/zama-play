
import React from 'react';
import DemoCard from './DemoCard';
import Demo1PublicPrivateChain from './demos/Demo1PublicPrivateChain';
import Demo2ComputeOnLockedBoxes from './demos/Demo2ComputeOnLockedBoxes';
import Demo3PrivateHealthCheck from './demos/Demo3PrivateHealthCheck';
import Demo4EncryptedVoting from './demos/Demo4EncryptedVoting';

const Playground: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DemoCard
            label="Demo 1 • Public vs Private"
            caption="Same transaction. On the left everyone sees your amounts. On the right everything stays hidden but still verified."
          >
            <Demo1PublicPrivateChain />
          </DemoCard>
          <DemoCard
            label="Demo 2 • Math on locked data"
            caption="You lock both numbers, the system still computes them. The math works, even though the values stay hidden."
          >
            <Demo2ComputeOnLockedBoxes />
          </DemoCard>
          <DemoCard
            label="Demo 3 • Private health example"
            caption="A hospital can get the answer 'High' or 'Normal' without seeing the actual number behind it."
          >
            <Demo3PrivateHealthCheck />
          </DemoCard>
          <DemoCard
            label="Demo 4 • Encrypted vote"
            caption="You can see the result of the vote, but no one can see who voted what."
          >
            <Demo4EncryptedVoting />
          </DemoCard>
        </div>
      </div>
    </section>
  );
};

export default Playground;
