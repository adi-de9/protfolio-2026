export type ProjectCategory = 'All Projects' | 'Backend & Cloud' | 'Web Platforms' | 'Mobile Apps';

export interface Project {
  number: string;
  title: string;
  category: 'Backend & Cloud' | 'Web Platforms' | 'Mobile Apps';
  stack: string[];
  description: string;
  nodes: [string, string, string];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  badge: string;
  isCurrent?: boolean;
  stack: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export type CharacterMode = 'follow' | 'coding' | 'float' | 'wireframe';

export type SoundKind = 'tap' | 'switch' | 'wave';
