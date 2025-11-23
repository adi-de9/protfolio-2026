import React from 'react';
import { USER_AVATAR } from '../../constants';

interface LockScreenProps {
  onUnlock: () => void;
  wallpaper: string;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, wallpaper }) => (
  <div 
    className="fixed inset-0 bg-cover bg-center z-9000 flex flex-col items-center justify-center text-white transition-all duration-500"
    style={{ backgroundImage: `url(${wallpaper})` }}
    onClick={onUnlock}
  >
    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
    <div className="z-10 flex flex-col items-center animate-in slide-in-from-bottom-10 duration-700">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white/50 shadow-2xl">
         <img src={USER_AVATAR} className="w-full h-full object-cover" />
      </div>
      <h1 className="text-3xl font-medium mb-8">Aditya Developer</h1>
      <button 
        className="px-8 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded text-sm font-medium transition-colors"
      >
        Sign In
      </button>
    </div>
    <div className="absolute bottom-12 left-12 z-10 text-left">
       <div className="text-8xl font-light">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
       <div className="text-2xl font-light">{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</div>
    </div>
  </div>
);

export default LockScreen;
