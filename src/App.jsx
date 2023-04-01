import { useState } from 'react'
import './App.css'
import { Bracket } from './components/Bracket/Bracket'

function App() {

  const [data, setData] = useState({rounds:[]});
  const [roundCount, setRoundCount] = useState();

  const handleSliderChange = (e) => {
    setInitialData(e.target.value);
  }

  const generateTeams = (round) => {
    const teams = [];
    for(let i = 2**(round -1); i > 0; i--){
      teams.push({
        color: "#333333"
      })
    }
    return teams;
  }

  const setInitialData = (numRounds) => {
    let d = {};
    d.rounds = [];
    for(let i = numRounds; i > 0; i--){
      d.rounds.push({
        "roundOf": 2**(i),
        "teams": generateTeams(i)
      });
    }
    setData(d);
    console.log(`data: ${data}`);
  }

  return (
    <div className="App">
      <label htmlFor="customRange3" className="form-label">Example range</label>
      <input type="range" className="form-range" min="1" max="8" 
        step="1" id="customRange3" onChange={handleSliderChange} ></input>
      <Bracket data={data} setData={setData} roundCount={roundCount} />
    </div>
  )
}

export default App
