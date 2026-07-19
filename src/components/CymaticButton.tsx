import React from 'react';

interface CymaticButtonProps {
  label: string;
  action: 'whatsapp' | 'email';
  target: string; // phone number or email address
  message?: string;
  variant?: 'primary' | 'outline';
}

export const CymaticButton: React.FC<CymaticButtonProps> = ({ 
  label, action, target, message = "I am interested in your work.", variant = 'primary' 
}) => {
  const handleClick = () => {
    if (action === 'whatsapp') {
      const url = `https://wa.me/${target}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else if (action === 'email') {
      window.location.href = `mailto:${target}?subject=${encodeURIComponent(message)}`;
    }
  };

  const baseStyles = "px-8 py-4 font-bold uppercase rounded-full transition-all duration-300 text-sm tracking-widest";
  const variants = {
    primary: "bg-[var(--color-accent)] text-black hover:brightness-110",
    outline: "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-primary)]"
  };

  return (
    <button onClick={handleClick} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};
