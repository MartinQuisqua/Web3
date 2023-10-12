import React from "react";

const Context = React.createContext(null);

const ProviderWrapper = (pros) => {
    const [language, setLanguage] = React.useState("fr");
    const pickLanguage = (newLanguage) => {
        if (newLanguage !== "fr" && newLanguage !== "en")   throw "Invalid language selected : "+newLanguage;
        setLanguage(newLanguage)    
    }

    const exposedValue = {
        language,
        pickLanguage,
    };

    return (
        <Context.Provider value={exposedValue}>
            {pros.children}
        </Context.Provider>
    );

export { Context, ProviderWrapper };