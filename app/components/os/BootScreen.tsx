import React from 'react';

const BootScreen: React.FC = () => (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-9999 text-white">
    <div className="mb-12 scale-150">
       <div className="grid grid-cols-2 gap-1 w-20 h-20">
        <div className="bg-blue-500"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-blue-500"></div>
       </div>
    </div>
    <div className="w-12 h-12 border-4 border-t-blue-500 border-white/20 rounded-full animate-spin"></div>
  </div>
);

export default BootScreen;
