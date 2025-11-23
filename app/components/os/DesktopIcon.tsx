import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color?: string;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick, color = "text-blue-500" }) => (
  <div 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="flex flex-col items-center justify-center w-24 h-24 rounded hover:bg-white/10 cursor-pointer border border-transparent hover:border-white/20 transition-colors group"
  >
    <Icon size={40} className={`${color} drop-shadow-lg mb-1 group-hover:scale-105 transition-transform`} />
    <span className="text-white text-xs text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1 truncate w-full select-none font-medium shadow-black">
      {label}
    </span>
  </div>
);

export default DesktopIcon;
