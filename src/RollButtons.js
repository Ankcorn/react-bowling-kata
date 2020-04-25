import React from 'react';
import Roll from './Roll';

const RollButtons = () =>  {
  return (
  <div className="flex h-screen items-center">
    <div className="bg-gray-900 rounded-tr-lg rounded-br-lg z-10">
      <div className="bg-red-800 flex px-2 py-1 rounded-lg m-3 shadow-inner justify-around items-center">
        <p className="text-lg font-bold text-gray-300">Player 2</p>
        <svg viewBox="0 0 20 20" class="h-5 text-gray-300 fill-current"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </div>
      <div className="grid grid-cols-2 grid-flow-row rounded-lg">
        <Roll number={0} />
        <Roll number={1} />
        <Roll number={2} />
        <Roll number={3} />
        <Roll number={4} />
        <Roll number={5} />
        <Roll number={6} />
        <Roll number={7} />
        <Roll number={8} />
        <Roll number={9} />
      </div>
      <Roll number={10} />
    </div>
  </div>);
};

export default RollButtons;
