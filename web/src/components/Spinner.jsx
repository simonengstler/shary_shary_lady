import React from 'react';

const Spinner = () => {
  return (
    <div className="w-10 h-10 relative animate-spin">
      <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full absolute"></div>
      <div className="w-10 h-10 border-t-4 border-blue-500 border-solid rounded-full absolute rotate-45"></div>
    </div>
  );
};

export default Spinner;
