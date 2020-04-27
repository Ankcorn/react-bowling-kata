import React from 'react';
import logo from './big_l.png'
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
      <div className="p-3 m-3 bg-blue-800 rounded-lg">
        <img src={logo} alt="" className="rounded-lg h-64" />
      </div>
      {players.map((el, i) => <ScoreBoard color={el.color} number={i+1} />)}
    </div>
  </div>
  );
}

export default App;
