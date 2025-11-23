import React, { useState } from 'react';

const CalculatorContent: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [equation, setEquation] = useState<string>('');

  const handlePress = (val: string) => {
    if (val === '=') {
      try {
        // Replaced direct eval with new Function to avoid bundler warnings
        const result = new Function('return ' + equation)();
        setDisplay(result.toString());
        setEquation(result.toString());
      } catch {
        setDisplay('Error');
        setEquation('');
      }
    } else if (val === 'C') {
      setDisplay('0');
      setEquation('');
    } else {
      const newEq = equation + val;
      setEquation(newEq);
      setDisplay(newEq);
    }
  };

  const buttons = [
    'C', '(', ')', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="h-full bg-[#f3f3f3] flex flex-col p-1">
      <div className="h-24 bg-transparent text-right p-4 text-4xl font-light text-gray-800 break-all overflow-hidden flex items-end justify-end">
        {display}
      </div>
      <div className="flex-1 grid grid-cols-4 gap-1">
        {buttons.map((btn, i) => (
          <button 
            key={i}
            onClick={() => handlePress(btn)}
            className={`
              ${btn === '=' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-white hover:bg-gray-100'}
              ${['/', '*', '-', '+'].includes(btn) ? 'bg-gray-100 text-gray-800' : ''}
              text-lg font-medium transition-colors rounded-sm
              ${btn === '0' ? 'col-span-2' : ''}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorContent;
