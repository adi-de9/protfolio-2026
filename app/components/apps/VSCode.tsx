import React from 'react';
import { FileText, Search, Github } from 'lucide-react';

const VSCodeContent: React.FC = () => (
  <div className="flex flex-col h-full bg-[#1e1e1e] text-gray-300 font-mono text-sm">
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-12 bg-[#333] flex flex-col items-center py-4 gap-4 border-r border-[#444]">
        <FileText size={20} className="text-white" />
        <Search size={20} />
        <Github size={20} />
      </div>
      {/* File Explorer */}
      <div className="w-48 bg-[#252526] hidden md:flex flex-col border-r border-[#444]">
        <div className="p-2 text-xs font-bold uppercase tracking-wider">Explorer</div>
        <div className="px-4 py-1 bg-[#37373d] text-white text-xs">PORTFOLIO-V2</div>
        <div className="mt-1">
          <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer text-blue-300">
            <span className="text-xs">JS</span>
            <span>App.jsx</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer text-yellow-300">
            <span className="text-xs">CSS</span>
            <span>styles.css</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer text-green-300">
            <span className="text-xs">.ENV</span>
            <span>.env</span>
          </div>
        </div>
      </div>
      {/* Editor */}
      <div className="flex-1 flex flex-col">
        <div className="h-8 bg-[#1e1e1e] flex items-center px-4 border-b border-[#444] text-xs">
          <span className="text-blue-300 mr-2">App.jsx</span>
          <span className="text-gray-500">src/components</span>
        </div>
        <div className="p-4 overflow-auto">
          <div className="text-blue-400">import <span className="text-yellow-300">React</span> from <span className="text-orange-300">'react'</span>;</div>
          <div className="text-blue-400">import <span className="text-yellow-300">Portfolio</span> from <span className="text-orange-300">'./Portfolio'</span>;</div>
          <br />
          <div className="text-purple-400">const <span className="text-yellow-200">Developer</span> = <span className="text-yellow-400">()</span> <span className="text-blue-400">=&gt;</span> {'{'}</div>
          <div className="pl-4 text-purple-400">const <span className="text-white">skills</span> = [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Node.js'</span>, <span className="text-orange-300">'TypeScript'</span>];</div>
          <br />
          <div className="pl-4 text-purple-400">return (</div>
          <div className="pl-8 text-gray-400">&lt;<span className="text-blue-300">div</span> <span className="text-green-300">className</span>=<span className="text-orange-300">"full-stack-dev"</span>&gt;</div>
          <div className="pl-12 text-gray-400">&lt;<span className="text-blue-300">h1</span>&gt;<span className="text-white">Building Digital Experiences</span>&lt;/<span className="text-blue-300">h1</span>&gt;</div>
          <div className="pl-12 text-gray-400">{'{'}<span className="text-white">skills.map</span>(<span className="text-orange-300">skill</span> <span className="text-blue-400">=&gt;</span> &lt;<span className="text-yellow-300">SkillBadge</span> key={'{skill}'} /&gt;){'}'}</div>
          <div className="pl-8 text-gray-400">&lt;/<span className="text-blue-300">div</span>&gt;</div>
          <div className="pl-4 text-purple-400">);</div>
          <div className="text-purple-400">{'}'};</div>
          <br />
          <div className="text-blue-400">export default <span className="text-yellow-200">Developer</span>;</div>
        </div>
      </div>
    </div>
    <div className="h-6 bg-[#007acc] text-white flex items-center px-2 text-xs justify-between">
      <div className="flex gap-4">
        <span>main*</span>
        <span>0 errors</span>
      </div>
      <div className="flex gap-4">
        <span>Ln 12, Col 34</span>
        <span>UTF-8</span>
        <span>JavaScript JSX</span>
      </div>
    </div>
  </div>
);

export default VSCodeContent;
