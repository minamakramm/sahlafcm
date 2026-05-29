import React, { useState } from 'react';
import { getAnimalAvatar } from '@/utils/animalAvatars.jsx';

export const Avatar = ({
  name = 'User',
  src,
  size = 'md',
  className = '',
  onClick,
  status, // 'online' | 'offline' | 'away'
  useAnimals = true // New prop to toggle between animals and initials
}) => {
  const [imgError, setImgError] = useState(false);

  const safeName = (name || 'User').toString();
  
  // Get first two letters from the name (e.g. "John Doe" -> "JD")
  const getInitials = (n) => {
    const parts = n.split(' ').filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return n.substring(0, 2).toUpperCase();
  };

  const initials = getInitials(safeName);

  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-[11px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-12 h-12 text-sm',
    xl: 'w-16 h-16 text-base',
    '2xl': 'w-24 h-24 text-2xl',
    '3xl': 'w-32 h-32 text-4xl'
  };

  // Generate vintage parchment style from name
  const getParchmentClass = (nameStr) => {
    const parchmentStyles = [
      'bg-[#f4ecd8]', // Cream
      'bg-[#e9e4d4]', // Dust
      'bg-[#f1e9d2]', // Sand
      'bg-[#ece4cf]'  // Bone
    ];
    const n = nameStr || 'User';
    const charCode = n.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return parchmentStyles[charCode % parchmentStyles.length];
  };

  const statusColors = {
    online: 'bg-green-600',
    offline: 'bg-stone-400',
    away: 'bg-amber-600'
  };

  return (
    <div
      onClick={onClick}
      title={name}
      className={`relative flex items-center justify-center rounded-full overflow-hidden shrink-0 transition-all duration-300 
      ${onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''}
      ${sizes[size] || sizes.md} ${className} group border border-stone-300/50`}
      style={{ boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.05)' }}
    >
      {src && !imgError ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[20%]"
        />
      ) : (
        <div
          className={`w-full h-full ${getParchmentClass(
            safeName
          )} flex items-center justify-center relative`}
        >
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_transparent_60%,_#d4c4a8_100%)]" />
          
          <div className="relative z-10 w-full h-full flex items-center justify-center p-[18%]">
            {useAnimals ? (
              getAnimalAvatar(safeName, '#3a352f') // Dark charcoal/ink color
            ) : (
              <span className="text-[#3a352f] font-black tracking-tighter drop-shadow-sm italic">
                {initials}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Subtle aged edge */}
      <div className="absolute inset-0 rounded-full border border-black/5 border-[3px] pointer-events-none" />

      {/* Status Indicator */}
      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full border-2 border-[#f4ecd8] ${statusColors[status]} 
          ${size === 'xs' ? 'w-2 h-2' : size === 'sm' ? 'w-2.5 h-2.5' : 'w-3 h-3'}`}
        />
      )}
    </div>
  );
};