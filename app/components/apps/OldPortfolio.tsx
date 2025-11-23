import React from 'react';

const OldPortfolioContent: React.FC = () => (
  <div className="h-full bg-yellow-50 font-serif p-8 border-4 border-double border-yellow-200 overflow-y-auto">
    <div className="text-center">
      <h1 className="text-4xl text-blue-800 underline mb-4">My Web Site</h1>
      <div className="w-full h-2 bg-linear-to-r from-red-500 via-yellow-500 to-blue-500 mb-8"></div>
      <p className="text-lg mb-4">Best viewed in Netscape Navigator 4.0</p>
      <div className="flex justify-center gap-8 mb-8">
        <button className="bg-gray-300 border-2 border-gray-500 px-4 shadow-md active:border-inset">Guestbook</button>
        <button className="bg-gray-300 border-2 border-gray-500 px-4 shadow-md active:border-inset">Email Me</button>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="border border-blue-800 p-2">HTML Master</div>
        <div className="border border-blue-800 p-2">CSS Wizard</div>
        <div className="border border-blue-800 p-2">JS Scripter</div>
      </div>
    </div>
  </div>
);

export default OldPortfolioContent;
