import React from "react";

const Context = React.createContext(null);

const ProviderWrapper = (pros) => {
    const [goodCounter, setGoodCounter] = React.useState(0);
    const [neutralCounter, setNeutralCounter] = React.useState(0);
    const [badCounter, setBadCounter] = React.useState(0);

    const incrementGoodCounter = () => setGoodCounter(goodCounter + 1);
    const incrementNeutralCounter = () => setNeutralCounter(neutralCounter + 1);
    const incrementBadCounter = () => setBadCounter(badCounter + 1);
    //reset 
    const resetCounter = () => {
        setGoodCounter(0);
        setNeutralCounter(0);
        setBadCounter(0);
    }

    const exposedValue = {
        goodCounter,
        neutralCounter,
        badCounter,
        incrementGoodCounter,
        incrementNeutralCounter,
        incrementBadCounter,
        resetCounter,
    };
    
    return (
        <Context.Provider value={exposedValue}>
            {pros.children}
        </Context.Provider>
    );
}

export { Context, ProviderWrapper };
