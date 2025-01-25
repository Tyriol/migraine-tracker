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
            <div className="date-time">
              <div className="form-input">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                ></input>
              </div>
              <div className="form-input">
                <label htmlFor="time">Time:</label>
                <input type="time" name="time"></input>
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="intensity">Intensity</label>
              <input type="range" name="intensity" min="1" max="10"></input>
            </div>
            <div className="form-input">
              <label htmlFor="">Preceding Symptoms</label>
              <textarea name="symptoms" rows={3}></textarea>
            </div>
            <div className="form-input">
              <label htmlFor="triggers">Triggers</label>
              <textarea name="triggers" rows={3}></textarea>
            </div>
            <div className="form-input">
              <label htmlFor="medication">Medication</label>
              <textarea name="medication" rows={3}></textarea>
            </div>
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
