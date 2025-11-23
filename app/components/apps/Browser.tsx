import React from 'react';
import { Search } from 'lucide-react';

const BrowserContent: React.FC = () => (
  <div className="flex flex-col h-full bg-white">
    {/* Browser Chrome */}
    <div className="bg-gray-100 p-2 flex items-center gap-2 border-b">
      <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>
      <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 flex items-center border shadow-sm mx-2">
        <Search size={12} className="mr-2" />
        https://portfolio.dev/home
      </div>
    </div>
    {/* Content */}
    <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <h1 className="text-3xl font-bold mb-4">Welcome to my digital space.</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm Aditya S. Deshmukh, a Frontend Developer passionate about building accessible, pixel-perfect, performant web applications. 
            I specialize in the React ecosystem (Next.js, TypeScript) and modern UI libraries like Tailwind CSS and Shadcn-UI.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded border border-blue-100">
              <h3 className="font-bold text-blue-700 mb-1">Frontend</h3>
              <p className="text-sm text-blue-600">React, Next.js, TypeScript, Tailwind, GSAP</p>
            </div>
            <div className="p-4 bg-green-50 rounded border border-green-100">
              <h3 className="font-bold text-green-700 mb-1">Backend</h3>
              <p className="text-sm text-green-600">Node, Express, MongoDB, Strapi CMS</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">View Projects</button>
        </div>
      </div>
    </div>
  </div>
);

export default BrowserContent;
