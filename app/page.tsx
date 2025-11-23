'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  Monitor,
  FileText,
  Globe,
  Terminal,
  Code,
  User,
  Mail,
  Layout,
  Calculator,
  // Database,
  Layers
} from 'lucide-react';

import { WindowState, Position, BootState, APPS, AppId, AppConfig } from './types';
import { WALLPAPERS } from './constants';

import Window from './components/os/Window';
import StartMenu from './components/os/StartMenu';
import Taskbar from './components/os/Taskbar';
import DesktopIcon from './components/os/DesktopIcon';
import BootScreen from './components/os/BootScreen';
import LockScreen from './components/os/LockScreen';
import CalendarWidget from './components/os/CalendarWidget';
import ContextMenuOS from './components/os/ContextMenuOS';
import NotificationToast from './components/os/NotificationToast';

import VSCodeContent from './components/apps/VSCode';
import BrowserContent from './components/apps/Browser';
import TerminalContent from './components/apps/Terminal';
import ProjectsContent from './components/apps/Projects';
import ResumeContent from './components/apps/Resume';
import AboutContent from './components/apps/About';
import ContactContent from './components/apps/Contact';
// import OldPortfolioContent from './components/apps/OldPortfolio';
import CalculatorContent from './components/apps/Calculator';
import ActionCenter from './components/os/ActionCenter';

