import React from 'react';

const athletes = [
  {id: 1, name: "Usain Bolt", speciality: "100m"},
  {id: 2, name: "Mondo Duplantis", speciality: "Pole Vault"},
  {id: 3, name: "Ating Mu", speciality: "800m"}
]

function App() {
  return(
    <div>
      <h1>Athlete List</h1>
      <ul>
        {athletes.map((athlete => (
          <li key={athlete.id}> {athlete.name} - {athlete.speciality}</li>
        )))}
      </ul>
    </div>
  )
}

export default App;
