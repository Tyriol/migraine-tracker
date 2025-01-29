import { useState } from 'react'
import Form from './components/Form/Form'
import FormInput from './components/Form/FormInput/FormInput'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <>
      <header>
        <h1>Migraine Tracker</h1>
      </header>
      <main>
        <div className="add-data-point">
          <h2>Add info about your migraine</h2>
          <Form onSubmit={handleFormSubmit}>
            <div className="date-time">
              <FormInput 
                label="Date"
                name="date"
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                />
                <FormInput label='Time' name='time' type='time' />
            </div>
              <FormInput label="Intensity" type="range" name="intensity" min="1" max="10" />
              <FormInput label='Preceding Symptoms' name="symptoms" type="textarea" rows={3} />
              <FormInput label='Triggers' name="triggers" type="textarea" rows={3} />
              <FormInput label='Medication' name="medication" type="textarea" rows={3} />
          </Form>
        </div>
      </main>
    </>
  )
}

export default App
