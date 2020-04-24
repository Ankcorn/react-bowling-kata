import React from 'react';
import logo from './logo.svg'
import RollBoard from './RollButtons';
import ScoreBoard from './ScoreBoard';


import './tailwind.generated.css';

const players = [
  {
    color: 'blue'
  },
  {
    color: 'red'
  },
  {
    color: 'teal'
  },
  {
    color: 'pink'
  },
];

function App() {
  return (
    <div className="bg-gray-800 h-screen w-screen flex justify-between">
      <RollBoard/>
    <div className="overflow-scroll flex flex-col space-y-12 items-center flex-1">
      <div className="self-end py-3 px-5">
        <svg viewBox="0 0 20 20" className="fill-current text-gray-300 h-12"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
      </div>
      <div className="bg-blue-800 rounded-full p-4 px-8 text-gray-300 text-2xl font-bold">
        Player 1 Get Ready To Bowl
      </div>
      {players.map((el, i) => <ScoreBoard color={el.color} number={i+1} />)}
    </div>
  </div>
  );
}

export default App;
