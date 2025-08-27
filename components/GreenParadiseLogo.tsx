import React from 'react';

interface LogoProps {
  type: 'main' | 'hotel' | 'bungalow';
}

const GreenParadiseLogo: React.FC<LogoProps> = ({ type }) => {
  if (type === 'hotel') {
    return (
      <img src="/0L/GPH.svg" alt="Green Paradise Hotel Logo" className="h-24 mx-auto" />
    );
  }

  if (type === 'bungalow') {
    return (
      <img src="/0L/GPB.svg" alt="Green Paradise Bungalows Logo" className="h-24 mx-auto" />
    );
  }

  // Default 'main' logo
  return (
    <img src="0L/GP.svg" alt="Green Paradise Logo" className="h-10" />
  );
};

export default GreenParadiseLogo;