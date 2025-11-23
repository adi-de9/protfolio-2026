'use client'
import React, { useEffect } from 'react';
import { Monitor, Grid, RefreshCcw, Image as ImageIcon, Layout, Maximize } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
  onChangeWallpaper: () => void;
  onToggleFullscreen: () => void;
}

const ContextMenuOS: React.FC<ContextMenuProps> = ({ x, y, isOpen, onClose, onRefresh, onChangeWallpaper, onToggleFullscreen }) => {

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = () => onClose();
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute bg-[#eeeeee] border border-gray-300 shadow-lg py-1 w-48 text-sm text-gray-700 z-9999 rounded-sm"
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { }}>
        <Monitor size={14} /> View
      </div>
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { }}>
        <Grid size={14} /> Sort by
      </div>
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { onRefresh(); onClose(); }}>
        <RefreshCcw size={14} /> Refresh
      </div>
      <div className="h-1px bg-gray-300 my-1"></div>
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { onChangeWallpaper(); onClose(); }}>
        <ImageIcon size={14} /> Next Background
      </div>
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { onToggleFullscreen(); onClose(); }}>
        <Maximize size={14} /> Toggle Fullscreen
      </div>
      <div className="px-4 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center gap-2" onClick={() => { }}>
        <Layout size={14} /> Display settings
      </div>
    </div>
  );
};

export default ContextMenuOS;
