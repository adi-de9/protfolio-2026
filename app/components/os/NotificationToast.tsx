import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const NotificationToast: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-16 right-4 w-80 bg-[#1f1f1f] border border-gray-700 text-white p-4 shadow-2xl rounded-md animate-in slide-in-from-right fade-in duration-300 z-5000">
      <div className="flex justify-between items-start mb-1">
        <span className="font-bold text-sm">System Notification</span>
        <X size={14} className="cursor-pointer text-gray-400 hover:text-white" onClick={onClose} />
      </div>
      <p className="text-gray-300 text-sm">{message}</p>
    </div>
  );
};

export default NotificationToast;
