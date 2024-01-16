import { useState } from 'react'

const App = () => {
  const [newName, setNewName] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map(person =>
            <li key={person}>{person.name}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App