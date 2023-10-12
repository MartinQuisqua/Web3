import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (pros) => {
    const [opignonCounters, setOpignoCounters] = useState([]);

    // trie mon tableau par ordre décroissant
    const sortedOpignonCounters = [...opignonCounters].sort((a, b) => b.count - a.count);


    const addopgnon = (name) => {
        const newOpignon = {
            id: uuidv4(),
            name: name,
            count: 1,
        };
        setOpignoCounters([...opignonCounters, newOpignon]);
    }
        
    const addVote = (id) => {
        const newOpignon = opignonCounters.map((opignon) => {
            if (opignon.id === id) {
                return { ...opignon, count: opignon.count + 1 };
            }
            return opignon;
        });
        setOpignoCounters(newOpignon);
    }

    const exposedValue = {
        opignonCounters,
        sortedOpignonCounters,
        addopgnon,
        addVote,
    };





    return (
        <Context.Provider value={exposedValue}>
            {pros.children}
        </Context.Provider>
    );
}

export { Context, ProviderWrapper };
