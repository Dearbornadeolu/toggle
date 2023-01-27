import { useState } from 'react'
import './App.css'
import Person from './Person/Person'

function App() {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Manu', age: 30 },
      { name: 'Stephanie', age: 40 }
    ],
    showPersons : false
  })

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Maximillian', age: 20 },
        { name: 'Manu one', age: 30 },
        { name: 'Stephanie', age: 60 }
      ]
    })
  }
  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: 'Maximillian', age: 20 },
        { name: event.target.value, age: 30 },
        { name: 'Stephanie', age: 60 }
      ]
    })
  }
 const togglePersonHandler = ()=>{
  const doesShow = personState.showPersons
  setPersonState({
    persons: [
      { name: 'Maximillian', age: 20 },
      { name: 'dearborn', age: 30 },
      { name: 'Stephanie', age: 60 }
    ],
    showPersons : !doesShow
  })
 }

 let persons = null
 if(personState.showPersons){
  persons = (
    <div className='container'>
        <button onClick={switchNameHandler}>Change</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} change={nameChangeHandler} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>
  )
 }

  return (
    <div className="App">
      <button onClick={togglePersonHandler}>Toggle</button>
      {persons}
    </div>
  )
}

export default App
