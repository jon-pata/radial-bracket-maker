import { useState, useEffect } from 'react'
import './App.css'
import { Bracket } from './components/Bracket/Bracket'

function App() {

  const [data, setData] = useState({rounds:[]});
  const [slider, setSlider] = useState(1);

  const handleSliderChange = (e) => {
    setInitialData(e.target.value);
    setSlider(e.target.value);
  }

  const generateTeams = (round) => {
    const teams = [];
    for(let i = 2**(round -1), j=1; i > 0; i--, j++){
      let col = (j%2==0) ? "#cccccc" : "#999999";
      teams.push({
        cellId: j,
        color: col
      })
    }
    return teams;
  }

  useEffect(()=>{
    setInitialData(1);
  }, []);

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
      <input type="range" className="form-range" min="1" max="8" value={slider}
        step="1" id="customRange3" onChange={handleSliderChange} ></input>
      <Bracket data={data} setData={setData}/>
    </div>
  )
}

export default App
