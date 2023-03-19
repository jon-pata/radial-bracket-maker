import { useState } from 'react'
import './App.css'
import { Cell } from './components/Radial/Ring/Match/Cell/Cell'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <label for="customRange3" class="form-label">Example range</label>
      <input type="range" class="form-range" min="1" max="8" step="1" id="customRange3"></input>
      <p>Hello world!</p>
      <Cell></Cell>
      <Cell></Cell>
    </div>
  )
}

export default App
