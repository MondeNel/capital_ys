// src/components/Logo.jsx
import React from 'react';

const Logo = ({ size = "md", onClick }) => {
  const sizeClasses = {
    sm: "h-5",
    md: "h-6",
    lg: "h-8"
  };

  const textSize = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-2 cursor-pointer ${textSize[size]}`} onClick={onClick}>
      <img 
        src="/logo.png" 
        alt="Capital Ys Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      {/* If you still want the wordmark next to the image, keep it; otherwise remove */}
      <div className="flex items-baseline">
        <span className="font-bold text-[#0C447C] tracking-tight">Capital</span>
        <span className="font-bold text-[#185FA5] tracking-tight">Ys</span>
      </div>
    </div>
  );
};

export default Logo;