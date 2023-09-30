import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1 data-cy="app-heading">Vite + React + Cypress</h1>
      <div className="card">
        <button data-cy="app-button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn mooooore
      </p>
    </div>
  )
}

export default App
