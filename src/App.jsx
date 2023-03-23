import { useState } from 'react'
import './App.css'
import { Bracket } from './components/Bracket/Bracket'
import data from './assets/tournementData_end.json';

function App() {

  const [ourData, setOurData] = useState(data);

  return (
    <div className="App">
      <label htmlFor="customRange3" className="form-label">Example range</label>
      <input type="range" className="form-range" min="1" max="8" step="1" id="customRange3"></input>
      <Bracket ourData={ourData} setOurData={setOurData}/>
    </div>
  )
}

export default App
