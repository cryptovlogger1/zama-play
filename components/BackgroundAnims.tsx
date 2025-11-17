
import React from 'react';

const BackgroundAnims: React.FC = () => {
  const binaryDigits = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      {binaryDigits.map((_, i) => {
        const size = Math.random() * 2 + 1; // size between 1 and 3 rem
        const duration = Math.random() * 20 + 20; // duration between 20s and 40s
        const delay = Math.random() * 20; // delay up to 20s
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.1 + 0.02;

        return (
          <span
            key={i}
            className="absolute text-zama-blue animate-float"
            style={{
              fontSize: `${size}rem`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity,
              top: '-10%',
            }}
          >
            {Math.round(Math.random())}
          </span>
        );
      })}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default BackgroundAnims;
