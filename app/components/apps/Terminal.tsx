import React, { useState } from 'react';

const TerminalContent: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "Microsoft Windows [Version 10.0.19045.4208]",
    "(c) Microsoft Corporation. All rights reserved.",
    "",
    "C:\\Users\\Developer> npm start",
    "Starting development server...",
    "Compiled successfully!",
    "",
    "C:\\Users\\Developer> _"
  ]);

  return (
    <div className="h-full bg-black text-gray-200 font-mono p-4 text-sm overflow-y-auto">
      {lines.map((line, i) => (
        <div key={i} className="mb-1">
          {line.includes('C:\\') ? <span className="text-green-400">{line.split('>')[0]}&gt;</span> : ''}
          <span className={line.includes('C:\\') ? 'ml-2 text-gray-200' : 'text-gray-300'}>
            {line.includes('C:\\') ? line.split('>')[1] : line}
          </span>
        </div>
      ))}
      <div className="animate-pulse inline-block w-2 h-4 bg-gray-200 align-middle ml-1"></div>
    </div>
  );
};

export default TerminalContent;
