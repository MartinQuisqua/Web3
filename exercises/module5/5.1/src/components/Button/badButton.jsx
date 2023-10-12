import { Context as CounterContext } from 'contexts/countersContext';

import { useContext } from "react";

const BadButton = () => {
    const { incrementBadCounter } = useContext(CounterContext);
    return (
        <button onClick={incrementBadCounter}>increase bad</button>
    )
}

export default BadButton;