import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "040-123456", id: 1 },
    { name: "Ada Lovelace", num: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", num: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", num: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");

  const [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const lowerCaseNewName = newName.toLowerCase();
    if (
      persons.find((person) => person.name.toLowerCase() === lowerCaseNewName)
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      num: newNum,
      id: persons.length + 1,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNum("");
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
          <li key={person.name}>
            {person.name} {person.num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
