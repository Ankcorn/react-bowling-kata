import React from 'react';

const Frame = () => {
  return (
  <div className="relative h-20 w-20 rounded bg-gray-800 text-gray-200 m-3 shadow-inner">
    <span className="float-left px-2 py-1 inline-block text-lg">5</span>
    <span className="float-right px-3 py-1 border-solid border-b-2 border-l-2 border-gray-900">4</span>
    <p className="absolute bottom-0 m-0 mt-2 w-full text-center text-3xl font-bold">9</p>
  </div>
  );
};

export default Frame;
