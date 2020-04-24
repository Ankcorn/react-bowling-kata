import React from 'react';
import Frame from './Frame';

const ScoreBoard = ({color, number}) => {
  return (
    <div className="flex bg-gray-900 rounded-lg shadow-xl">
      <div className={`bg-${color}-800 rounded-tl-lg rounded-bl-lg`}>
        <p class="font-bold p-6 text-gray-300">Player {number}</p>
        {number===1 && <svg viewBox="0 0 20 20" className="fill-current text-gray-300 h-5 px-2"><path d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>}
        <p class="font-bold p-6 text-gray-300">
         Total: 90
        </p>
      </div>
      <div className="flex p-6">
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
        <Frame/>
      </div>
    </div>
  );
};

export default ScoreBoard;
