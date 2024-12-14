import React, { useState } from 'react';

const RadioButtonGroup = ({options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState("Breakfast");



  const handleOptionChange = (optionId) => {
      setSelectedOption(optionId);
      console.log(selectedOption)
    onChange(selectedOption)
  };

  return (
    <div className="flex space-x-4 overflow-x-scroll p-2 scrollbar-hidden">
      {options.map((option) => (
        <label 
          key={option.id}
          className={`
            px-4 py-2 
            rounded-md 
            cursor-pointer 
            transition-colors 
            duration-200 
            border 
            max-sm:text-sm
            ${selectedOption === option.id 
              ? 'bg-black text-white' 
              : 'bg-white text-black hover:bg-gray-100'}
          `}
        >
          <input 
            type="radio"
            name="customRadio"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => handleOptionChange(option.id)}
            className="hidden"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;