import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/LogoImage.png" 
        alt="NextGen AML" 
        className={`${iconOnly ? 'h-8 w-8' : 'h-10 md:h-12'} object-contain`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
