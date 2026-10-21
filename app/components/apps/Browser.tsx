import React from 'react';
import { ExternalLink, Search } from "lucide-react";

const BrowserContent: React.FC = () => {
  const url = "https://www.adityapro.online";

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Browser Chrome */}
      <div className="bg-gray-100 p-2 flex items-center gap-2 border-b">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-gray-500 flex items-center border shadow-sm mx-2 overflow-hidden">
          <Search size={12} className="mr-2 shrink-0" />
          <span className="truncate">{url}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors"
          title="Open in new tab"
        >
          <ExternalLink size={14} />
        </a>
      </div>
      {/* Content */}
      <div className="flex-1 bg-gray-50 relative">
        <iframe
          src={url}
          className="w-full h-full border-none"
          title="Portfolio Website"
        />
      </div>
    </div>
  );
};

export default BrowserContent;
