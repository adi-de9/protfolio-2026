import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { USER_AVATAR } from '../../constants';

const AboutContent: React.FC = () => (
  <div className="h-full bg-linear-to-br from-blue-50 to-white p-8 flex flex-col items-center justify-center text-center overflow-y-auto">
    <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl mb-6 border-4 border-white">
      <img src={USER_AVATAR} alt="Profile" className="w-full h-full object-cover" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Aditya S. Deshmukh</h2>
    <p className="text-blue-600 font-medium mb-6">Frontend Developer | React & Next.js Specialist</p>
    
    <div className="max-w-md text-gray-600 mb-8 leading-relaxed">
      I'm a passionate Frontend Developer with experience in building dynamic, accessible, and performant web applications. 
      I specialize in the React ecosystem, including Next.js, TypeScript, and Tailwind CSS. 
      I love transforming complex problems into beautiful, intuitive interface designs.
    </div>

    <div className="flex gap-4">
      <a href="https://github.com/adi-de9" target="_blank" rel="noreferrer">
        <Github className="text-gray-700 hover:text-black cursor-pointer hover:scale-110 transition" size={28} />
      </a>
      <a href="https://linkedin.com/in/adi-de9" target="_blank" rel="noreferrer">
        <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer hover:scale-110 transition" size={28} />
      </a>
      <a href="mailto:adityadesh937@gmail.com">
        <Mail className="text-red-500 hover:text-red-700 cursor-pointer hover:scale-110 transition" size={28} />
      </a>
    </div>
  </div>
);

export default AboutContent;
