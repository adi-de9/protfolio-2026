import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { WindowState, Position } from '../../types';

interface WindowProps extends WindowState {
  isActive: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  onClose: (id: number) => void;
  onFocus: (id: number) => void;
  onMinimize: (id: number) => void;
  onMaximize: (id: number) => void;
  onMove: (id: number, pos: Position) => void;
}

const Window: React.FC<WindowProps> = ({ 
  id, 
  title, 
  icon: Icon, 
  content, 
  position, 
  size, 
  isActive, 
  isMinimized, 
  isMaximized, 
  zIndex,
  onClose, 
  onFocus, 
  onMinimize, 
  onMaximize, 
  onMove
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        onMove(id, {
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y
        });
      }
    };
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isMaximized, id, onMove]);

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(id);
    if (!isMaximized && (e.target as HTMLElement).closest('.window-titlebar')) {
      setIsDragging(true);
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
    }
  };

  if (isMinimized) return null;

  return (
    <div
      className={`absolute flex flex-col bg-white shadow-2xl overflow-hidden transition-all duration-150 ease-out
        ${isMaximized ? 'inset-0 w-full h-full rounded-none' : 'rounded-lg border border-gray-400/30'}
      `}
      style={{
        width: isMaximized ? '100%' : size.width,
        height: isMaximized ? '100%' : size.height,
        left: isMaximized ? 0 : position.x,
        top: isMaximized ? 0 : position.y,
        zIndex: zIndex,
        opacity: isActive ? 1 : 0.95,
        scale: isActive ? '1' : '0.99'
      }}
      onMouseDown={() => onFocus(id)}
    >
      {/* Title Bar */}
      <div 
        className={`window-titlebar h-10 flex items-center justify-between px-3 select-none
          ${isActive ? 'bg-gray-100 text-black' : 'bg-gray-50 text-gray-500'}
        `}
        onDoubleClick={() => onMaximize(id)}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className={isActive ? "text-blue-500" : "text-gray-400"} />}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center h-full">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(id); }} className="w-10 h-full hover:bg-gray-200 flex items-center justify-center transition-colors">
            <Minus size={14} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onMaximize(id); }} className="w-10 h-full hover:bg-gray-200 flex items-center justify-center transition-colors">
            {isMaximized ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(id); }} className="w-10 h-full hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {content}
      </div>
    </div>
  );
};

export default Window;
