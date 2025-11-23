import React from 'react';
import { Layout } from 'lucide-react';

const ProjectsContent: React.FC = () => {
  const projects = [
    { title: "ContentGenie", tech: "Next.js, TS, Gemini AI", color: "bg-purple-100", desc: "AI-driven content automation dashboard." },
    { title: "Veirdo", tech: "Next.js, Tailwind, MERN", color: "bg-green-100", desc: "Full-stack commerce app with Razorpay." },
    { title: "DMIHER UI", tech: "React, TS, Tailwind", color: "bg-blue-100", desc: "University website UI screens." },
    { title: "SanggoTech Platform", tech: "Next.js 13, GSAP", color: "bg-orange-100", desc: "Dynamic web platform with animations." },
  ];
  return (
    <div className="h-full bg-gray-50 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer border border-gray-100 group">
            <div className={`h-32 ${p.color} rounded mb-4 flex items-center justify-center group-hover:opacity-90 transition`}>
              <Layout size={40} className="text-gray-400" />
            </div>
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-gray-500 text-sm font-medium">{p.tech}</p>
            <p className="text-gray-400 text-xs mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;
