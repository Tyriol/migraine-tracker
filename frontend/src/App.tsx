import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Migraine Tracker</h1>
      </header>
      <main>
        <div className="add-data-point">
          <h2>Add info about your migraine</h2>
          <form>
            <label>
              Date:
              <input
                type="date"
                name="date"
                defaultValue={new Date().toISOString().split('T')[0]}
              ></input>
            </label>
            <label>
              Time:<input type="time" name="time"></input>
            </label>
            <label>
              Intensity
              <input type="range" name="Intensity" min="1" max="10"></input>
            </label>
            <label>
              Preceding Symptoms<input type="text" name="symptoms"></input>
            </label>
            <label>
              Triggers<input type="text" name="triggers"></input>
            </label>
            <label>
              Medication<input type="text" name="medication"></input>
            </label>
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
