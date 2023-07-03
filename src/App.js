import React from 'react';
import Athlete from './Athlete';


const athletes = [
  new Athlete(1, "Usain Bolt", "100m"),
  new Athlete(2, "Mondo Duplantis", "Pole Vault"),
  new Athlete(3, "Ating Mu", "800m")
];

function App() {
  return(
    <div>
      <h1>Athlete List</h1>
      <ul>
        {athletes.map((athlete => (
          athlete.getResume()
        )))}
      </ul>
    </div>
  )
}

export default App;
