import React from 'react';
import Frame from './Frame';

const ScoreBoard = ({color, number}) => {
  return (
    <div className="flex bg-gray-900 rounded-lg shadow-xl">
      <div className={`bg-${color}-800 rounded-tl-lg rounded-bl-lg`}>
        <p class="font-bold p-6 text-gray-300">Player {number}</p>
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