export default function App() {
  const [bootState, setBootState] = useState<BootState>('boot');
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<number | null>(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [contextMenu, setContextMenu] = useState<{ x: number, y: number } | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [actionCenterOpen, setActionCenterOpen] = useState(false);
  const windowIdCounter = useRef(1);
  // App Definitions
  const appConfig: Record<AppId, AppConfig> = React.useMemo(() => ({
    [APPS.VSCODE]: { title: 'Visual Studio Code', icon: Code, content: <VSCodeContent />, width: 800, height: 600 },
    [APPS.BROWSER]: { title: 'Chrome', icon: Globe, content: <BrowserContent />, width: 900, height: 650 },
    [APPS.TERMINAL]: { title: 'Terminal', icon: Terminal, content: <TerminalContent />, width: 600, height: 400 },
    [APPS.PROJECTS]: { title: 'My Projects', icon: Layout, content: <ProjectsContent />, width: 800, height: 600 },
    [APPS.RESUME]: { title: 'Resume.pdf', icon: FileText, content: <ResumeContent />, width: 700, height: 800 },
    [APPS.CONTACT]: { title: 'Contact Me', icon: Mail, content: <ContactContent />, width: 500, height: 500 },
    [APPS.ABOUT]: { title: 'About Me', icon: User, content: <AboutContent />, width: 500, height: 600 },
    // [APPS.OLD_PORTFOLIO]: { title: 'Old Portfolio', icon: Monitor, content: <OldPortfolioContent />, width: 800, height: 600 },
    [APPS.CALCULATOR]: { title: 'Calculator', icon: Calculator, content: <CalculatorContent />, width: 300, height: 400 },
    [APPS.PORTFOLIO]: { title: 'Portfolio Website', icon: Globe, content: <BrowserContent />, width: 1000, height: 700 }, // Reuse browser
  }), []);

  useEffect(() => {
    // Simulated Boot Sequence
    const bootTimer = setTimeout(() => setBootState('lock'), 2500);
    const clockTimer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => {
      clearTimeout(bootTimer);
      clearInterval(clockTimer);
    };
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Windows Key -> Toggle Start Menu
      if (e.key === 'Meta') {
        e.preventDefault();
        setStartMenuOpen(prev => !prev);
      }

      // Slash Key -> Focus Search (if not already typing in an input)
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (bootState === 'desktop') {
      setTimeout(() => setNotification("Welcome back! Everything is up to date."), 1000);
    }
  }, [bootState]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const openWindow = React.useCallback((appId: AppId) => {
    setWindows(currentWindows => {
      const existingWindow = currentWindows.find(w => w.appId === appId);
      if (existingWindow) {
        const newWindows = currentWindows.map(w =>
          w.id === existingWindow.id
            ? { ...w, minimized: false, zIndex: zIndexCounter + 1 }
            : w
        );
        setActiveWindowId(existingWindow.id);
        setZIndexCounter(prev => prev + 1);
        return newWindows;
      }

      const config = appConfig[appId];
      const newWindow: WindowState = {
        id: windowIdCounter.current++,
        appId,
        title: config.title,
        icon: config.icon,
        content: config.content,
        size: { width: config.width, height: config.height },
        position: { x: 50 + (currentWindows.length * 30), y: 50 + (currentWindows.length * 30) }, // Cascade effect
        zIndex: zIndexCounter,
        minimized: false,
        maximized: false,
      };

      setActiveWindowId(newWindow.id);
      setZIndexCounter(prev => prev + 1);
      return [...currentWindows, newWindow];
    });
  }, [appConfig, zIndexCounter]);

  const closeWindow = (id: number) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindowId === id) setActiveWindowId(null);
  };

  const focusWindow = (id: number) => {
    setActiveWindowId(id);
    setZIndexCounter(prev => prev + 1);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w));
  };

  const toggleMinimize = (id: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, minimized: !w.minimized } : w));
  };

  const toggleMaximize = (id: number) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, maximized: !w.maximized } : w));
    focusWindow(id);
  };

  const moveWindow = (id: number, newPos: Position) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, position: newPos } : w));
  };

  const refreshDesktop = () => {
    setNotification("Desktop Refreshed");
    // Could add a spin animation to icons here
  };

  const nextWallpaper = () => {
    setWallpaperIndex((prev) => (prev + 1) % WALLPAPERS.length);
  };

  // --- Render based on state ---

  if (bootState === 'boot') return <BootScreen />;
  if (bootState === 'lock') return <LockScreen onUnlock={() => setBootState('desktop')} wallpaper={WALLPAPERS[wallpaperIndex]} />;

  return (
    <div
      className="h-screen w-screen overflow-hidden relative select-none font-sans text-sm"
      style={{
        backgroundImage: `url(${WALLPAPERS[wallpaperIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={() => {
        setStartMenuOpen(false);
        setCalendarOpen(false);
        setContextMenu(null);
        setActionCenterOpen(false);
      }}
      onContextMenu={handleContextMenu}
    >

      {/* Desktop Grid */}
      <div className="absolute top-0 left-0 bottom-12 w-full p-2 grid grid-flow-col grid-rows-6 gap-2 content-start justify-start">
        <DesktopIcon label="This PC" icon={Monitor} onClick={() => openWindow(APPS.ABOUT)} color="text-blue-200" />
        <DesktopIcon label="Recycle Bin" icon={Layers} onClick={() => { }} color="text-gray-300" />
        <DesktopIcon label="Browser" icon={Globe} onClick={() => openWindow(APPS.BROWSER)} color="text-blue-400" />
        <DesktopIcon label="VS Code" icon={Code} onClick={() => openWindow(APPS.VSCODE)} color="text-blue-600" />
        <DesktopIcon label="Terminal" icon={Terminal} onClick={() => openWindow(APPS.TERMINAL)} color="text-gray-800" />
        <DesktopIcon label="My Projects" icon={Layout} onClick={() => openWindow(APPS.PROJECTS)} color="text-purple-400" />
        <DesktopIcon label="Resume.pdf" icon={FileText} onClick={() => openWindow(APPS.RESUME)} color="text-red-400" />
        {/* <DesktopIcon label="Old Portfolio" icon={Database} onClick={() => openWindow(APPS.OLD_PORTFOLIO)} color="text-yellow-600" /> */}
        <DesktopIcon label="Calculator" icon={Calculator} onClick={() => openWindow(APPS.CALCULATOR)} color="text-green-500" />
      </div>

      {/* Windows Layer */}
      {windows.map(win => (
        <Window
          key={win.id}
          {...win}
          isActive={activeWindowId === win.id}
          isMinimized={win.minimized}
          isMaximized={win.maximized}
          onClose={closeWindow}
          onFocus={focusWindow}
          onMinimize={toggleMinimize}
          onMaximize={toggleMaximize}
          onMove={moveWindow}
        />
      ))}

      {/* Overlays */}
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenApp={openWindow}
        onShutdown={() => setBootState('lock')}
      />

      <ActionCenter isOpen={actionCenterOpen} onClose={() => setActionCenterOpen(false)} />
      <CalendarWidget isOpen={calendarOpen} />

      {/* Left click */}
      <ContextMenuOS
        x={contextMenu?.x || 0}
        y={contextMenu?.y || 0}
        isOpen={!!contextMenu}
        onClose={() => setContextMenu(null)}
        onRefresh={refreshDesktop}
        onChangeWallpaper={nextWallpaper}
        onToggleFullscreen={toggleFullScreen}
      />

      {notification && <NotificationToast message={notification} onClose={() => setNotification(null)} />}

      {/* Taskbar */}
      <Taskbar
        startMenuOpen={startMenuOpen}
        setStartMenuOpen={setStartMenuOpen}
        windows={windows}
        activeWindowId={activeWindowId}
        toggleMinimize={toggleMinimize}
        focusWindow={focusWindow}
        calendarOpen={calendarOpen}
        setCalendarOpen={setCalendarOpen}
        currentTime={currentTime}
        onToggleFullscreen={toggleFullScreen}
        searchInputRef={searchInputRef}
        actionCenterOpen={actionCenterOpen}
        setActionCenterOpen={setActionCenterOpen}
      />

    </div>
  );
}