import Name from './components/Names'
import { useState } from 'react'

const App = () => {
  const [newName, setNewName] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person, index) => (
            <Name key={index} name={person.name} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App