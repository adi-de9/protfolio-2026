'use client';

import { useState, useCallback } from 'react';
import { Project } from './types/portfolio';
import { SoundProvider } from './hooks/use-sound-fx';
import SmoothScroll from './components/portfolio/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';
import ToastNotification from './components/ui/ToastNotification';
import BottomSheetDrawer from './components/ui/BottomSheetDrawer';
import Header from './components/portfolio/Header';
import Hero from './components/portfolio/Hero';
import MarqueeRibbon from './components/portfolio/MarqueeRibbon';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ExperienceSection from './components/portfolio/ExperienceSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ContactSection from './components/portfolio/ContactSection';
import MobileNavDock from './components/portfolio/MobileNavDock';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerMode, setDrawerMode] = useState<'project' | 'quick-info' | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2600);
  }, []);

  const copyEmail = useCallback(() => {
    const email = 'adityadesh937@gmail.com';
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    } else if (typeof document !== 'undefined') {
      const area = document.createElement('textarea');
      area.value = email;
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand('copy');
      } catch {}
      document.body.removeChild(area);
    }
    showToast('Copied adityadesh937@gmail.com to clipboard');
  }, [showToast]);

  const handleSelectProject = useCallback((project: Project) => {
    setActiveProject(project);
    setDrawerMode('project');
    setDrawerOpen(true);
  }, []);

  const handleOpenQuickInfo = useCallback(() => {
    setActiveProject(null);
    setDrawerMode('quick-info');
    setDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <SoundProvider>
      {/* Lenis Smooth Scrolling (Native Touch Scroll Preserved) */}
      <SmoothScroll />

      {/* Dual-Layer Precision & Magnetic Custom Cursor */}
      <CustomCursor />

      {/* Floating Toast Notification */}
      <ToastNotification message={toastMessage} />

      {/* Top Navigation & Status Bar */}
      <Header onCopyEmail={copyEmail} />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8">
        <Hero />
      </main>

      {/* Editorial Tech Stack Marquee Ribbon */}
      <MarqueeRibbon />

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8">
        <ProjectsSection onSelectProject={handleSelectProject} />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection onCopyEmail={copyEmail} />
      </main>

      {/* Mobile Thumb-Zone Navigation Dock */}
      <MobileNavDock onOpenQuickInfo={handleOpenQuickInfo} />

      {/* Bottom Sheet Drawer (System Flow & Quick Info) */}
      <BottomSheetDrawer
        isOpen={drawerOpen}
        onClose={handleCloseDrawer}
        activeProject={activeProject}
        mode={drawerMode}
        onCopyEmail={copyEmail}
      />
    </SoundProvider>
  );
}
