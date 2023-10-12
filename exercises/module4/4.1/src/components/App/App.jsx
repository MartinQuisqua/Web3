import { useState, useEffect } from "react";
import axios from "axios";
import management from "../../services/management";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    management
    .getAll()
    .then(initialPersons => {
      console.log('promise fulfilled')
      setPersons(initialPersons)
    })
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const person = persons.find((person) => person.name === newName);
    if (person) {
      const changedPerson = { ...person, num: newNum };
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        management
        .update(changedPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : returnedPerson))
        })
      }
      return;
    }
    const personObject = {
      name: newName,
      num: newNum,
      id: persons.length + 1,
    };
    management
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    setNewName("");
    setNewNum("");
  };


  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);

    management
      .deleted(id)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
      })
      .catch(error => {
        alert(
          `the note '${person.name}' was already deleted from server`
        )
        setPersons(persons.filter(n => n.id !== id))
      }
      )
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    console.log(event.target.value);
    setNewNum(event.target.value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange} />
      </div>

      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        name : <input value={newName} onChange={handlePersonChange} />
        <br />
        number : <input value={newNum} onChange={handleNumChange} />
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
       
          {personsToShow.map((person) => (
            <li key={person.id}>
              {person.name} {person.num} <button onClick={() => deletePerson(person.id)}>delete</button>
              
            </li>
          ))}
        
      </ul>
      

    </div>
  );
};

export default App;
