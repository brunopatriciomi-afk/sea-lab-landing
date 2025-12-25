import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  // Updated base styles: Inter font, Extra Bold weight
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-5 text-base font-sans font-extrabold uppercase tracking-wide transition-all duration-300 rounded-lg";
  
  const variants = {
    // Primary: Orange BG, Black Text, Glow on Hover
    primary: "bg-sealab-accent hover:bg-sealab-accentHover text-black shadow-[0_0_15px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] transform hover:-translate-y-1 hover:scale-[1.02] border border-transparent",
    secondary: "bg-white text-sealab-950 hover:bg-gray-200 font-bold",
    outline: "border border-sealab-muted/30 text-sealab-text hover:border-sealab-accent hover:text-sealab-accent bg-transparent font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="w-5 h-5 stroke-[3px]" />}
    </button>
  );
};

export default Button;