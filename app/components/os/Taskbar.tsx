import React from 'react';
import { Search, ChevronRight, Battery, Wifi, Volume2, LucideIcon, Maximize, MessageSquare } from 'lucide-react';
import { WindowState } from '../../types';

const WindowsLogo: React.FC = () => (
  <div className="grid grid-cols-2 gap-1px w-5 h-5 group-hover:opacity-80 transition-opacity">
    <div className="bg-white"></div>
    <div className="bg-white"></div>
    <div className="bg-white"></div>
    <div className="bg-white"></div>
  </div>
)

interface TaskbarIconProps {
  icon: LucideIcon;
  label: string;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
}

const TaskbarIcon: React.FC<TaskbarIconProps> = ({ icon: Icon, label, isOpen, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      h-full px-3 flex items-center justify-center cursor-pointer transition-all duration-200
      ${isActive ? 'bg-white/10 border-b-2 border-blue-400' : 'hover:bg-white/5'}
      ${isOpen && !isActive ? 'border-b-2 border-gray-400' : ''}
    `}
    title={label}
  >
    <div className="p-1.5 rounded-md">
      <Icon size={24} className={isActive ? 'text-blue-300' : 'text-white'} />
    </div>
  </div>
);

interface TaskbarProps {
  startMenuOpen: boolean;
  setStartMenuOpen: (open: boolean) => void;
  windows: WindowState[];
  activeWindowId: number | null;
  toggleMinimize: (id: number) => void;
  focusWindow: (id: number) => void;
  calendarOpen: boolean;
  setCalendarOpen: (open: boolean) => void;
  currentTime: Date;
  onToggleFullscreen: () => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  actionCenterOpen: boolean;
  setActionCenterOpen: (open: boolean) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  startMenuOpen,
  setStartMenuOpen,
  windows,
  activeWindowId,
  toggleMinimize,
  focusWindow,
  calendarOpen,
  setCalendarOpen,
  currentTime,
  onToggleFullscreen,
  searchInputRef,
  actionCenterOpen,
  setActionCenterOpen
}) => {
  return (
    <div
      className="absolute bottom-0 w-full h-12 bg-[#1a1a1a]/90 backdrop-blur-md flex items-center justify-between text-white z-1000 shadow-2xl border-t border-white/10"
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="flex items-center h-full">
        {/* Start Button */}
        <div
          className={`h-full w-12 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors ${startMenuOpen ? 'bg-white/10' : ''}`}
          onClick={() => setStartMenuOpen(!startMenuOpen)}
        >
          <WindowsLogo />
        </div>

        {/* Search Bar  */}
        <div className="hidden sm:flex items-center h-8 bg-white/90 text-black px-2 w-56 rounded-sm ml-2 mr-2">
          <Search size={14} className="mr-2 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Type here to search"
            className="bg-transparent border-none outline-none text-xs text-black w-full h-full placeholder:text-gray-500"
          />
        </div>

        {/* Running Apps */}
        <div className="flex items-center h-full px-2 gap-1">
          {/* Pinned/Open Apps */}
          {windows.map(win => (
            <TaskbarIcon
              key={win.id}
              icon={win.icon}
              label={win.title}
              isOpen={true}
              isActive={activeWindowId === win.id && !win.minimized}
              onClick={() => {
                if (win.minimized) toggleMinimize(win.id);
                else if (activeWindowId === win.id) toggleMinimize(win.id);
                else focusWindow(win.id);
              }}
            />
          ))}
        </div>
      </div>

      {/* System Tray */}
      <div className="flex items-center h-full px-4 gap-4 text-xs hover:bg-white/5 cursor-pointer transition-colors">
        <div className="flex items-center gap-2 px-2">
          <ChevronRight size={14} className="-rotate-90" />

          {/* Fullscreen Button */}
          <div onClick={(e) => { e.stopPropagation(); onToggleFullscreen(); }} title="Toggle Fullscreen" className="hover:text-blue-300 transition-colors">
            <Maximize size={16} />
          </div>

          <Battery size={16} />
          <Wifi size={16} />
          <Volume2 size={16} />
        </div>
        <div
          className="flex flex-col items-end leading-tight px-2 py-1 rounded hover:bg-white/10"
          onClick={() => setCalendarOpen(!calendarOpen)}
        >
          <span>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
          <span className="text-[10px] text-gray-300">
            {currentTime.toLocaleDateString()}
          </span>
        </div>

        {/* Action Center Toggle */}
        <div
          className={`h-full px-2 flex items-center justify-center hover:bg-white/10 cursor-pointer transition ${actionCenterOpen ? 'bg-white/10' : ''}`}
          onClick={(e) => { e.stopPropagation(); setActionCenterOpen(!actionCenterOpen); }}
          title="Action Center (Notifications)"
        >
          <MessageSquare size={16} className="text-white" />
        </div>
        <div className="w-1 h-full border-l border-gray-600 ml-2"></div>
      </div>
    </div>
  );
};

export default Taskbar;
