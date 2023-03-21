import { useState } from 'react'
import './App.css'
import { Bracket } from './components/Bracket/Bracket'

function App() {

  return (
    <div className="App">
      <label htmlFor="customRange3" className="form-label">Example range</label>
      <input type="range" className="form-range" min="1" max="8" step="1" id="customRange3"></input>
      <Bracket />
    </div>
  )
}

export default App
