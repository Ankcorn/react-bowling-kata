import React from 'react';

const Roll = ({number}) => (
  <div className="p-2">
  <button
    className="w-full px-5 h-12 shadow rounded bg-gray-800 text-lg font-semibold text-gray-300"
    type="button">
    {number === 10 ? 'STRIKE 🎉' : number}
  </button>
  </div>
);


export default Roll;
