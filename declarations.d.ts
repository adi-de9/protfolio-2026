declare module 'lucide-react' {
  import * as React from 'react';
  export type LucideProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
  };
  export type LucideIcon = React.ComponentType<LucideProps>;

  export const Github: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Mail: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Search: LucideIcon;
  export const Layout: LucideIcon;
  export const FileText: LucideIcon;
  export const Battery: LucideIcon;
  export const Bluetooth: LucideIcon;
  export const Monitor: LucideIcon;
  export const Moon: LucideIcon;
  export const Plane: LucideIcon;
  export const Sun: LucideIcon;
  export const Terminal: LucideIcon;
  export const Wifi: LucideIcon;
  export const Grid: LucideIcon;
  export const RefreshCcw: LucideIcon;
  export const Image: LucideIcon;
  export const Maximize: LucideIcon;
  export const X: LucideIcon;
  export const Globe: LucideIcon;
  export const Code: LucideIcon;
  export const Calculator: LucideIcon;
  export const User: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Volume2: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Minus: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Minimize2: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Layers: LucideIcon;
  const icons: Record<string, LucideIcon>;
  export default icons;
}
