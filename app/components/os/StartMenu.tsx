import React from 'react';
import { Globe, Layout, Code, Terminal, Calculator, FileText, User, Github } from 'lucide-react';
import { APPS, AppId } from '../../types';

// Custom Icons
const SettingsIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} height={size} viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
)

const PowerIcon: React.FC<React.SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    {...props}
    >
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
    <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
)

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (appId: AppId) => void;
  onShutdown: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, onOpenApp, onShutdown }) => {
  if (!isOpen) return null;

  const quickApps = [
    { id: APPS.PORTFOLIO, label: 'Portfolio', icon: Globe, color: 'bg-blue-500' },
    { id: APPS.PROJECTS, label: 'Projects', icon: Layout, color: 'bg-purple-500' },
    { id: APPS.VSCODE, label: 'VS Code', icon: Code, color: 'bg-blue-600' },
    { id: APPS.TERMINAL, label: 'Terminal', icon: Terminal, color: 'bg-gray-800' },
    { id: APPS.CALCULATOR, label: 'Calculator', icon: Calculator, color: 'bg-green-500' },
    { id: APPS.RESUME, label: 'Resume', icon: FileText, color: 'bg-orange-500' },
  ];

  return (
    <div 
      className="absolute bottom-12 left-0 w-80 sm:w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700 rounded-t-lg shadow-2xl text-white z-5000 overflow-hidden flex flex-col animation-slide-up"
      style={{ height: '500px' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-12 flex flex-col items-center justify-end py-4 gap-4 bg-gray-900/50">
           <div className="mt-auto flex flex-col gap-4">
             <div className="p-2 hover:bg-white/10 rounded transition cursor-pointer" title="User"><User size={20}/></div>
             <div className="p-2 hover:bg-white/10 rounded transition cursor-pointer" title="Settings"><SettingsIcon size={20}/></div>
             <div className="p-2 hover:bg-white/10 rounded transition cursor-pointer" title="Shutdown" onClick={onShutdown}><PowerIcon size={20}/></div>
           </div>
        </div>

        {/* App List */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="text-xs font-bold text-gray-400 mb-4 px-2">Pinned</div>
          <div className="grid grid-cols-3 gap-2">
            {quickApps.map((app) => (
              <div 
                key={app.id} 
                className="aspect-square flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-white/10 cursor-pointer transition p-2"
                onClick={() => { onOpenApp(app.id as AppId); onClose(); }}
              >
                <div className={`${app.color} p-2 rounded-sm`}>
                  <app.icon size={24} className="text-white" />
                </div>
                <span className="text-xs truncate w-full text-center">{app.label}</span>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold text-gray-400 mt-6 mb-2 px-2">Recommended</div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 p-2 hover:bg-white/5 cursor-pointer rounded transition">
              <FileText size={18} className="text-blue-400" />
              <div className="flex flex-col">
                <span className="text-sm">Resume.pdf</span>
                <span className="text-xs text-gray-500">Recently added</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/5 cursor-pointer rounded transition">
               <Github size={18} className="text-white" />
               <div className="flex flex-col">
                <span className="text-sm">GitHub Profile</span>
                <span className="text-xs text-gray-500">Recently visited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
