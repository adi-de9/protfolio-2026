import { LucideIcon } from "lucide-react";

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number | string;
  height: number | string;
}

export interface WindowState {
  id: number;
  appId: string;
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
  position: Position;
  size: Size;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
}

export interface AppConfig {
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
  width: number;
  height: number;
}

export type BootState = "boot" | "lock" | "desktop";

export const APPS = {
  PORTFOLIO: "portfolio",
  RESUME: "resume",
  PROJECTS: "projects",
  BROWSER: "browser",
  // OLD_PORTFOLIO: 'old_portfolio',
  CONTACT: "contact",
  ABOUT: "about",
  VSCODE: "vscode",
  TERMINAL: "terminal",
  CALCULATOR: "calculator",
} as const;

export type AppId = (typeof APPS)[keyof typeof APPS];
