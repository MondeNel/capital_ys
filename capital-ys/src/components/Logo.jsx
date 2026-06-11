// src/components/Logo.jsx
import React from 'react';

const Logo = ({ size = "md", onClick }) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img 
        src="/logo.png" 
        alt="Capital Ys Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};

export default Logo;