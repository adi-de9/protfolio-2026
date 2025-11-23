import React from 'react';

const CalendarWidget: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  if (!isOpen) return null;
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const today = new Date().getDate();

  return (
    <div className="absolute bottom-12 right-0 w-80 bg-[#1f1f1f]/95 backdrop-blur-xl border border-gray-700 text-white p-4 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-200 z-2000 rounded-tl-lg">
      <div className="text-4xl font-light mb-2">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      <div className="text-blue-400 text-sm mb-6">{new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {weekDays.map(d => <div key={d} className="text-gray-400 text-xs py-2">{d}</div>)}
        <div className="col-span-3"></div> {/* spacer for start of month mock */}
        {days.map(d => (
          <div 
            key={d} 
            className={`
              p-2 hover:bg-white/10 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center mx-auto transition
              ${d === today ? 'bg-blue-600 font-bold hover:bg-blue-500' : ''}
              ${d % 7 === 0 || d % 7 === 6 ? 'text-gray-300' : ''}
            `}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
