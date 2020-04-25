import React from 'react';
import Frame from './Frame';

const ScoreBoard = ({color, number}) => {
  return (
    <div className="flex bg-gray-900 rounded shadow-xl">
      <div className={`bg-${color}-800 rounded-l w-4`}>
        
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
